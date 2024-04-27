import { useEffect, useState } from "react";
import Action from "../../components/community/Action.js";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Posts from "../../components/community/Posts.js";
import { FaUserPlus } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa6";
import { Button, Card, CardHeader, Flex, Icon, Spacer } from "@chakra-ui/react";
export default function Recent() {
  const apiUrl = useSelector((state) => state.app.apiUrl);
  const userId = useSelector((state) => state.user.id);
  const [communities, setCommunities] = useState([]);
  const processCom = (coms) => {
    const cs = coms.map((c) => {
      if (!c.members) {
        c.joined = false;
        return c;
      }
      console.log(userId, c.members);
      if (c.members.indexOf(userId) != -1) {
        c.joined = true;
        return c;
      }
      c.joined = false;
      return c;
    });
    setCommunities(cs);
  };
  useEffect(() => {
    axios.get(apiUrl + "api/community/recent").then((resp) => {
      processCom(resp.data.communities);
    });
  }, []);
  const join = (e, c) => {
    e.stopPropagation();
    
    axios
      .post(apiUrl + "api/community/" + c._id + "/join", {
        userId: userId,
        communityId: c._id,
      })
      .then((resp) => {
        updateCom(resp.data.community);
      });
  };
  const leave = (e, c) => {
    e.stopPropagation();

    axios
      .post(apiUrl + "api/community/" + c._id + "/leave", {
        userId: userId,
        communityId: c._id,
      })
      .then((resp) => {
        updateCom(resp.data.community);
      });
  };
  const updateCom = (c) => {
    const result = [];
    communities.forEach((v) => {
      if (v._id === c._id) {
        result.push(c);
        return;
      }
      result.push(v);
    });
    processCom(result);
    // setCommunities(result);
  };
  const nav = useNavigate();
  const goToCom = (c) => {
    nav("/app/community/" + c.name);
  };
  return (
    <>
      <h3>Top Trends</h3>
      {communities.map((c) => {
        return (
          <Card key={c._id} marginY={2}>
            <CardHeader p={2}>
              <Flex alignItems="center" onClick={() => goToCom(c)}>
                <h2>{c.name}</h2>
                <Spacer />
                {!c.joined && (
                  <Button
                    colorScheme="transparent"
                    onClick={(e) => join(e, c)}
                    isDisabled={c.joined}
                  >
                    <Icon as={FaUserPlus} color="green"></Icon>
                  </Button>
                )}
                {c.joined && (
                  <Button
                    colorScheme="transparent"
                    onClick={(e) => leave(e, c)}
                    isDisabled={!c.joined}
                  >
                    <Icon as={FaUserMinus} color="red"></Icon>
                  </Button>
                )}
                <h3>Members: {(c.members && c.members.length) || 0}</h3>
              </Flex>
            </CardHeader>
          </Card>
        );
      })}
    </>
  );
}
