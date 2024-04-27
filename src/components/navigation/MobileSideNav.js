import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../modules/themes/UseTheme";
import { logout as signOut } from "../../modules/firestore/auth";
// import { useTheme } from "@emotion/react";
import SideNavList from "./SideNavList";
import styles from "./navigation.module.css";
import Footer from "./Footer";

const MobileSide = ({ goTo }) => {
  const themeCtx = useContext(ThemeContext);
  const { theme: currentTheme } = themeCtx;

  const navHeight = {
    height: `calc(100vh - ${currentTheme.general.topBarHeight}px)`,
  };
  return (
    <>
      <Flex flexFlow="column" justifyContent="space-between" style={navHeight}>
        <Box>
          <SideNavList goTo={goTo} className={styles.centernav} mobile={true} />
        </Box>
        <Box className={styles.footer}>
          <Footer />
        </Box>
      </Flex>
    </>
  );
};
export default MobileSide;
