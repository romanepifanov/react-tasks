import instance from './api-service';

export const getStatusCall = (): Promise<any> => {
    return instance.get(`auth/me`)
        .then((response: any) => {
            return response.data;
        });
}

export const loginCall = (formData: any): Promise<any> => {
    return instance.post(`auth/login`, formData)
        .then((response: any) => {
            return response.data;
        });
}

export const logoutCall = (): Promise<any> => {
    return instance.delete(`auth/login`)
        .then((response: any) => {
            return response.data;
        });
}