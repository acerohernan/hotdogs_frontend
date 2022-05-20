import { base_url, axios } from "./index";
import qs from "qs";

const headers = () => {
    return {Authorization: 'Bearer ' + localStorage.getItem('token')}; 
};

const create = async (data) => {
    return await axios.post(`${base_url}/dog/new`, data, {headers: headers()});
};

const getAll= async () => {
    return await axios.get(`${base_url}/dog/all`, {headers: headers()});
};

const getOne = async (dogId) => {
    return await axios.get(`${base_url}/dog/${dogId}`, {headers: headers()});
};

const updateOne = async (dogId, update) => {
    return await axios.put(`${base_url}/dog/${dogId}`, update ,{headers: headers()});
};

const deleteOne = async (dogId) => {
    return await axios.delete(`${base_url}/dog/${dogId}`, {headers: headers()});
};

const getAllFavorites = async(data) => {
    return axios.post(`${base_url}/dog/fav/all`, data, {headers: headers()})
};

const addFavorite = async(data) => {
    return axios.post(`${base_url}/dog/fav/add`, data, {headers: headers()})
};

const deleteFavorite = async(dogId, favId) => {
    return axios.post(`${base_url}/dog/fav/${favId}`, {id_dog: dogId}, {headers: headers()})
};

export default {
    create,
    getAll,
    getOne,
    updateOne,
    deleteOne,
    getAllFavorites,
    addFavorite,
    deleteFavorite
};