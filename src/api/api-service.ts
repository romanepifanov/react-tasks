import axios from 'axios';
import environment from '../environment';

const _instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": environment.API_KEY
        }
    }
);

export const getUsersCall = (page: number): Promise<any> => {
    return _instance.get(`users?page=${page}`)
        .then((response: any) => {
            return response.data;
        });
}

export const deleteFollowCall = (userId: number): Promise<any> => {
    return _instance.delete(`follow/${userId}`)
        .then((response: any) => {
            return response.data;
        });
}

export const addFollowCall = (userId: number): Promise<any> => {
    return _instance.post(`follow/${userId}`)
        .then((response: any) => {
            return response.data;
        });
}

export const updateProfileStatusCall = (status: string): Promise<any> => {
    return _instance.put(`profile/status`, { status })
        .then((response: any) => {
            return response.status === 200;
        });
}


export const getStatusCall = (): Promise<any> => {
    return _instance.get(`auth/me`)
        .then((response: any) => {
            return response.data;
        });
}

export const getProfileCall = (userId: number): Promise<any> => {
    return Promise.all([_instance.get(`profile/${userId}`), _instance.get(`profile/status/${userId}`)])
    .then(function (results) {
        return {profile: results[0].data, status: results[1].data};
    });
}


export const loginCall = (formData: any): Promise<any> => {
    return _instance.post(`auth/login`, formData)
        .then((response: any) => {
            return response.data;
        });
}