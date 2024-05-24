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
  List
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
        className="justify-between py-2 px-7 mx-auto max-w-5xl max-h-[70px] sm:w-[90%] bg-nav shadow-sm overflow-hidden rounded-full "
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
        <Box className="wr-1 mx-auto py-4 mb-16">
          <Box
            textAlign="center"
            display="flex"
            flexDirection={"column"}
            gap={8}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <Heading className="text-4xl w-500 font-Reddit text-primary font-bold ">
              Get Your Life Back in Order with{" "}
              <span className="g-text">Wrap</span>
            </Heading>
            <Text className="text-lg text-secondary w-700">
              An all in one platform for getting daily tasks done, scheduling
              appointments, project management, and so much more.
            </Text>
          </Box>
          <Box display={"flex"} alignContent={"center"} justifyContent={"center"} marginX={"auto"} position={"relative"}>
            <Box className="h-frame-1 flex flex-col translate-x-[3rem] ">
              <Box className="h-box flex items-center justify-center text-center relative top-82">
                <Image src="../h-img-1.png" width='24px' height='24px' marginRight='12px'></Image>
                <Text>Plan and work stress free!</Text>
              </Box>
              <Box className="h-box h-box-two flex items-center justify-center relative left--10 top-[220px]">
                <Text>Get all your work done</Text>
                <Image src="../h-img-2.png" width='24px' height='24px' marginLeft='10px'></Image>
              </Box>
              <Box className="h-box h-box-three relative flex flex-col items-center justify-center left-2 top-[336px]">
                <Box className="people-imgs relative h-16 w-full flex justify-center items-center">
                  <Image src="../img1.png" className="absolute left-10 z-3" />
                  <Image src="../img2.png" className="absolute left-[62px] z-2" />
                  <Image src="../img3.png" className="absolute left-[82px] z-1" />
                  <Image src="../img4.png" className="absolute left-[102px] z-0" />
                </Box>
                <Text className="text-center">Work together with colleagues</Text>
              </Box>
            </Box>
            <Box className="relative z-10 hero-img">
              <Image
                src="../mobile-screen1.png"
                width={400}
                height={700}
                className="relative z-10"
              />
            </Box>
            <Box className="h-frame-2 flex flex-col  -translate-x-[3rem]">
              <Box className="h-box flex flex-col items-center text-center justify-center relative top-82">
                <Image src="../h-img-1.png" width='24px' height='24px' ></Image>
                <Text>56+ Ratings on IOS & Andriod</Text>
              </Box>
              <Box className="h-box h-box-two flex flex-col items-center justify-center relative left-6 top-200">
                <Text>Track each progress</Text>
                <Box className="flex justify-center mt-2">
                  <Box className=" bg-track1 w-[78px] h-2 rounded-full"></Box>
                  <Box className="bg-track2 w-15 h-2 w-[66px] rounded-full flex items-center ">
                    <Box className="h-0.5 rounded-full bg-[#2E8A89] w-[60px] flex items-center justify-center"></Box>
                  </Box>
                  <Box className=" flex items-center justify-center text-tracker bg-track3 text-[6px] font-bold w-5 h-5 rounded-full absolute translate ">63%</Box>
                </Box>
              </Box>
              <Box className="h-box relative flex flex-col items-center left--3 top-310 ">
                <Image src="./h-img-3.png" width='24px' height='24px'></Image>
                <Text className="text-center">Download anywhere</Text>
              </Box>
            </Box>
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

        <Box className="wr-2 mx-auto py-28">
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
            <Image src="../wrap-intro.png" className="wrap-2-img" />
            <Box className="box-container flex items-center absolute top-0 left-1/2 transform -translate-x-1/2  -translate-y-10 gap-2">
              <Box className="box-1">
                <Box className="b-content relative top-[-16px]">
                  <Text className="heading ">Collaborate with people</Text>
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
                <Box className="b-content">
                  <Text className="heading">Track your overall progress</Text>
                  <Box className="flex justify-center mt-2">
                    <Box className=" eclipse1 rounded-full border-4 border-gradient-to-br from-[#00CBC9] to-green-700 "></Box>
                    {/* <Box className="bg-track2 w-15 h-2 w-[66px] rounded-full flex items-center ">
                      <Box className="h-0.5 rounded-full bg-[#2E8A89] w-[60px] flex items-center justify-center"></Box>
                    </Box> */}
                    {/* <Box className=" flex items-center justify-center text-tracker bg-track3 text-[6px] font-bold w-5 h-5 rounded-full absolute translate ">63%</Box> */}
                
                  </Box>
                  {/* <Box>
                    <Box className="first-circle relative z-10 items-center">
                      <Text className="flex justify-center absolute top-0 left-0 bg-tracker font-4 rounded-[50%] items-center w-12 h-12">
                        50%
                      </Text>
                    </Box>
                  </Box> */}
                </Box>
              </Box>
                
            </Box>
          </Box>
        </Box>

        <Box className="wr-3 w-full ">
          <Box className="flex justify-center mx-auto bg-w3 pt-4 h-w3 ">
            <Heading className="text-5xl text-center font-Reddit text-primary font-bold line-h w-571">
                Get Your Life Back in Order with{" "}
                <span className="g-text">Wrap</span>
            </Heading>
          </Box>
          <Box className="flex justify-around items-center font-Reddit mx-auto maxW-80 -translate-x-68">
            <Box className="w3-card-1 w3-card flex flex-col items-center justify-center gradient-border1  bg-white card-shadow transform ">
              <Heading className="font-bold text-md w-172 text-secondary text-center">Add your colleagues to your projects</Heading>
              <Box className="flex gap-9 pt-4 pb-12 collage-users">
                <Box>
                  <Image src="../img2.png" width={70} height={70}></Image>
                  <Image src="../img3.png" width={70} height={70}></Image>
                </Box>
                <Box>
                  <Image src="../img1.png" width={70} height={70}></Image>
                  <Image src="../img4.png" width={70} height={70}></Image>
                </Box>
              </Box>
            </Box>
            <Box className="w3-card-2 w3-card pt-3 gradient-border2 bg-white card-shadow flex flex-col items-center">
              <Heading className="font-bold text-md w-172 text-secondary text-center mt-10">Get more work done</Heading>
              <Box className="h-8 w-8 rounded-full bg-greenn my-4"></Box>
              <Box className="flex flex-col gap-3 ">
                {/* task card one */}
                <Box className="task-card">
                  <Box className="flex items-center justify-between ">
                    <Box className="flex items-center gap-4">
                      <Box className="h-1 w-1 rounded-full bg-greenn"></Box>
                      <Box className="flex flex-col gap-1">
                        <Text className="font-medium text-xs text-black">Hold a meeting with Animation team</Text>
                        <Box className="text-active text-xxs flex">
                          <span></span>
                          <Text>2PM - 3:30PM</Text>
                          <Text marginLeft='8px'>(Work)</Text>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="h-5 w-5 rounded-full border-[1px] border-primary bg-white"></Box>
                  </Box>
                </Box>
                {/* task card two */}
                <Box className="task-card translate-x-10">
                  <Box className="flex items-center justify-between ">
                    <Box className="flex items-center gap-4">
                      <Box className="h-1 w-1 rounded-full bg-red"></Box>
                      <Box className="flex flex-col gap-1">
                        <Text className="font-medium text-xs text-black">Start-up board meeting</Text>
                        <Box className="text-active text-xxs flex">
                          <span></span>
                          <Text>2PM - 3:30PM</Text>
                          <Text marginLeft='8px'>(Work)</Text>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="h-5 w-5 rounded-full border-[1px] border-secondary bg-secondary"></Box>
                  </Box>
                </Box>
                {/* task card three */}
                <Box className="task-card">
                  <Box className="flex items-center justify-between ">
                    <Box className="flex items-center gap-4">
                      <Box className="h-1 w-1 rounded-full bg-greenn"></Box>
                      <Box className="flex flex-col gap-1">
                        <Text className="font-medium text-xs text-black">Get Pizza for my baby</Text>
                        <Box className="text-active text-xxs flex">
                          <span></span>
                          <Text>2PM - 3:30PM</Text>
                          <Text marginLeft='8px'>(Work)</Text>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="h-5 w-5 rounded-full border-[1px] border-primary bg-white"></Box>
                  </Box>
                </Box>
                {/* task card four */}
                <Box className="task-card3">
                  <Box className="flex items-center justify-between ">
                    <Box className="flex items-center gap-4">
                      <Box className="h-1 w-1 rounded-full bg-greenn"></Box>
                      <Text className="font-medium text-xs text-black">Visit the dentist</Text>
                    </Box>
                    <Box className="h-5 w-5 rounded-full border-[1px] border-primary bg-secondary translate-y-2"></Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="w3-card-3 w3-card flex flex-col items-center justify-center py-3 px-7 gradient-border1 bg-white card-shadow">
              <Heading className="font-bold text-md w-[166px] text-secondary text-center pb-2">Manage your projects too</Heading>
              <Box className="flex flex-col gap-2">
                {/* project card one */}
                <Box className="project-card flex flex-col items-center px-7 py-3 my-auto ">
                  <Box className="project-content w-150 flex flex-col justify-items-center justify-center">
                    <Box className="project-heading flex items-center justify-between ">
                      <Heading className="text-dd font-bold">Aftermath App</Heading>
                      <Box className="flex flex-col item-center gap-[2px]">
                        <Box className="s-dot"></Box>
                        <Box className="s-dot"></Box>
                        <Box className="s-dot"></Box>
                      </Box>
                    </Box>
                    <Box className="project-details text-xxs font-normal text-primary mt-1">
                      <List className="flex flex-col">
                        <ListItem>Research on IT services</ListItem>
                        <ListItem>Reach out to the team</ListItem>       
                        <ListItem>Conduct testing <span className="text-[7px] font-light">+10 more</span></ListItem>
                      </List>
                    </Box>
                    <Box className="people-imgs relative mt-1">
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
                    <Box className="flex mt-[2.8rem]">
                      <Box className=" bg-track1 w-[78px] h-2 rounded-full"></Box>
                      <Box className="bg-track2 w-15 h-2 w-[66px] rounded-full flex items-center "></Box>
                      <Box className=" flex items-center justify-center text-tracker bg-track3 text-[6px] font-bold w-5 h-5 rounded-full absolute  translate-99 ">63%</Box>
                    </Box>
                  </Box>
                </Box>
                {/* project card two */}
                <Box className="project-card flex flex-col items-center px-7 py-3 my-auto ">
                  <Box className="project-content w-150 flex flex-col justify-items-center justify-center">
                    <Box className="project-heading flex items-center justify-between ">
                      <Heading className="text-dd font-bold">Egg Research</Heading>
                      <Box className="flex flex-col item-center gap-[2px]">
                        <Box className="s-dot"></Box>
                        <Box className="s-dot"></Box>
                        <Box className="s-dot"></Box>
                      </Box>
                    </Box>
                    <Box className="project-details text-xxs font-normal text-primary mt-1">
                      <List className="flex flex-col">
                        <ListItem>Research on IT services</ListItem>
                        <ListItem>Reach out to the team</ListItem>       
                        <ListItem>Conduct testing <span className="text-[7px] font-light">+10 more</span></ListItem>
                      </List>
                    </Box>
                    <Box className="people-imgs relative mt-1">
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
                    <Box className="flex mt-[2.8rem]">
                      <Box className="bg-track1 w-9 h-2 rounded-full"></Box>
                      <Box className="bg-track2  h-2 w-[100px] rounded-full flex items-center "></Box>
                      <Box className=" flex items-center justify-center text-tracker bg-track3 text-[6px] font-bold w-5 h-5 rounded-full absolute translate-66 ">18%</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="wr-4 py-44">
          <Box></Box>
        </Box>
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
