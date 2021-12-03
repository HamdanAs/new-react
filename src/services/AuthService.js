import instance from "../http-common";
import { Constants } from "../utils/Constants";

class AuthService {
  async login(username, password) {
    return await instance
      .post("/login", { username, password })
      .then((response) => {
        if (response.data.result) {
          localStorage.setItem("user", JSON.stringify(response.data));
          Constants.token = this.getCurrentUser().result;
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
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
