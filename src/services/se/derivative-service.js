import { getData, postData } from "../api";
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
  const response = await postData({ serviceName: EviroConfig.api.seBasic.expirydates, data: {code} })    
  const { success, data, error } = response;
  if (success) {
    return Promise.resolve(data);
  }
  else {    
    return Promise.reject(error);
  }
}
async function getStock(code, date) {   
  //console.log(code, date)
  const response = await postData({ serviceName: EviroConfig.api.seBasic.getStockData, data: {code, date} })    
  const { success, data, error } = response;
  if (success) {
    return Promise.resolve(data);
  }
  else {    
    return Promise.reject(error);
  }
}
const derivativeService = {
  quoteMasterData,
  expiryDatesSymbol,
  getStock
}
export default derivativeService;