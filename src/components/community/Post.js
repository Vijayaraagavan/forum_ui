import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ImArrowUp } from "react-icons/im";
import { TbArrowBigUp } from "react-icons/tb";

import { ImArrowDown } from "react-icons/im";
import { TbArrowBigDown } from "react-icons/tb";
import DarkIcon from "../DarkIcon";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Post({ post, onUpdate }) {
  const userId = useSelector((s) => s.user.id);
  const likes = post.upVote.length - post.downVote.length;
  const apiUrl = useSelector((s) => s.app.apiUrl);
  const upVote = post.upVote.indexOf(userId) != -1 ? ImArrowUp : TbArrowBigUp;
  const downVote =
    post.downVote.indexOf(userId) != -1 ? ImArrowDown : TbArrowBigDown;

  const vote = (v) => {
    axios
      .post(apiUrl + "api/community/posts/vote", {
        post: post,
        userId: userId,
        vote: v,
      })
      .then((resp) => {
        onUpdate(resp.data.post);
      });
  };
  return (
    <Card p={2} border={2} borderColor="white" colorScheme="primary">
      <CardHeader p={2}>{post.title}</CardHeader>
      <CardBody p={2}>
        {/* {p.body} */}
        <HStack>
          <Button colorScheme="transparent" onClick={() => vote(1)}>
            <Icon as={upVote} color="green"></Icon>
          </Button>
          {/* <DarkIcon icon={TbArrowBigUp} /> */}
          <h3>{likes}</h3>
          <Button colorScheme="transparent" onClick={() => vote(-1)}>
            <Icon as={downVote} color="green"></Icon>
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
}
