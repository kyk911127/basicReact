export interface IUsers {
    count: number,
    users: Array<IUserInfo>
}

export interface IUserInfo {
    id?: number,
    name?: string,
    isHere?: boolean
}
