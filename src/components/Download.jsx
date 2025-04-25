import { Text, Heading, Box, Image, Button } from "@chakra-ui/react";

function Download() {
  return (
    <Box className="w-full">
      <Box className="flex flex-col items-center justify-center gap-10">
        <Box className="mx-auto max-w-80 text-center flex flex-col items-center gap-2">
          <Heading className="text-3xl text-primary font-bold lg:text-4xl">
            Download <span className="g-text">Wrap</span> and Get Started
          </Heading>
          <Text className="text-lg text-secondary max-w-[700px]">
            An all in one platform for getting daily tasks done, scheduling
            appointments, project management, and so much more.
          </Text>
        </Box>
        <Box className="flex flex-col items-center gap-6 mt-6">
          <Box className="mobile-screens bg-light">
            <Box className="mx-auto max-w-80 grid grid-cols-3">
              <Image src="/mobile-screen-1.png" alt="mobile-screen-1" />
              <Image src="/mobile-screen-2.png" alt="mobile-screen-2" />
              <Image src="/mobile-screen-3.png" alt="mobile-screen-3" />
            </Box>
          </Box>
          <Button className="CTA-btn">Join Us</Button>
        </Box>
      </Box>
    </Box>
  );
}
export default Download;
