import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Home() {
  const navigate = useNavigate();
  const goToNewCommunity = () => {
    navigate("community/new");
  };
  const user = useSelector((state) => state.user);
  const enterCom = (c) => {
    navigate("community/" + c.name);
  }
  // console.log("huur", user);
  return (
    <>
      <Container maxW={420}>
        <Button colorScheme="primary" onClick={goToNewCommunity}>
          <Icon as={FaPlus} mr="2"></Icon> Community
        </Button>
      </Container>
      <Container>
        <Accordion allowToggle>
          <AccordionItem border={0}>
            <h2>
              <AccordionButton >
                <Box as="span" flex="1" textAlign="left" fontWeight="600">
                  Your communities
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack>
                {user.communitiesin.map((c) => {
                  return <Button key={c._id} variant="ghost" colorScheme="primary" onClick={() => enterCom(c)}>{c.name} </Button>;
                })}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </>
  );
}
