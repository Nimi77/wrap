import { Box, Text, List, ListItem, Image } from "@chakra-ui/react";

function FeatureTwo() {
  return (
    <Box className="wr-4 pb-32 pt-18 ">
      <Box className="flex items-center justify-between justify-items-center mx-auto gap-6 maxW-80">
        <Box className="left-container flex">
          <Box
            position="relative"
            as="svg"
            width="275"
            height="275"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="blue-check-button"
          >
            <circle cx="50" cy="50" r="50" fill="#1579E0" style=""/>
            <path
              d="M30 50 L45 65 L70 35"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
          </Box>
          <Box className="flex flex-col justify-items-center justify-center absolute">
            <Image src="../wrap-features.png" className="w-[392px]" />
            <Box className="offer">
              <Box className="flex items-center justify-center gap-4">
                <Image src=""></Image>
                <Text className="text-dd">Set goals and meet them</Text>
                <Image src=""></Image>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="right-container">
          <List className="wrap-features min-w-503 font-normal text-black ">
            <ListItem>
              <span className="mr-2">&bull;</span>Stay on top of your tasks with
              Wrap&apos;s intuitive task management feature. Organize,
              prioritize, and track your to-dos effortlessly, ensuring nothing
              slips through the cracks.
            </ListItem>
            <ListItem>
              <span className="mr-2">&bull;</span>Manage your projects with ease
              using Wrap&apos;s project organization tools. From planning to
              execution, stay organized, and keep every project on track, every
              step of the way.
            </ListItem>
            <ListItem>
              <span className="mr-2">&bull;</span>Enhance teamwork and
              collaboration with Wrap&apos;s seamless collaboration features.
              Invite team members, assign tasks, and communicate effortlessly,
              fostering synergy and productivity within your team.
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
}
export default FeatureTwo;
