import { getData } from "../api";
import EviroConfig from "config-items";

async function marketStatus() {
  const response = await getData({ serviceName: EviroConfig.api.seBasic.marketStatus, params:'' })
  const { success, data, error } = response;
  if (success) {
    return Promise.resolve(data);
  }
  else {
    return Promise.reject(error);
  }
}

const seBasicService = {
    marketStatus,
}

export default seBasicService;