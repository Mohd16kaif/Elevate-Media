// Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import ShowcasePage from "../components/ShowcasePage";
import ImpactPage from "../components/ImpactPage";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <HeroSection /> {/* Hero section at the top */}

      <div id="showcase">
        <ShowcasePage />
      </div> {/* Portfolio / Showcase */}

      <div id="impact">
        <ImpactPage />
      </div> {/* Impact section - numbers animated */}

      <About />
      <Services />
      <Testimonials />
      <Contact />
    </Container>
  );
};

export default Home;
