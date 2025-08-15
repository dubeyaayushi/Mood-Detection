import axios from 'axios';

const BASE_URL = "https://mood-detection-frontend.onrender.com/api";


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },  

})


export default axiosInstance;