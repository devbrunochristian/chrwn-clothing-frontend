import axios from 'axios'
import { UserActions } from 'reducers/user-reducer/user-reducer-types'

export const signInUser =
    (email: string, password: string) => async (dispatch: any) => {
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/signin/`,
                { email, password }
            )
            const user = await res.data
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({
                type: UserActions.SIGNIN_USER_SUCCESS,
                payload: { name: user.name, email: user.email },
            })
        } catch (error) {
            dispatch({
                type: UserActions.SIGNIN_USER_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })
        }
    }

export const signUpUser =
    (name: string, email: string, password: string) =>
    async (dispatch: any) => {
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/signup/`,
                { name, email, password }
            )
            const user = await res.data
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({
                type: UserActions.SIGNUP_USER_SUCCESS,
                payload: { name: user.name, email: user.email },
            })
        } catch (error) {
            dispatch({
                type: UserActions.SIGNUP_USER_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })
        }
    }
