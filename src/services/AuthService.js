import { useRecoilState } from "recoil";
import instance from "../http-common";
import { authenticatedUser } from "../store";
import { Constants } from "../utils/Constants";

class AuthService {
  async login(username, password) {
    return await instance
      .post("/login", { username, password })
      .then((response) => {
        if (response.data.result) {
          const userSession = {
            checked: true,
            token: response.data.result,
            username: username,
          };

          localStorage.setItem("user", JSON.stringify(userSession));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return instance.post("/register", { username, email, password });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user")) == null
      ? {
          checked: false,
          token: "",
          username: "",
        }
      : JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
