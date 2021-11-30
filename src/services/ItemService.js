import instance from "../http-common";
import { Constants } from "../utils/Constants";

const token = Constants.token

const getAll = () => {
  return instance.get("/med" + token);
};

const get = (id) => {
  return instance.get(`/med/27` + token);
};

const create = (data) => {
  return instance.post("/med" + token, data);
};

const update = (id, data) => {
  return instance.put(`/med/${id}` + token, data);
};

const remove = (id) => {
  return instance.delete(`/med/${id}` + token);
};

const removeAll = () => {
  return instance.delete(`/med` + token);
};

export { getAll, get, create, update, remove, removeAll };
