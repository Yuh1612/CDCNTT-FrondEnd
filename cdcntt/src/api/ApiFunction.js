import apiConfig from "./ApiConfig";

const api = {
  async getRaitings() {
    return await apiConfig.get("/raitings");
  },
};

export default api;
