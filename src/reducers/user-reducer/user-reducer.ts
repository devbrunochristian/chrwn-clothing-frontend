import { UserActions, IUserState, IUserActions } from './user-reducer-types'

const INITIAL_STATE: IUserState = {
    user: null,
    errorMessage: null,
}

const userReducer = (
    state = INITIAL_STATE,
    action: IUserActions
): IUserState => {
    switch (action.type) {
        case UserActions.SIGNIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                errorMessage: null,
            }
        case UserActions.SIGNIN_USER_FAIL:
            return { ...state, errorMessage: action.payload }

        case UserActions.SIGNUP_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                errorMessage: null,
            }
        case UserActions.SIGNUP_USER_FAIL:
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}
export default userReducer
