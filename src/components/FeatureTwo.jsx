import {
  Box,
  Text,
  Image,
  List,
  ListItem,
  Button,
  Grid,
} from "@chakra-ui/react";
import { Star } from "../icons/Star";

function FeatureTwo() {
  return (
    <Box>
      <Box className="max-w-80 mx-auto grid grid-cols-1 gap-[72px] lg:grid-cols-2">
        <Box className="left-container flex items-center">
          <Image src="/checked-circle.svg" className="relative" />

          <Box className="flex flex-col justify-center absolute">
            <Image
              src="../wrap-features.png"
              className="w-[600px] translate-y-36 translate-x-14"
            />
            <Box className="offer translate-x-80 -translate-y-40">
              <Box className="flex items-center gap-4">
                <Star />
                <Text className="text-sm">We have great reviews</Text>
              </Box>
              <Box className="flex items-center gap-4">
                <Text className="text-sm">We have great reviews</Text>
              </Box>
            </Box>
            <Box className="offer translate-x-96 -translate-y-32">
              <Box className="flex flex-col items-center justify-between gap-2">
                <Star />
                <Text>We have great reviews</Text>
              </Box>
            </Box>
            <Box className="offer translate-x-96 -translate-y-36 -z-50">
              <Box className="flex flex-col items-center justify-between gap-2">
                <Image src="../survey.png" width="24" height="24"></Image>
                <Text>You can finally get back on track</Text>
              </Box>
            </Box>
            <Box className="offer flex justify-center items-center translate-x-28 -translate-y-32">
              <Box className="flex items-center justify-between gap-4">
                <Image src="../flag.png" width="24" height="24"></Image>
                <Text>Set goals and meet them</Text>
                <Image src="../target.png" width="24" height="24"></Image>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="right-container flex flex-col gap-6">
          <List className="wrap-features font-normal text-black">
            <ListItem>
              Stay on top of your tasks with Wrap&apos;s intuitive task
              management feature. Organize, prioritize, and track your to-dos
              effortlessly, ensuring nothing slips through the cracks.
            </ListItem>
            <ListItem marginBlock={24}>
              Manage your projects with ease using Wrap&apos;s project
              organization tools. From planning to execution, stay organized,
              and keep every project on track, every step of the way.
            </ListItem>
            <ListItem>
              Enhance teamwork and collaboration with Wrap&apos;s seamless
              collaboration features. Invite team members, assign tasks, and
              communicate effortlessly, fostering synergy and productivity
              within your team.
            </ListItem>
          </List>
          <Grid justifyContent="end">
            <Button className="CTA-btn">Get the App</Button>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
export default FeatureTwo;
