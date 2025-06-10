import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense, useEffect, useState } from "react"; 
import InstallPrompt from "./components/InstallPrompt";




const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      event.preventDefault();
      setShowInstallPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  return (
    <Router>
      <Suspense fallback={null}>
        <GlobalStyle />
        <ScrollToTop />
        <Header />
        <Home />
        {showInstallPrompt && <InstallPrompt />}
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
