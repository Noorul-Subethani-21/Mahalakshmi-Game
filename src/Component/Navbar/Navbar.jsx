// import  { useState } from "react";
// import {
//   ChakraProvider,
//   Box,
//   HStack,
//   Flex,
//   VStack,
//   Link,
//   Button,
//   Heading,
//   useDisclosure,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerHeader,
//   DrawerBody,
//   Spacer,
//   Text,
//   Stack,
//   Image,
//   InputGroup,
//   Input,
//   InputRightElement,
//   IconButton,
//   Icon,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   useMediaQuery,
// } from "@chakra-ui/react";

// import LOGO from "@/assets/Logo.png";
// import { SearchIcon } from "@chakra-ui/icons";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMahalakshmiClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const [isMobile] = useMediaQuery("(max-width: 800px)");

//   return (
//     <Box
//     width={{ base: "125.4%", md: "100%" }}

//     >
//     <HStack
//       bg="#2b329b"
//       color="white"
//       spacing="4"
//       p={1}
//       w="100%"
//       justifyContent="space-between"
//       align="center"
//       flexWrap={{ base: "wrap", md: "nowrap" }}
//       height={{base:'60'}}
//     >

//         <Image  width={{ base: "30%", md: "6rem", lg:"9rem"}}
//     height={{ base: "50%", md:"4rem", lg:"7rem" }}   m={3} src={LOGO} />

//         {isMobile && (
//           <Box>
//             {/* <IconButton
//               variant="ghost"
//               color="teal.500"
//               icon={<Icon as={SearchIcon} />}
//               aria-label="Search"
//             /> */}
//           </Box>
//         )}
//  {isMobile ? (
// <Box fontWeight={"600"} fontSize={"1em"} cursor="pointer" position="relative" right="6vw" >
//   <Menu isOpen={isMenuOpen} onClose={closeMenu}>
//     <MenuButton as={Button} onClick={handleMahalakshmiClick}>
//       <Text  fontSize={{base:"1rem",lg:"1.5em"}}>
//         Mahalakshmi{" "}
//         <span>
//           <Icon icon="icon-park:down" />
//         </span>
//       </Text>
//     </MenuButton>
//     <MenuList color={"black"} onClose={closeMenu} fontSize={"0.7em"}>
//       <MenuItem>Account Statement</MenuItem>
//       <MenuItem>Profile Loss Report</MenuItem>
//       <MenuItem>Bet History</MenuItem>
//       <MenuItem>Unsettled Bet</MenuItem>
//       <MenuItem>Set Button Values</MenuItem>
//       <MenuItem>Change Password</MenuItem>
//       <Button marginLeft={"1.8rem"}>SignOut</Button>
//     </MenuList>
//   </Menu>
// </Box>
//  ):(

// <Box fontWeight={"600"} fontSize={"1em"} cursor="pointer" position="relative" left="53vw" >
//   <Menu isOpen={isMenuOpen} onClose={closeMenu}>
//     <MenuButton as={Button} onClick={handleMahalakshmiClick}>
//       <Text>
//         Mahalakshmi{" "}
//         <span>
//           <Icon icon="icon-park:down" />
//         </span>
//       </Text>
//     </MenuButton>
//     <MenuList color={"black"} onClose={closeMenu}>
//       <MenuItem>Account Statement</MenuItem>
//       <MenuItem>Profile Loss Report</MenuItem>
//       <MenuItem>Bet History</MenuItem>
//       <MenuItem>Unsettled Bet</MenuItem>
//       <MenuItem>Set Button Values</MenuItem>
//       <MenuItem>Change Password</MenuItem>
//       <Button marginLeft={"1.8rem"}>SignOut</Button>
//     </MenuList>
//   </Menu>
// </Box>
//  )}

