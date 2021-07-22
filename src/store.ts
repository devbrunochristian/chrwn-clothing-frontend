import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from 'reducers/user-reducer/user-reducer'
import { IUserState } from 'reducers/user-reducer/user-reducer-types'

export interface IApplicationState {
    user: IUserState
}

const reducer = combineReducers({
    user: userReducer,
})

const user: any = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : null

const initialState = {
    user: {
        user,
        errorMessage: null,
    },
}

const middlewares = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
