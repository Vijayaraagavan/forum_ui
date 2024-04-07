import axios from "axios";
const getUser = async (uid) => {
  try {
    const resp = await axios.get("http://localhost:3001/api/users/" + uid);
    // console.log(resp.data.user);
    return resp.data.user;
  } catch (error) {
    console.log(error);
    return error.errorCode;
  }
};

export { getUser };
