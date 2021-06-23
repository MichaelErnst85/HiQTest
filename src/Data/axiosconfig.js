const axios = require ('axios');

const defaultOptions = {
    baseURL: "https://localhost:44326/files",
    headers: {
        'Content-Type': 'multipart/form-data'
    }
};

let createAxios = axios.create(defaultOptions);

export default createAxios

