import { useEffect, useState } from "react";
import Action from "../../components/community/Action.js";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Posts from "../../components/community/Posts.js";
export default function Home() {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  const apiUrl = useSelector((s) => s.app.apiUrl);
  useEffect(() => {
    axios
      .post(apiUrl + "api/community/page", {
        community: params.name,
      })
      .then((resp) => {
        setPosts(resp.data.posts);
      });
  }, []);
  // useEffect(() => {
  //     axios.post(apiUrl + 'api/community/posts', {
  //         community: communityId
  //     })
  //     .then(resp => {
  //         console.log('cof', resp)
  //         setPosts(resp.data.posts)
  //     }
  //     )
  // }, []);
  const setPost = (p) => {
    const resp = [];
    posts.forEach((r) => {
      if (r._id === p._id) {
        resp.push(p);
        return;
      }
      resp.push(r);
    });
    setPosts(resp);
  };
  return (
    <>
      <Action />
      <Posts posts={posts} setPost={setPost} />
    </>
  );
}
