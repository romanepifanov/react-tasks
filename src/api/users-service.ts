import instance from './api-service';

export const getUsersCall = (page: number): Promise<any> => {
    return instance.get(`users?page=${page}`)
        .then((response: any) => {
            return response.data;
        });
}

export const deleteFollowCall = (userId: number): Promise<any> => {
    return instance.delete(`follow/${userId}`)
        .then((response: any) => {
            return response.data;
        });
}

export const addFollowCall = (userId: number): Promise<any> => {
    return instance.post(`follow/${userId}`)
        .then((response: any) => {
            return response.data;
        });
}