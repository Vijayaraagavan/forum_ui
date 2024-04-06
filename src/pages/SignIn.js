import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { signInWithEmail } from "../modules/firestore/auth";
import DarkIcon from "../components/DarkIcon";

export default function SignIn() {
  const [email, setEmail] = useState("vijay@ardhika.com");
  const [pass, setPass] = useState("123456");
  const [visibility, setVisibility] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const handleMail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const login = () => {
    setBtnLoading(true);
    // console.log(email, pass);
    signInWithEmail(email, pass)
      .then()
      .catch(() => {
        console.log("failed");
      })
      .finally(() => setBtnLoading(false));
  };
  return (
    <>
      <Container maxW={420}>
        <VStack boxShadow="md" p={2}>
          <Container>
            <Flex direction="column" alignItems="center">
              <Box
                border="0px"
                borderRadius={8}
                p={2}
                boxShadow={2}
                w="80%"
                textAlign="center"
              >
                <FormLabel textAlign="center">Email</FormLabel>
                <Input
                  onChange={handleMail}
                  placeholder="abc@gmail.com"
                  w={245}
                  border="0"
                  variant="flushed"
                ></Input>
              </Box>
            </Flex>
          </Container>
          <Container>
            <Flex direction="column" alignItems="center">
              <Box
                border="0px"
                borderRadius={8}
                p={2}
                boxShadow={2}
                w="80%"
                textAlign="center"
              >
                <FormLabel textAlign="center">Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    onChange={handlePass}
                    placeholder="*****"
                    border="0"
                    w={200}
                    variant="flushed"
                    type={visibility ? "text" : "password"}
                  ></Input>
                  <InputRightElement>
                    <DarkIcon
                      icon={visibility ? FaEye : FaEyeSlash}
                      onClick={() => setVisibility((v) => !v)}
                    ></DarkIcon>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Flex>
          </Container>
          <Container>
            <Button
              onClick={login}
              isLoading={btnLoading}
              variant="solid"
              colorScheme="primary"
              w="100%"
            >
              Login
            </Button>
          </Container>
        </VStack>
      </Container>
    </>
  );
}
