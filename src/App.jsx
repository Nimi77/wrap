import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";
import Footer from "./components/Footer";
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
      </Box>
      <Footer />
    </>
  );
}

export default App;
