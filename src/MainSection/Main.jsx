import { Box } from "@chakra-ui/react";
import MainFeature from "./MainFeature";
import AboutUs from "./AboutUs";
import FeatureOne from "./FirstFeature";
import FeatureTwo from "./SecondFeature";
import Testimonial from "./Testimonial";
import Download from "./DownloadSection";
import Pricing from "./PricingSection";
import ContactUs from "./ContactUs";

function Main() {
  return (
    <Box as="main" marginBlock={20}>
      <MainFeature />
      <AboutUs />
      <FeatureOne />
      <FeatureTwo />
      <Testimonial />
      <Download />
      <Pricing />
      <ContactUs />
    </Box>
  )
}
export default Main;
