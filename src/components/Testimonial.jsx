import {
  Image,
  Text,
  Box,
  Heading,
  Button,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { EmptyStar, Star } from "../icons/Star";

const testimonials = [
  {
    image: "/ella-johnson.jpg",
    alt: "User 1",
    name: "Ella Johnson",
    rating: 5,
    testimony:
      "Wrap has revolutionized how our team manages projects. It&apos;s intuitive, easy to use, and has significantly improved our productivity.",
  },
  {
    image: "/daniellee.jpg",
    alt: "User 2",
    name: "Daniel Lee",
    rating: 4,
    testimony:
      "Finally found the perfect balance between simplicity and functionality with Wrap. It's become an essential tool in my daily workflow.",
  },
  {
    image: "/tega.jpg",
    alt: "User 3",
    name: "Tega Yehny",
    rating: 3,
    testimony:
      "Wrap helps me balance projects and deadlines effortlessly. It's a must-have for freelancers looking to boost productivity. Thanks!",
  },
  {
    image: "/davidson.jpg",
    alt: "User 4",
    name: "Davison",
    rating: 5,
    testimony:
      "Wrap is a game-changer! Its user-friendly interface keeps me organized and on track like never before. I love it and will recommend.",
  },
];

function Testimonial() {
  return (
    <Box className="my-20">
      <Box className="testimonial-container flex flex-col items-center">
        <Heading
          maxWidth={857}
          className="testimonial-heading text-5xl font-bold text-center"
        >
          How our clients have <span className="g-text">Wrap</span> up their
          daily tasks
        </Heading>
        <Box className="flex flex-col gap-6">
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={48}
            className="testimonial-card mt-2 mb-8 gap-12"
          >
            {testimonials.map((t, index) => {
              <Box key={index} className="card card-1">
                <Box className="card-top">
                  <Box className="user-img">
                    <Image src={t.image} alt={t.alt} />
                  </Box>
                  <Box className="user-details">
                    <Text as="strong">{t.name}</Text>
                    <HStack spacing={1}>
                      {[
                        ...Array(5).map((_, i) => {
                          i < t.rating ? (
                            <Star key={i} />
                          ) : (
                            <EmptyStar key={i} />
                          );
                        }),
                      ]}
                    </HStack>
                  </Box>
                </Box>
                <Text className="user-testimonial">“{t.testimony}”</Text>
              </Box>;
            })}
          </SimpleGrid>
          <Box className="flex justify-center gap-1">
            <Box className="rect-1 w-8 h-2 bg-[#1165BB]"></Box>
            <Box className="rect-2 w-4 h-2 bg-[#1165BB33]"></Box>
          </Box>
        </Box>
        <Button className="CTA-btn">Join Us</Button>
      </Box>
    </Box>
  );
}
export default Testimonial;
