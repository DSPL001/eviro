import { deleteData, getData, postData, putData } from "./api";
import EviroConfig from "config-items";

async function getAllTier() {
  const response = await getData({ serviceName: EviroConfig.api.tier.getAll, params:'' })
  const { success, data, error } = response;
  if (success) {
    return Promise.resolve(data);
  }
  else {
    return Promise.reject(error);
  }
}

async function addTier(title,subheader, price, validity, priority, description1, description2, description3, description4, description5) {  
  const response = await postData({ serviceName: EviroConfig.api.tier.Add, data: { title,subheader, price, validity, priority, description1, description2, description3, description4, description5 } })
  const { success, data, error } = response;
  if (success) {
    return Promise.resolve(data);
  }
  else {
    return Promise.reject(error);
  }
}
async function editTier(id, title,subheader, price, validity, priority, description1, description2, description3, description4, description5) {  
  const response = await putData({ serviceName: EviroConfig.api.tier.Update, params:id, data: { title,subheader, price, validity, priority, description1, description2, description3, description4, description5 } })
  const { success, data, error } = response;
  if (success) {
    return Promise.resolve(data);
  }
  else {
    return Promise.reject(error);
  }
}
async function deleteTier(id, title,subheader, price, validity, priority, description1, description2, description3, description4, description5) {  
  const response = await deleteData({ serviceName: EviroConfig.api.tier.Delete, params:id, data: { title,subheader, price, validity, priority, description1, description2, description3, description4, description5 } })
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
  addTier,
  editTier,
  deleteTier
}

export default tierService;