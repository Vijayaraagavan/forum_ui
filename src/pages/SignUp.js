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
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { useContext, useState } from "react";
  import { FaEye } from "react-icons/fa";
  import { FaEyeSlash } from "react-icons/fa";
  import { signUpWithEmail } from "../modules/firestore/auth";
  import DarkIcon from "../components/DarkIcon";
  import { SnackContext } from "../components/SnackCtx";
  import {useNavigate} from 'react-router-dom';
  export default function SignUp() {
    const snack = useContext(SnackContext);
    const navigate = useNavigate();

    console.log(snack)
    const [email, setEmail] = useState("vijay@ardhika.com");
    const [pass, setPass] = useState("123456");
    const [rePass, setRePass] = useState("123456");
    const [visibility, setVisibility] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);
    const [errors, setErrrors] = useState({valid: true});
    const handleMail = (e) => {
      setEmail(e.target.value);
    };
    const handlePass = (e) => {
      setPass(e.target.value);
    };
    const handleRePass = (e) => {
      setRePass(e.target.value);
      if (pass != e.target.value) {
        errors.repass = 'Password not matching';
        errors.valid = false;
      } else {
        errors.repass = '';
        errors.valid = true;
      }
    };
    const create = () => {

      setBtnLoading(true);
      // console.log(email, pass);
      signUpWithEmail(email, pass)
        .then((msg) => {
            console.log(msg)
            snack.show("user created successfully", 'green');
        })
        .catch((msg) => {
          console.log("failed");
            snack.show(msg, 'red');
            navigate('/signIn')
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
                      variant="flushed"
                      type="password"
                    ></Input>
                  </InputGroup>
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
                  <FormLabel textAlign="center">Re-enter Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      onChange={handleRePass}
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
                  {errors.repass && <Text color="red" textAlign="left" pt={2} >*{errors.repass}</Text>}
                </Box>
              </Flex>
            </Container>
            <Container>
              <Button
                onClick={create}
                isLoading={btnLoading}
                variant="solid"
                colorScheme="primary"
                w="100%"
                isDisabled={!errors.valid}
              >
                Create
              </Button>
            </Container>
          </VStack>
        </Container>
      </>
    );
  }
  