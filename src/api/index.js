import auth from "./auth.endpoints";
import dog from "./dog.endpoints";

export const base_url = "https://hot-dog-api.herokuapp.com/api";

const axios_package = require("axios");

axios_package.interceptors.response.use(
    undefined,
    function axiosRetryInterceptor(err){
        switch(err.response.status){
            case 401: 
                if(!!localStorage.getItem('token')){
                    localStorage.removeItem('token');
                }
                break;
            default:
                break;
        }

        return Promise.reject(err);
    }
);

const API = {
    auth,
    dog
};

export default API;

export const axios = axios_package;