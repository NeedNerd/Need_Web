import axios from "axios";
const SERVER = require("../../config/config.json").SERVER;

class PostApi {
  async AllList(state?: string) {
    const { data } = await axios.get(`${SERVER}/post/valid`, {
      params: {
        state: state,
      },
    });
    return data;
  }
  async MyList(state?: string) {
    const token: any = localStorage.getItem("accessToken");
    const { data } = await axios.get(`${SERVER}/post/my`, {
      headers: {
        Authorization: token,
      },
      params: {
        state: state,
      },
    });
    return data;
  }
}

export default new PostApi();
