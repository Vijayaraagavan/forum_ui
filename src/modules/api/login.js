import axios from "axios";
const login = async (user) => {
  try {
    const resp = await axios.post("http://localhost:3001/api/users", {
      user,
    });
    return resp.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { login };
