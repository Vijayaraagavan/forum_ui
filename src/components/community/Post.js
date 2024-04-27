import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Icon,
  useTheme,
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
  const theme = useTheme();
  const vote = (v) => {
    let remove = false;
    if (v > 0 && post.upVote.indexOf(userId) != -1) {
      remove = true;
    }
    if (v < 0 && post.downVote.indexOf(userId) != -1) {
      remove = true;
    }
    axios
      .post(apiUrl + "api/community/posts/vote", {
        post: post,
        userId: userId,
        vote: v,
        remove: remove,
      })
      .then((resp) => {
        onUpdate(resp.data.post);
      });
  };
  const sty = {
    boxShadow: "0px 0px 2px rgba(255, 255, 255, 0.5)",
    color: theme.colors.text,
    backgroundColor: "transparent",
  };
  return (
    <Card p={2} m={2} variant="filled" style={sty}>
      <CardHeader p={2} pl={4}>
        {post.title}
      </CardHeader>
      <CardBody p={2} pl={0}>
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
