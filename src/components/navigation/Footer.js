import { Button, Flex, Switch } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../modules/themes/UseTheme";
import { logout as signOut } from "../../modules/firestore/auth";

export default function Footer() {
  const themeCtx = useContext(ThemeContext);
  const { toggleTheme, current: currentTheme } = themeCtx;
  const [isDark, setDark] = useState(currentTheme == "dark" ? true : false);

  const changeTheme = () => {
    setDark((v) => !v);
    toggleTheme();
  };
  const logout = () => {
    signOut();
    window.location = "/signIn";
  };

  return (
    <Flex flexFlow="column" w="100%" alignItems="center">
      <Switch isChecked={isDark} onChange={changeTheme} mb={4}>
        Dark Theme
      </Switch>
      <Button w="100%" variant="solid" colorScheme="primary" onClick={logout}>
        Logout
      </Button>
    </Flex>
  );
}
