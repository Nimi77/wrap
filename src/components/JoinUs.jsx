import { Box, Text, Input, Button } from "@chakra-ui/react";

function JoinUs() {
  return (
    <Box>
      <Box className="bg-light">
        <Box className="joinus-content mx-auto max-w-5xl flex md:flex-row flex-col items-center justify-between">
          <Text className="max-w-lg font-bold text-5xl">
            Let’s start getting you <span className="g-text">Wrapped</span> up!
          </Text>
          <Box className="right-container relative">
            <Input placeholder="Type in your email"/>
            <Button className="CTA-btn absolute right-0">Join Us</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default JoinUs;
