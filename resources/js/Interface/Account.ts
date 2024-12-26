export interface IAccount {
    id: string
    firstName: string
    lastName: string
    middleName: string
    username: string
    password: string
    updated_at: string
    created_at: string
}

export interface ILogin {
    username: string
    password: string
}