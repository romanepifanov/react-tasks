import instance from './api-service';

export const updateProfileStatusCall = (status: string): Promise<any> => {
    return instance.put(`profile/status`, { status })
        .then((response: any) => {
            return response.status === 200;
        });
}

export const getProfileCall = (userId: number): Promise<any> => {
    return Promise.all([instance.get(`profile/${userId}`), instance.get(`profile/status/${userId}`)])
        .then(function (results) {
            return { profile: results[0].data, status: results[1].data };
        });
}