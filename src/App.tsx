import Header from 'components/header-component/Header'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from 'pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import './App.styles.scss'

function App(): React.ReactElement {
    return (
        <div className="container">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </div>
    )
}

export default App
