import { Box, Grid, GridItem } from "@chakra-ui/react";
import SideNav from "../navigation/SideNav";
import { Outlet, useNavigate } from "react-router-dom";
import MobileSideNav from "../navigation/MobileSideNav";
import { useTheme } from "@emotion/react";
import TopBar from "../navigation/TopBar";

export default function SideNavLayout() {
  const theme = useTheme();
  const nav = useNavigate();
  const goTo = (i) => {
    nav(i.link);
  };
  const navShadowRight = {
    // this shows shadow at right and hides at top
    boxShadow: `${theme.colors.cardShadow} 0px 1px 1px`,
  };
  const navShadowDown = {
    boxShadow: `${theme.colors.cardShadow} 0px 0px 1px`,
  };
  return (
    <Grid templateColumns="repeat(12,1fr)" templateRows="repeat{12,1fr)">
      <GridItem w="100%" style={navShadowDown} rowSpan={1} colSpan={12}>
        <Box h={theme.general.topBarHeight + "px"}>
          <TopBar />
        </Box>
      </GridItem>
      <GridItem maxW={320} minW={250} style={navShadowRight} rowSpan={11}>
        {/* <SideNav goTo={goTo} /> */}
        <MobileSideNav goTo={goTo} />
      </GridItem>
      <GridItem colSpan={8} p={4} rowSpan={11}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}
