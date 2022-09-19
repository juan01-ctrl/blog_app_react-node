import { IUser } from "../Interfaces/User"

export const LoginStart = () =>({
    type:"LOGIN_START"
})

export const LoginSuccess = (user:IUser) =>({
    type:"LOGIN_SUCCESS",
    payload:user
})

export const LoginFailure= () =>({
    type:"LOGIN_FAILURE",
})
export const Logout = () =>({
    type:"LOGOUT",
})