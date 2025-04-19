import { Box, Text, Image } from "@chakra-ui/react";

function FeatureTwo() {
  return (
    <Box className="pt-18">
      <Box className="flex items-center justify-between justify-items-center mx-auto gap-6 max-w-5xl">
        <Box className="left-container flex justify-center items-center">
          <Box
            position="relative"
            as="svg"
            height="240"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="blue-check-button"
          >
            <circle cx="50" cy="50" r="50" fill="#1579E0" />
            <path
              d="M30 50 L45 65 L70 35"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
          </Box>
          <Box className="flex flex-col justify-items-center justify-center absolute translate-x-16">
            <Image src="../wrap-features.png" className="w-[600px]" />
            <Box
              width={290}
              height={64}
              className="offer flex justify-center items-center "
            >
              <Box className="flex items-center justify-center gap-4">
                <Image src="../survey.png" width="24" height="24"></Image>
                <Text className="text-xs13">Set goals and meet them</Text>
                <Image src="../target.png" width="24" height="24"></Image>
              </Box>
            </Box>
            <Box
              height={64}
              className="offer flex justify-center items-center translate-x-6 translate-y-10"
            >
              <Box className="flex items-center justify-center gap-4">
                <Image src="../survey.png" width="24" height="24"></Image>
                <Text className="text-xs13">Set goals and meet them</Text>
                <Image src="../target.png" width="24" height="24"></Image>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Box className="right-container">
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
        </Box> */}
      </Box>
    </Box>
  );
}
export default FeatureTwo;
