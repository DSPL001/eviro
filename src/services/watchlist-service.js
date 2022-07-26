import { deleteData, getData, postData, putData } from "./api";
import EviroConfig from "config-items";

async function getCollection(userId) {    
  const response = await getData({ serviceName: EviroConfig.api.watchlist.getCollections, params:userId })
  const { success, data, error } = response;
  if (success) {
    return Promise.resolve(data);
  }
  else {
    return Promise.reject(error);
  }
}

async function addCollection(userId, watchlistCollectionName, watchlistCollectionDescription, watchlistCount) {      
  const response = await postData({ serviceName: EviroConfig.api.watchlist.addCollection, data: { userId, watchlistCollectionName, watchlistCollectionDescription, watchlistCount } })
  const { success, data, error } = response;
  if (success) {
    return Promise.resolve(data);
  }
  else {
    return Promise.reject(error);
  }
}
async function editCollection(id, watchlistCollectionName, watchlistCollectionDescription, watchlistCount) {  
  const response = await putData({ serviceName: EviroConfig.api.tier.Update, params:id, data: { watchlistCollectionName, watchlistCollectionDescription, watchlistCount } })
  const { success, data, error } = response;
  if (success) {
    return Promise.resolve(data);
  }
  else {
    return Promise.reject(error);
  }
}
async function deleteCollection(id, watchlistCollectionName, watchlistCollectionDescription, watchlistCount) {  
  const response = await deleteData({ serviceName: EviroConfig.api.tier.Delete, params:id, data: { watchlistCollectionName, watchlistCollectionDescription, watchlistCount } })
  const { success, data, error } = response;
  if (success) {
    return Promise.resolve(data);
  }
  else {
    return Promise.reject(error);
  }
}

const watchlistService = {
    getCollection,
    addCollection, 
    editCollection, 
    deleteCollection
}

export default watchlistService;