//         {isMobile ? (
//           <Box >
//             <Link href="#" color="white" textAlign="center" position="relative" bottom="5vw" left="25vw" fontSize="8vw" >
//               Balance: 0 Exposure: 0
//             </Link>
//             <Link href="#" color="white" textAlign="center" position="relative" bottom="5vw" left="25vw" fontSize="8vw" >
//               Balance: 0 Exposure: 0
//             </Link>
//           </Box>
//         ) : (
//           <Box>
//             <Link href="#" color="white" textAlign="right" position="relative" left="42vw">
//               Balance: 0 Exposure: 0
//             </Link>
//           </Box>
//         )}

//         {isMobile ? (
//           <Box>
//             <Link href="#" color="white" textAlign="right" position="relative" right="50vw" bottom="15vw" fontSize="8vw"
//             display={{base:"none"}}>
//               Rules
//             </Link>
//           </Box>
//         ) : (
//           <Box>
//             <Link href="#" color="white" textAlign="right">
//               Rules
//             </Link>
//           </Box>
//         )}

//         {isMobile ? (
//           <Box marginBottom={'0.5rem'}>
//             <InputGroup>
//               <Input
//                 type="text"
//                 placeholder="Search..."
//                 borderRadius="full"
//                 bg="white"
//                 color="teal.500"

//                 _placeholder={{ color: "teal.300" }}
//                 position="relative"
//                 width="25rem"
//                 left="7vw"

//               />
//               <InputRightElement>
//                 <IconButton
//                   variant="ghost"
//                   color="teal.500"
//                   icon={<Icon as={SearchIcon} />}
//                   aria-label="Search"
//                   position="relative"
//                   left="7vw"
//                 />
//               </InputRightElement>
//             </InputGroup>
//           </Box>
//         ) : (
//           <Box>
//             <InputGroup>
//               <Input
//                 type="text"
//                 placeholder="Search..."
//                 borderRadius="full"
//                 bg="white"
//                 color="teal.500"
//                 textAlign="left"
//                 _placeholder={{ color: "teal.300" }}
//                 position="relative"
//                 right="35vw"
//               />
//               <InputRightElement>
//                 <IconButton
//                   variant="ghost"
//                   color="teal.500"
//                   icon={<Icon as={SearchIcon} />}
//                   aria-label="Search"
//                   position="relative"
//                 right="35vw"
//                 />
//               </InputRightElement>
//             </InputGroup>
//           </Box>
//         )}
//       </HStack>

//       <Stack
//         alignContent={"center"}
//         alignItems={"center"}
//         justifyContent={"center"}
//         maxW={"100%"}
//         direction={{ base: "row", md: "row" }}
//         bg="#092844"
//         color="white"
//         p={2}
//         spacing={12}
//         overflowX={{ base: "scroll", md: "visible" }}

//       >
//         <NavLink to="/home">
//           <Box>Cricket</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Tennis</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Football</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Table tennis</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Kabaddi</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Basketball</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>VollyBall</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Baccart</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Cards</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Teenpatti</Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Poker </Box>
//         </NavLink>
//         <NavLink to="/home">
//           <Box>Lucky 7</Box>
//         </NavLink>
//       </Stack>
//     </Box>
//   );
// };

// export default Navbar;

import {
  Container,
  HStack,
  Box,
  Image,
  Text,
  Flex,
  Stack,
  MenuItem,
  MenuList,
  MenuButton,
  MenuDivider,
  Menu,
  Button,
} from "@chakra-ui/react";
import { AccountBalance, ZoomIn } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

//import React from 'react'

