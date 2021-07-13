/* eslint-disable no-unused-vars */
export interface IUser {
    name: string
    email: string
}
export interface IUserState {
    user: null | IUser
}

export interface IUserActions {
    type: UserActions
    payload: any
}

export enum UserActions {
    SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS',
    SIGNIN_USER_FAIL = 'SIGNIN_USER_FAIL',
    SIGNOUT_USER = 'SIGNOUT_USER',
}
