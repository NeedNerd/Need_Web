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
  async DetailPost(idx: number) {
    const { data } = await axios.get(`${SERVER}/post/${idx}`);

    return data;
  }

  async UploadImg(file: any) {
    const { data } = await axios.post(`${SERVER}/photo/`, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  }

  async Post() {
    const body = {
      title: "제목입니다",
      content: "내용입니다",
      photo: "92041b81-78a5-4a58-b120-a94a8c88d1be.jpg",
      price: 10000,
      state: 0,
    };
    const token: any = localStorage.getItem("accessToken");
    const { data } = await axios.post(`${SERVER}/post`, body, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  }
}

export default new PostApi();
