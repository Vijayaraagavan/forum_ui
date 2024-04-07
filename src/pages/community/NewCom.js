import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux";
import { createCommunity } from "../../modules/api/community";
// import {id as userId} from '../../modules/stores/userSlice';
export default function NewCom() {
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const [communityName, setCommunityName] = useState("");

  const handleName = (e) => {
    setCommunityName(e.target.value);
    validate();
    if (e.target.value.length < 3) {
      errors.community = "Name must be atleast 3 letters";
      setValid(false);
    } else {
      errors.community = "";
      setValid(true);
    }
  };
  const validate = () => {};
  const userId = useSelector((state) => state.user.id);
  const create = () => {
    // console.log(userId);
    let payload = {
      name: communityName,
      createdBy: userId.payload,
    };
    createCommunity(payload);
  };
  return (
    <>
      <Container>
        <FormControl isInvalid={!valid}>
          <FormLabel>Community Name</FormLabel>
          <Input onChange={handleName} variant="outline" maxW={300}></Input>
          <FormErrorMessage>{errors.community}</FormErrorMessage>
        </FormControl>
      </Container>
      <Container mt={4}>
        <Button onClick={create} ml="auto" colorScheme="primary">
          Submit
        </Button>
      </Container>
    </>
  );
}
