import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'

function App(): React.ReactElement {
    return (
        <Switch>
            <div>
                <Route exact path="/" component={HomePage} />
            </div>
        </Switch>
    )
}

export default App
