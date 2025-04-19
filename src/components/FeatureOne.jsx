import { Image, Text, Box, ListItem, Heading, List } from "@chakra-ui/react";

function FeatureOne() {
  return (
    <Box className="w-full my-28">
      <Box className="flex items-center justify-center mx-auto bg-w3 pt-6 h-331">
        <Heading className="text-4xl text-primary font-bold w-571 pt-6 lg:text-5xl">
          Get Your Life Back in Order with <span className="g-text">Wrap</span>
        </Heading>
      </Box>
      <Box className="f1-card-container font-Reddit grid grid-cols-1 gap-8 mx-auto mt-8 lg:mt-0 sm:grid-cols-2 lg:translate-y-16 lg:grid-cols-3">
        <Box className="f1-card-1 f1-card py-3 px-7 flex flex-col items-center justify-center gradient-border bg-white card-shadow transform">
          <Heading className="font-bold text-md w-172 text-secondary text-center">
            Add your colleagues to your projects
          </Heading>
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
        <Box className="f1-card-2 f1-card pt-3 gradient-border2 bg-white card-shadow flex flex-col items-center">
          <Heading className="font-bold text-md w-172 text-secondary text-center mt-10">
            Get more work done
          </Heading>
          <Box className=" my-4">
            <Box
              as="svg"
              width="32"
              height="32"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" fill="#09A32B" />
              <path
                d="M30 50 L45 65 L70 35"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
              />
            </Box>
          </Box>
          <Box className="flex flex-col gap-3 items-center justify-center">
            {/* task card one */}
            <Box className="task-card">
              <Box className="flex items-center justify-between ">
                <Box className="flex items-center gap-4">
                  <Box className="h-1 w-1 rounded-full bg-greenn"></Box>
                  <Box className="flex flex-col gap-1">
                    <Text className="font-medium text-xs text-black">
                      Hold a meeting with Animation team
                    </Text>
                    <Box className="text-active text-xxs flex">
                      <span></span>
                      <Text>2PM - 3:30PM</Text>
                      <Text marginLeft="8px">(Work)</Text>
                    </Box>
                  </Box>
                </Box>
                <Box className="h-5 w-5 rounded-full border-[1px] border-primary bg-white"></Box>
              </Box>
            </Box>
            {/* task card two */}
            <Box className="task-card task-card-two translate-x-10">
              <Box className="flex items-center justify-between ">
                <Box className="flex items-center gap-4">
                  <Box className="h-1 w-1 rounded-full bg-red"></Box>
                  <Box className="flex flex-col gap-1">
                    <Text className="font-medium text-xs text-black">
                      Start-up board meeting
                    </Text>
                    <Box className="text-active text-xxs flex">
                      <span></span>
                      <Text>2PM - 3:30PM</Text>
                      <Text marginLeft="8px">(Work)</Text>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="50" fill="#0A3C70" />
                    <path
                      d="M30 50 L45 65 L70 35"
                      stroke="white"
                      strokeWidth="10"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </Box>
              </Box>
            </Box>
            {/* task card three */}
            <Box className="task-card">
              <Box className="flex items-center justify-between ">
                <Box className="flex items-center gap-4">
                  <Box className="h-1 w-1 rounded-full bg-greenn"></Box>
                  <Box className="flex flex-col gap-1">
                    <Text className="font-medium text-xs text-black">
                      Get Pizza for my baby
                    </Text>
                    <Box className="text-active text-xxs flex">
                      <span></span>
                      <Text>2PM - 3:30PM</Text>
                      <Text marginLeft="8px">(Work)</Text>
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
                  <Text className="font-medium text-xs text-black">
                    Visit the dentist
                  </Text>
                </Box>
                <Box className="translate-y-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="50" fill="#0A3C70" />
                    <path
                      d="M30 50 L45 65 L70 35"
                      stroke="white"
                      strokeWidth="10"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="f1-card-3 f1-card flex flex-col items-center justify-center py-3 px-7 gradient-border1 bg-white card-shadow">
          <Heading className="font-bold text-md w-[166px] text-secondary text-center pb-2">
            Manage your projects too
          </Heading>
          <Box className="flex flex-col gap-2">
            {/* project card one */}
            <Box className="project-card flex flex-col items-center px-7 py-3 my-auto ">
              <Box className="project-content w-150 flex flex-col justify-items-center justify-center">
                <Box className="project-heading flex items-center justify-between ">
                  <Heading className="text-xs font-bold">Aftermath App</Heading>
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
                    <ListItem>
                      Conduct testing{" "}
                      <span className="text-[7px] font-light">+10 more</span>
                    </ListItem>
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
                  <Box className=" flex items-center justify-center text-tracker bg-track3 text-[6px] font-bold w-5 h-5 rounded-full absolute  translate-99 ">
                    63%
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* project card two */}
            <Box className="project-card flex flex-col items-center px-7 py-3 my-auto ">
              <Box className="project-content w-150 flex flex-col justify-items-center justify-center">
                <Box className="project-heading flex items-center justify-between ">
                  <Heading className="text-xs font-bold">Egg Research</Heading>
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
                    <ListItem>
                      Conduct testing{" "}
                      <span className="text-[7px] font-light">+10 more</span>
                    </ListItem>
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
                  <Box className=" flex items-center justify-center text-tracker bg-track3 text-[6px] font-bold w-5 h-5 rounded-full absolute translate-66 ">
                    18%
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default FeatureOne;
