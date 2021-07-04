import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'

function App(): React.ReactElement {
    return (
        <Switch>
            <div>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
            </div>
        </Switch>
    )
}

export default App
