import { BASE_URL } from "./base_url";
import axios from 'axios'
export const GETALLL=async()=>{  //get All
    let globalData;
    await axios.get(`${BASE_URL}/author`)
    .then((res)=>{
        globalData = res.data;
    })
    return  globalData
}
export const GETBYID=async()=>{  //get by id
    let singleData;
    await axios.get(`${BASE_URL}/author/${id}`)
    .then((res)=>{
        singleData = res.data;
    })
    return singleData
}
export const DELETE=async()=>{ //delete
   await axios.delete(`${BASE_URL}/author/${id}`)
}
export const Post=async(payload)=>{  //post
  await  axios.post(`${BASE_URL}/author`, payload)
}
export const Put=async(id,payload)=>{  //put
    await axios.put(`${BASE_URL}/author/${id}`, payload)
}