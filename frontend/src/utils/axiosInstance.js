import axios from 'axios';

// const BASE_URL = "https://mood-detection-backend.onrender.com/api";
const BASE_URL="http://localhost:3000/api";


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },  

})


export default axiosInstance;