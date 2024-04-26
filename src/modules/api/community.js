import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
const createCommunity = (payload) => {
  axios.post(apiUrl + "api/community", payload).catch((msg) => {
    console.log(msg);
  });
};
const getCommunity = (name) => {
  return new Promise((s, f) => {
    axios
      .post(apiUrl + "api/community/page", {
        community: name,
      })
      .then((resp) => {
        s(resp.data);
        // setPosts(resp.data.posts)
      })
      .catch((fail) => f(fail));
  });
};
export { createCommunity, getCommunity };
