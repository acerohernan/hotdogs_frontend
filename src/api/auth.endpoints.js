import { base_url, axios } from "./index";

const headers = () => {
    return {Authorization: 'Bearer ' + localStorage.getItem('token')}; 
};

const register = async (data) => {
    return await axios.post(`${base_url}/auth/signup`, data);
};

const login = async(data) => {
    return await axios.post(`${base_url}/auth/login`, data);
};

const logout = async(data = {}) => {
    return await axios.post(`${base_url}/auth/logout`, data, {headers: headers()});
};

export default {
    register,
    login,
    logout
};