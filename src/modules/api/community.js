import axios from "axios";
const createCommunity = (payload) => {
  axios.post("http://localhost:3001/api/community", payload).catch((msg) => {
    console.log(msg);
  });
};

export { createCommunity };
