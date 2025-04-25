import { Image, Text, Box, Button } from "@chakra-ui/react";
import ProgressTracker from "../icons/Progress";

function AboutUs() {
  return (
    <Box className="mx-auto max-w-80 my-20 flex flex-col-reverse gap-6 items-center lg:flex-row">
      <Box className="flex flex-col justify-start gap-6">
        <Text lineHeight={1.6}>
          Introducing Wrap, your all-in-one solution for efficient project
          management, seamless task organization, and effortless collaboration.
          Say goodbye to scattered to-do lists and disjointed project workflows.
          With Wrap, streamline your tasks, elevate your productivity, and
          achieve your goals like never before.
        </Text>
        <Button className="CTA-btn mt-8">Join Us</Button>
      </Box>
      <Box className="about-img-container">
        <Image src="../wrap-intro.png" className="wrap-2-img" />
        <Box className="flex items-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 gap-2">
          <Box className="box-1">
            <Box className="box-content relative top-[-16px]">
              <Text className="heading">Collaborate with people</Text>
              <Box className="people-imgs relative left-2 mt-2">
                <Image
                  src="../img1.png"
                  className="absolute top-0 left-0 z-3"
                />
                <Image
                  src="../img2.png"
                  className="absolute top-0 left-6 z-2"
                />
                <Image
                  src="../img3.png"
                  className="absolute top-0 left-11 z-1"
                />
                <Image
                  src="../img4.png"
                  className="absolute top-0 left-[65px] z-0"
                />
              </Box>
            </Box>
          </Box>
          <Box className="box-2">
            <Box className="box-content flex flex-col gap-2 items-center justify-center">
              <Text className="heading">Track your overall progress</Text>
              <ProgressTracker />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default AboutUs;
