import { getData, postData } from "./api-call";
import EviroConfig from "config-items";

async function getAllTier() {
    const response = await getData({ serviceName: EviroConfig.api.tier.getAll })
    const { success, data, error } = response;
    if (success) {
        return Promise.resolve(data);
    }
    else {
        return Promise.reject(error);
    }
}

async function addTier(tierName, description, amount, validity) {  
    const response = await postData({ serviceName: EviroConfig.api.tier.Add, data: { tierName, description, amount, validity } })
    const { success, data, error } = response;
    if (success) {
      return Promise.resolve(data);
    }
    else {
      return Promise.reject(error);
    }
  }

const tierService = {
    getAllTier,
    addTier
}

export default tierService;
