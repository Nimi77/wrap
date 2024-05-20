// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import {
  Image,
  Text,
  Flex,
  Box,
  Link,
  Button,
  ListItem,
  UnorderedList,
  Heading,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [activeNav, setActiveNav] = useState(1);
  const handleNavClick = (index) => {
    setActiveNav(index);
  };

  return (
    <div className="font-Teachers">
      <Flex
        as="nav"
        align="center"
        marginTop="39px"
        className="justify-between py-2 px-7 mx-auto max-w-5xl max-h-[70px] sm:w-[90%] bg-[#0d529c1a] shadow-sm overflow-hidden rounded-full "
      >
        <Box className="flex align-center justify-center mb-2">
          <Image width={128} src="../wrap-icon.png"></Image>
        </Box>
        {/* Nav links */}
        <UnorderedList
          marginLeft="0"
          className="nav-list flex justify-center align-center text-md space-x-8 "
        >
          {[
            { id: 1, name: "Home" },
            { id: 2, name: "About Us" },
            { id: 3, name: "Contact Us" },
            { id: 4, name: "Pricing" },
          ].map((item) => (
            <ListItem
              key={item.id}
              cursor={"pointer"}
              onClick={() => handleNavClick(item.id)}
              fontWeight={activeNav === item.id ? "600" : "400"}
              color={activeNav === item.id ? "#0A3C70" : "black"}
              position="relative"
              className="flex column"
            >
              <Link position={"relative"}>{item.name}</Link>
              {activeNav === item.id && (
                <div className="absolute rounded-full bottom-0 left-1/2 w-5 h-2 transform -translate-x-1/2 top-6 bg-gradient-to-b from-blue-800 to-teal-300"></div>
              )}
            </ListItem>
          ))}
        </UnorderedList>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button className="gradient-btn">Get the APP</Button>
        </Box>
      </Flex>
      <Box as="main" marginTop={20}>
        <Box
          maxW={"80%"}
          className="wr-1 display-flex flex-col justify-center align-center mx-auto py-4"
        >
          <Box
            textAlign="center"
            display="flex"
            flexDirection={"column"}
            gap={8}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <Heading className="text-4xl text-w font-Reddit text-primary font-bold leading-[60px] ">
              Get Your Life Back in Order with{" "}
              <span className="g-text">Wrap</span>
            </Heading>
            <Text className="text-lg text-secondary">
              An all in one platform for getting daily tasks done, scheduling
              appointments, project management, and so much more.
            </Text>
          </Box>
          <Box className="hero-img-container ">
            {/* <Box justifyContent={'flex-start'} className='frame-1'>
              <Text className='box'></Text>
              <Text></Text>
            </Box> */}
            <Image
              src="../mobile-screen1.png"
              className="hero-bg"
              width={400}
              height={700}
            ></Image>
            {/* <Box justifyContent={'flex-end'} className='frame-2'>
              <Text className='box'></Text>
              <Text></Text>
            </Box> */}
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop={-30}
          >
            <Button className="gradient-btn">Get the APP</Button>
          </Box>
        </Box>
        <Box className="wr-2 mx-auto my-5 py-6">
          <Box className="left-c flex flex-col justify-start">
            <Text>
              Introducing Wrap, your all-in-one solution for efficient project
              management, seamless task organization, and effortless
              collaboration. Say goodbye to scattered to-do lists and disjointed
              project workflows. With Wrap, streamline your tasks, elevate your
              productivity, and achieve your goals like never before.
            </Text>
            <Button className="gradient-btn mt-8">Join Us</Button>
          </Box>
          <Box className="right-c">
            <Image src="../wrap-intro.png" className="warp-2-img" />
            <Box className="card-c flex items-center absolute top-0 left-1/2 transform -translate-x-1/2  -translate-y-10 gap-2">
              <Box className="card-cc">
                <Text className="heading">Collaborate with people</Text>
                <Box className="people-imgs relative left-2">
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
              <Box className="card-cc">
                <Text className="heading">Track your overall progress</Text>
                <Box>
                  <Box className="first-circle relative z-10 items-center">
                    <Text className="flex justify-center absolute top-0 left-0 bg-tracker font-4 rounded-[50%] items-center w-12 h-12">
                      50%
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="wr-3"></Box>
        <Box className="wr-4"></Box>
        <Box className="wr-5"></Box>
        <Box className="wr-6"></Box>
        <Box className="wr-7"></Box>
        <Box className="wr-8"></Box>
      </Box>
      <Box as="footer"></Box>
    </div>
  );
}
// bg-gradient-to-r from-[#0E5095CC] to-[#1786F9CC]

export default App;
