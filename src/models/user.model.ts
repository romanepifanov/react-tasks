import { Photos } from './photos.model';

export interface User {
    followed: boolean,
    id: number,
    name: string,
    photos: Photos,
    status: string | null,
    uniqueUrlName: string | null
}
