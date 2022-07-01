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

const tierService = {
    getAllTier
}

export default tierService;
