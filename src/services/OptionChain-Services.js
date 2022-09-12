import { getData, postData } from "./api";
import EviroConfig from "config-items";

async function quoteMasterData() {
  const response = await getData({ serviceName: EviroConfig.api.seBasic.quotemaster, params:'' })
  const { success, data, error } = response;
  if (success) {
    return Promise.resolve(data);
  }
  else {
    return Promise.reject(error);
  }
}

async function expiryDatesSymbol(code) {  
  const service = EviroConfig.api.seBasic.expirydates + '?code=' + code
  const response = await postData({ serviceName: service, data: {code} })    
  const { success, data, error } = response;
  if (success) {
    return Promise.resolve(data);
  }
  else {    
    return Promise.reject(error);
  }
}
const optionChainService = {
  quoteMasterData,
  expiryDatesSymbol
}
export default optionChainService;