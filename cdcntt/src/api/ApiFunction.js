import apiConfig from "./ApiConfig";

const api = {
  async getRaiting() {
    return await apiConfig.get("/raitings");
  },
};

export default api;
