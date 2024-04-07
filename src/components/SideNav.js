import {
  Button,
  Flex,
  Icon,
  IconButton,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
// import {MdSettings} from 'react-icons/md';
import { RiCommunityFill } from "react-icons/ri";
import { CgCommunity } from "react-icons/cg";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../modules/themes/UseTheme";
import { logout as signOut } from "../modules/firestore/auth";
// import { useTheme } from "@emotion/react";

const SideNav = () => {
  const themeCtx = useContext(ThemeContext);
  console.log(themeCtx, "adass");
  const { toggleTheme, current: currentTheme } = themeCtx;
  const navs = [
    { id: 1, name: "Recently visited", icon: RiCommunityFill },
    { id: 2, name: "Your communities", icon: CgCommunity },
  ];
  const [isOpened, setOpen] = useState(false);
  const [isDark, setDark] = useState(currentTheme == "dark" ? true : false);
  const toggleDrawer = () => {
    setOpen((v) => !v);
  };
  const changeTheme = () => {
    setDark((v) => !v);
    toggleTheme();
  };
  const logout = () => {
    signOut();
    window.location = "/signIn";
  };
  return (
    <>
      <Button
        colorScheme="transparent"
        onClick={toggleDrawer}
        m={2}
        mt={3}
        variant="ghost"
      >
        <Icon as={MdOutlineAccountCircle} boxSize={6}></Icon>
      </Button>
      <Drawer isOpen={isOpened} onClose={toggleDrawer} placement="left">
        <DrawerContent bgColor="bgcolor">
          <DrawerHeader>
            <Flex alignItems="center" justifyContent="space-between">
              <Text>Account</Text>
              {/* <IconButton icon={<MdOutlineAccountCircle />} variant="ghost" size="lg"></IconButton> */}
              <Button
                colorScheme="transparent"
                onClick={toggleDrawer}
                variant="ghost"
              >
                <Icon as={MdOutlineAccountCircle} boxSize={6}></Icon>
              </Button>{" "}
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack>
              {navs.map((i) => {
                return (
                  <Flex
                    key={i.id}
                    p={2}
                    justifyContent="start"
                    w="100%"
                    _hover={{
                      bgColor: "teal",
                      color: "white",
                    }}
                  >
                    <Icon as={i.icon} mr={2} boxSize={6}></Icon>
                    <Text
                      textAlign="start"
                      ml={4}
                      fontSize="md"
                      fontWeight="800"
                      cursor="pointer"
                    >
                      {i.name}
                    </Text>
                  </Flex>
                  // <Button variant="ghost" leftIcon={<i.icon />} width={300}  >
                  //   <Text textAlign="start">{i.name}</Text>
                  //   {/* <Icon as={i.icon} mr={2} boxSize={6}></Icon> {i.name} */}
                  // </Button>
                );
              })}
            </VStack>
          </DrawerBody>
          <DrawerFooter flexFlow="column">
            <Switch isChecked={isDark} onChange={changeTheme} mb={4}>
              Dark Theme
            </Switch>
            <Button
              w="100%"
              variant="solid"
              colorScheme="primary"
              onClick={logout}
            >
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default SideNav;
