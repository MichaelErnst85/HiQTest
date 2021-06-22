const axios = require ('axios');

const defaultOptions = {
    baseURL: "localhost:44362/files",
    headers: {
        'Content-Type': 'multipart/from-data'
    }
};

let createAxios = axios.create(defaultOptions);

export default createAxios

