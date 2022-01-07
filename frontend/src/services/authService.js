import http from "../config/http.js";
import { setStorageItem } from "../config/storage.js";

export const loginUser = async ({ email, password }) => {
  try {
    const response = await http.post("/login", { email, password });
    setStorageItem("user", JSON.stringify(response.data));
    if (response.data.token) {
      http.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
    }
    return setResponse(null, response.data);
  } catch (error) {
  }
};

function setResponse(error, response) {
  return {
    error,
    response,
  };
}
