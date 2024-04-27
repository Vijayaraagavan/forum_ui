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
import { MdOutlineAccountCircle } from "react-icons/md";
import { useState } from "react";
import Footer from "./Footer";
// import { useTheme } from "@emotion/react";
import SideNavList from "./SideNavList";

const SideNav = ({goTo}) => {
  const [isOpened, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen((v) => !v);
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
            <SideNavList goTo={goTo} />
          </DrawerBody>
          <DrawerFooter flexFlow="column">
            <Footer />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default SideNav;
