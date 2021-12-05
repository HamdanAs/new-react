import instance from "../http-common";

const getAll = (token) => {
  return instance.get("/med?token=" + token);
};

const get = (id, token) => {
  return instance.get(`/med/27?token=` + token);
};

const create = (data, token) => {
  return instance.post("/med?token=" + token, data);
};

const update = (id, data, token) => {
  return instance.put(`/med/${id}?token=` + token, data);
};

const remove = (id, token) => {
  return instance.delete(`/med/${id}?token=` + token);
};

const removeAll = (token) => {
  return instance.delete(`/med?token=` + token);
};

export { getAll, get, create, update, remove, removeAll };
