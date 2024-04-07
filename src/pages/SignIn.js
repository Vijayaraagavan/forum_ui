import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { signInWithEmail, signInWithProvider } from "../modules/firestore/auth";
import DarkIcon from "../components/DarkIcon";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { login as loginServer } from "../modules/api/login";
import { useNavigate } from "react-router-dom";
import { setUser } from "../modules/stores/userSlice";
import { useDispatch } from "react-redux";
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
      .then((user) => {
        proceedLogin(user);
      })
      .catch(() => {
        console.log("failed");
      })
      .finally(() => setBtnLoading(false));
  };
  const provideLogin = (id) => {
    signInWithProvider(
      id,
      (user) => {
        // console.log(user)
        proceedLogin(user);
      },
      (f) => {
        console.log("failing", f);
      }
    );
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const proceedLogin = async (user) => {
    const resp = await loginServer(user);
    // console.log(resp);
    dispatch(setUser(resp));
    navigate("/app");
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
          <Container mt={4}>
            <HStack justifyContent="center" spacing={4}>
              <IconButton
                onClick={() => provideLogin("google")}
                isRound={true}
                icon={<FcGoogle />}
              ></IconButton>
              <IconButton
                onClick={() => provideLogin("facebook")}
                isRound={true}
                colorScheme="facebook"
                icon={<FaFacebook />}
              ></IconButton>
              <IconButton
                onClick={() => provideLogin("twitter")}
                isRound={true}
                colorScheme="twitter"
                icon={<FaTwitter />}
              ></IconButton>
            </HStack>
          </Container>
        </VStack>
      </Container>
    </>
  );
}
