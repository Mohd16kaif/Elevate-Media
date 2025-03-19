//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import ShowcasePage from "../components/ShowcasePage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (

    <Container>
      <HeroSection />   {/* Hero section at the top */}
      <div id="showcase">
  <ShowcasePage />
</div>   {/* Showcase section added after Hero */}
      <About />          {/* About section comes after Showcase */}
      <Services />
      <Testimonials />
      <Contact />
    </Container>
    // <Container>
    //   <HeroSection />
    //   <About />
    //   <Services />
    //   <Testimonials />
    //   <Contact />
    // </Container>
  );
};

export default Home;
