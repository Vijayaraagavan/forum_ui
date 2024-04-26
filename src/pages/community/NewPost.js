import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useRoutes } from "react-router-dom";
import { getCommunity } from "../../modules/api/community";

export default function NewPost() {
  const userId = useSelector((state) => state.user.id);
  const apiUrl = useSelector((state) => state.app.apiUrl);
  const params = useParams();
  const [com, setCom] = useState(null);
  useEffect(() => {
    if (!com) {
      getCommunity(params.name)
      .then(v => setCom(v.community))
    }
  }, [])
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const handleTitle = (e) => {
    setPost({
      ...post,
      title: e.target.value,
    });
  };
  const handleBody = (e) => {
    setPost({
      ...post,
      body: e.target.value,
    });
  };
  const submit = async () => {
    const payload = {
      ...post,
      userId: userId,
      community: com._id,
    };
    try {
        const resp = await axios.post(apiUrl + "api/community/post", payload);
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <>
      <Container>
        <FormLabel>Title</FormLabel>
        <Input onChange={handleTitle}></Input>

        <FormLabel>Body</FormLabel>
        <Input onChange={handleBody}></Input>
        <Flex flex={true} justifyContent="end">
          <Button colorScheme="primary" onClick={submit}>
            Submit
          </Button>
        </Flex>
      </Container>
    </>
  );
}
