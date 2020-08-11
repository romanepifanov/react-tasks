import axios from 'axios';
import environment from '../environment';

 const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": environment.API_KEY
        }
    }
);

export default instance;