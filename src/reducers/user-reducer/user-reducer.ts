import { UserActions, IUserState, IUserActions } from './user-reducer-types'

const INITIAL_STATE: IUserState = {
    user: null,
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
            }
        case UserActions.SIGNIN_USER_FAIL:
        default:
            return state
    }
}
export default userReducer
