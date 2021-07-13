import axios from 'axios'
import { UserActions } from 'reducers/user-reducer/user-reducer-types'

export const signInUser =
    (email: string, password: string) => async (dispatch: any) => {
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_AUTH_URL}/signin/`,
                { email, password }
            )
            const user = await res.data
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({
                type: UserActions.SIGNIN_USER_SUCCESS,
                payload: { name: user.name, email: user.email },
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: UserActions.SIGNIN_USER_FAIL,
                payload: error,
            })
        }
    }
