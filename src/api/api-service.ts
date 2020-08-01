import axios from 'axios';
import environment from '../environment';

const _instance = axios.create(
    {
        withCredentials: true,
        headers: {
            "API-KEY": environment.API_KEY
        }
    }
);

export const getUsersCall = (page: number): Promise<any> => {
    return _instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
        .then((response: any) => {
            return response.data;
        });
}

export const deleteFollowCall = (userId: number): Promise<any> => {
    return _instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
        .then((response: any) => {
            return response.data;
        });
}

export const addFollowCall = (userId: number): Promise<any> => {
    return _instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
        .then((response: any) => {
            return response.data;
        });
}

export const getStatusCall = (): Promise<any> => {
    return _instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
        .then((response: any) => {
            return response.data;
        });
}

export const getProfileCall = (userId: number): Promise<any> => {
    return _instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((response: any) => {
            return response.data;
        });
}