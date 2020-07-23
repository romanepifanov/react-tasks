export interface User {
    followed: boolean,
    id: number,
    name: string,
    photos: Photos,
    status: string | null,
    uniqueUrlName: string | null
}

export interface Photos {
    small: string | null,
    large: string | null
}