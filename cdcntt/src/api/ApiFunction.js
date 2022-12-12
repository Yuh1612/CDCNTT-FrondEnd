import orderConfig from "./orderConfig";

const orderApi = {
  async getProvinces() {
    return await orderConfig.get("/provinces/");
  },
};

export default orderApi;
