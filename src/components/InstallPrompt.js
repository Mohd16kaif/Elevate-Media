import { useEffect, useState } from "react";
import styled from "styled-components"; // Import styled-components

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        }
        setDeferredPrompt(null);
        setShowPrompt(false);
      });
    }
    setClicked(true);
  };

  if (!showPrompt) return null;

  return (
    <PopupContainer>
      <p>Install Elevate Media for a better experience</p>
      <InstallButton $clicked={clicked} onClick={handleInstallClick}>
        Install App
      </InstallButton>
    </PopupContainer>
  );
};

// Styled Components
const PopupContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #0a0b10;
  color: #fff;
  padding: 15px;
  border-radius: 8px;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const InstallButton = styled.button`
  background: ${(props) => (props.$clicked ? "#e5a1f8" : "#803bec")};
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #e5a1f8;
  }
`;

export default InstallPrompt;
