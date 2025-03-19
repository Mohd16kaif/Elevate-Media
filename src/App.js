import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react"; 
// import ShowcasePage from "./components/ShowcasePage";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));
// const MediaShowcase = lazy(() => import("./Pages/MediaShowcase"));

function App() {
  return (
    <>
    <Router>
      {/* <div style = {{ cursor:'D:\Elevate Media\Agency-website\src\assets\cursor.cur'}}>

      </div> */}
      <Suspense fallback={null}>
        <GlobalStyle />
        {/* Hi There! */}
        
        <ScrollToTop />
        <Header />
        <Home />
        <Footer />
      </Suspense>
      </Router>
    </>
  );
}

export default App;
