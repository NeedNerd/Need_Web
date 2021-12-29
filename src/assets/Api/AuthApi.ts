import axios from "axios";
const SERVER = require("../../config/config.json").SERVER;
class AuthApi {
  async Login(id: string, password: string) {
    const body = {
      id: id,
      password: password,
    };
    const { data } = await axios.post(`${SERVER}/auth/login`, body);

    return data;
  }
  async Register(
    id: string,
    password: string,
    name: string,
    contact: string,
    local: string
  ) {
    const body = {
      id: id,
      password: password,
      name: name,
      contact: contact,
      local: local,
    };

    const { data } = await axios.post(`${SERVER}/auth/register`, body);

    return data;
  }
}

export default new AuthApi();
