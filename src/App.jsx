import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";
import Testimonial from "./components/Testimonial";
import Download from "./components/Download";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Box as="main" marginBlock={30}>
        <Hero />
        <About />
        <FeatureOne />
        <FeatureTwo />
        <Testimonial />
        <Download />
        <Pricing />
        <JoinUs />
      </Box>
      <Footer />
    </>
  );
}

export default App;
