import { Box, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { SnackContext } from "./SnackCtx";
import { IoMdClose } from "react-icons/io";

export default function Snack() {
  const {snack, close, show} = useContext(SnackContext);
  // context triggers rerender only if its state changes. For object state, it performs shallow comparison. meaning 
  // it checks if object references are equal, so changing a property won't trigger rerender
  // But its value is updated to all child components. it just doesn't rerender
  // so to rerender we need to use separate state in child. when we change state, it rerenders
  // useEffect to watch snack.open (context object property) is useless. useEffect only accepts state as dependency
  /*
    After a while, this solution doesn't work for showing snack. Because show trigger is done by someother component
    This comp will never know unless context tells and rerenders
    so we have no option but to replace context state with new object to trigger rerender
  */
  const closeSnack = () => {
    close();
  }
  return (
    <>
      {snack.open && (
        <Box
          maxW={400}
          minW={350}
          p={2}
          px={4}
          borderRadius={4}
          bgColor={snack.color}
          position="absolute"
          right={5}
          top={4}
        >
            <Flex alignItems="center">
          <Text color="white">{snack.message}</Text>
          <Spacer></Spacer>
          <IconButton onClick={closeSnack} icon={<IoMdClose  />} colorScheme="transparent" color="white"></IconButton>

            </Flex>
        </Box>
      )}
    </>
  );
}