const Navbar = () => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const handleToggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  const handleItemClick = (item) => {
    // Handle item click as needed
    console.log(`Clicked on item: ${item}`);
  };

  return (
    <Container p="0" bg="#2b329b" textColor="white" maxW="100vw">
      <HStack
        spacing={4}
        justify="space-between"
        height={{ base: "20", lg: "20" }}
      >
     {/*  <Box display="flex">
          <Image
            width={{ base: "5rem", md: "6 rem", lg: "7rem" }}
            height={{ base: "5rem", md: "6rem", lg: "7rem" }}
            m={1}
            src={LOGO}
  /> 

          <Box marginTop={{ base: "2rem", lg: "3.5rem" }}>
            <Text fontWeight={{lg:'600'}}>MahaLaxmi</Text>
          </Box>
  </Box>*/}

        <Box alignItems="flex-start">
          <Box
            paddingRight={{ lg: "30" }}
            display={{ base: "grid", md: "flex", lg: "flex" }}
            justifyContent={{ lg: "space-between" }}
            gap={{ lg: "4" }}
          >
            <Box
              display={{ base: "none", md: "flex", lg: "flex" }}
              gap={{ lg: "4" }}
              marginTop={{ lg: "2" }}
              justifyContent="end"
            >
              <ZoomIn />

              <Text
                display={{ base: "none", mg: "flex", lg: "fl" }}
                marginRight={{ lg: "1.5rem" }}
                fontSize={{ lg: "20" }}
              >
                Rule
              </Text>
            </Box>

            <Box>
              <Text display={{ lg: "none" }}>
                <AccountBalance />{" "}
              </Text>
            </Box>

            <Text
              marginTop={{ lg: "2" }}
              marginRight={{ lg: "1.5rem" }}
              fontSize={{ lg: "20" }}
              justifyContent={{ base: "end" }}
              display={{ base: "none", md: "flex", lg: "flex" }}
            >
              Balance:0
            </Text>
            <Text
              textDecor={{ lg: "underline" }}
              marginTop={{ lg: "2" }}
              fontSize={{ lg: "20" }}
              marginRight={{ lg: "1.5rem" }}
            >
              Exposure:0
            </Text>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                // transition="all 0.2s"
                // borderRadius="md"
                // borderWidth="1px"
                _hover={{ bg: "gray.400" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
                fontSize={{lg:'16'}}
                fontWeight={{base:'500',md:'500',lg: "600"}}
               

              >MahaLaxmi<ChevronDownIcon />
              </MenuButton>
              <MenuList  textColor="black">
                <MenuItem>Account Statement</MenuItem>
                <MenuItem>Profit Loss Report</MenuItem>
                
                <MenuItem>Bet History</MenuItem>
                <MenuItem>Unsettled Bet</MenuItem>
                <MenuItem>Set Button Value</MenuItem>
                <MenuItem>Change Password</MenuItem>
                <MenuDivider />
                <MenuItem>SignOut</MenuItem>
              </MenuList>
            </Menu>
            
            <Box bg="#2b329b">
              <NavLink to="/admin">
                <Button>Admin</Button>
              </NavLink>
            </Box>

           
          </Box>
        </Box>
      </HStack>

      <HStack>
        <Flex padding="0">
          <Box
            display={{ base: "flex", md: "flex", lg: "flex" }}
            alignItems="flex-start"
          >
            <Box width={{ base: "7", lg: "40%" }} padding={{ base: "1" }}></Box>

            <Box width={{ base: "100%" }} alignItems={{ lg: "flex-end" }}>
              <marquee behavior="scroll" direction="left" scrolldelay="100">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis quae nam dignissimos vel, aliquam ipsum veniam
                reiciendis ex, commodi consectetur similique, aliquid incidunt!
                Repellendus laudantium non voluptas facilis, facere voluptatem.
              </marquee>
            </Box>
          </Box>
        </Flex>
      </HStack>

      <Stack
        alignContent={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        maxW={"100%"}
        direction={{ base: "row", md: "row" }}
        bg="#092844"
        color="white"
        p={2}
        spacing={12}
        overflowX={{ base: "scroll", md: "visible" }}
      >
        <NavLink to="/home">
          <Box>Cricket</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Tennis</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Football</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Table tennis</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Kabaddi</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Basketball</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>VollyBall</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Baccart</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Cards</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Teenpatti</Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Poker </Box>
        </NavLink>
        <NavLink to="/home">
          <Box>Lucky 7</Box>
        </NavLink>
      </Stack>
    </Container>
  );
};

export default Navbar;