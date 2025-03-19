import { useState } from "react";
import emailjs from "emailjs-com";
import LinkedId from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--pink);
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg) brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input, textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:focus {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  textarea {
    margin-bottom: 2rem;
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  display: flex;
  gap: 1rem; /* Added space between name and email */
  @media only screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const StatusMessage = styled.p`
  color: white;
  text-align: center;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.1);
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      "service_b894m2b", // Replace with your EmailJS Service ID
      "template_33r9z1o", // Replace with your EmailJS Template ID
      e.target,
      "DVqxroy9bdVgwQu-O" // Replace with your EmailJS Public Key
    ).then(
      (result) => {
        console.log("Email sent successfully!", result.text);
        setStatusMessage("✅ Your message has been sent successfully!");
      },
      (error) => {
        console.error("Error sending email:", error.text);
        setStatusMessage("❌ Failed to send message. Please try again later.");
      }
    );

    e.target.reset();
  };

  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      <Icons>
        <a href="https://www.linkedin.com/in/elevate-media-3a6404355/">
          <img src={LinkedId} alt="LinkedIn" />
        </a>
        <a href="https://x.com/ElevateMedia96">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/elevatemedia96/?hl=en">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Icons>

      <Form onSubmit={handleSubmit}>
        <Row>
          <input name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Enter working email" value={formData.email} onChange={handleChange} required />
        </Row>
        <textarea name="message" cols="30" rows="2" placeholder="Your message" value={formData.message} onChange={handleChange} required></textarea>

        <div style={{ margin: "0 auto" }}>
          <button type="submit">Submit</button>
        </div>
        {statusMessage && <StatusMessage>{statusMessage}</StatusMessage>}
      </Form>
    </ContactSection>
  );
};

export default Contact;
