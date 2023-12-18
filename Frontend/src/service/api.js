import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async(data) =>{
    try{
       return await axios.post(`${URL}/add`, data);
    }catch(error){
        console.log('Error While Calling By Add user Api', error);
    }
}
export const getUsers = async() =>{
    try{
        return await axios.get(`${URL}/all`);
    }catch(error){
        console.log('Error While Fetching Data', error);
    }
}

export const getUsersdata = async(data) =>{
    try{
        return await axios.post(`${URL}/getUser`,data);
    }catch(error){
        console.log('Error While Fetching Data', error);
    }
}


