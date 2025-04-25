import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

function Pricing() {
  return (
    <Box className="w-full my-20">
      <Box className="mx-auto max-w-80 flex flex-col items-center justify-center gap-6">
        <Box className="text-center flex flex-col items-center gap-2">
          <Heading className="text-3xl text-primary font-bold w-500 lg:text-4xl">
            <span className="g-text">Our</span> Pricing Packages
          </Heading>
          <Text className="text-lg text-secondary max-w-[700px]">
            An all in one platform for getting daily tasks done, scheduling
            appointments, project management, and so much more.
          </Text>
        </Box>
        <Box className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Box className="basic-p pricing">
            <Box className="p-body flex flex-col gap-14">
              <Box className="p-heading text-secondary">
                <Heading as="h4">Basic</Heading>
                <Heading as="h2">
                  0.0$<Text as="sup">/mo</Text>
                </Heading>
                <Text>Get access to the basic features Wrap offers</Text>
                <span className="line"></span>
              </Box>
              <Box className="features text-secondary">
                <Heading as="" className="title">
                  Features
                </Heading>
                <UnorderedList>
                  <ListItem>
                    <span>Task Management</span>
                  </ListItem>
                  <ListItem>
                    <span>Limited Project Creation</span>
                  </ListItem>
                  <ListItem>
                    <span>Collaboration</span>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Button>Get the App</Button>
          </Box>
          <Box className="premium-p pricing">
            <Box className="p-body flex flex-col gap-14">
              <Box className="p-heading">
                <Heading as="h4">Premium</Heading>
                <Heading as="h2">
                  89.79$<Text as="sup">/mo</Text>
                </Heading>
                <Text>Get access to the exclusive features Wrap offers</Text>
                <span className="line"></span>
              </Box>
              <Box className="features">
                <Heading as="" className="title">
                  Premium
                </Heading>
                <UnorderedList>
                  <ListItem>
                    <span>Advanced Task Management</span>
                  </ListItem>
                  <ListItem>
                    <span>Priority Support</span>
                  </ListItem>
                  <ListItem>
                    <span>Enhanced Security</span>
                  </ListItem>
                  <ListItem>
                    <span>Integration Options</span>
                  </ListItem>
                  <ListItem>
                    <span>Personalization</span>
                  </ListItem>
                  <ListItem>
                    <span>Unlimited Projects</span>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Flex alignItems="center" justifyContent="center">
              <Button className="text-secondary bg-white">Get the App</Button>
            </Flex>
          </Box>
          <Box className="business-p pricing">
            <Box className="p-body flex flex-col gap-14">
              <Box className="p-heading text-secondary">
                <Heading as="h4">Business</Heading>
                <Heading as="h2">
                  60.3$<Text as="sup">/mo</Text>
                </Heading>
                <Text>Get access to the enterprise features Wrap offers</Text>
                <span className="line"></span>
              </Box>
              <Box className="features text-secondary">
                <Heading as="" className="title">
                  Features
                </Heading>
                <UnorderedList>
                  <ListItem>
                    <span>Enhaced Task Management</span>
                  </ListItem>
                  <ListItem>
                    <span>Unlimited Projects</span>
                  </ListItem>
                  <ListItem>
                    <span>Team Collaboration</span>
                  </ListItem>
                  <ListItem>
                    <span>Customizable Reminders</span>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Button>Get the App</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Pricing;
