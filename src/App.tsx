import Header from 'components/header/Header'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SigninPage from 'pages/SigninPage/SigninPage'
import SignupPage from 'pages/SignupPage/SignupPage'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import 'react-toastify/dist/ReactToastify.css'
import './App.styles.scss'

function App(): React.ReactElement {
    return (
        <div className="container">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/signin" component={SigninPage} />
                <Route path="/signup" component={SignupPage} />
            </Switch>
        </div>
    )
}

export default App
