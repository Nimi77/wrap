import { useState } from "react";
import {
  Image,
  Flex,
  Box,
  Link,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

function Header() {
  const [activeNav, setActiveNav] = useState(1);
  const handleNavClick = (index) => {
    setActiveNav(index);
  };

  return (
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
  );
}

export default Header;