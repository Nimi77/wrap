import { Image, Text, Box, Button, Heading } from "@chakra-ui/react";

function MainFeature() {
    return (
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
                    Get Your Life Back in Order with <span className="g-text">Wrap</span>
                </Heading>
                <Text className="text-lg text-secondary w-700">
                    An all in one platform for getting daily tasks done, scheduling
                    appointments, project management, and so much more.
                </Text>
            </Box>
            <Box
                display={"flex"}
                alignContent={"center"}
                justifyContent={"center"}
                marginX={"auto"}
                position={"relative"}
            >
                <Box className="h-frame-1 flex flex-col translate-x-[3rem] ">
                    <Box className="h-box flex items-center justify-center text-center relative top-82">
                        <Image
                            src="../h-img-1.png"
                            width="24px"
                            height="24px"
                            marginRight="12px"
                        ></Image>
                        <Text>Plan and work stress free!</Text>
                    </Box>
                    <Box className="h-box h-box-two flex items-center justify-center relative left--10 top-[220px]">
                        <Text>Get all your work done</Text>
                        <Image
                            src="../h-img-2.png"
                            width="24px"
                            height="24px"
                            marginLeft="10px"
                        ></Image>
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
                        <Image src="../h-img-1.png" width="24px" height="24px"></Image>
                        <Text>56+ Ratings on IOS & Andriod</Text>
                    </Box>
                    <Box className="h-box h-box-two flex flex-col items-center justify-center relative left-6 top-200">
                        <Text>Track each progress</Text>
                        <Box className="flex justify-center mt-2">
                            <Box className=" bg-track1 w-[78px] h-2 rounded-full"></Box>
                            <Box className="bg-track2 w-15 h-2 w-[66px] rounded-full flex items-center ">
                                <Box className="h-0.5 rounded-full bg-[#2E8A89] w-[60px] flex items-center justify-center"></Box>
                            </Box>
                            <Box className=" flex items-center justify-center text-tracker bg-track3 text-[6px] font-bold w-5 h-5 rounded-full absolute translate ">
                                63%
                            </Box>
                        </Box>
                    </Box>
                    <Box className="h-box relative flex flex-col items-center left--3 top-310 ">
                        <Image src="./h-img-3.png" width="24px" height="24px"></Image>
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
    );
}

export default MainFeature;
