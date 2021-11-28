import instance from "../http-common";

const token =
  "?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ewogICJ1c2VybmFtZSI6ICJhZG1pbiIsCiAgInRpbWVzdGFtcCI6IDE2MzgwNzQyODAxOTMKfQ.XnZNfcQWQTk1CcJdotA1ifgXOe5U8UK6Qq4PY4On094";

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
