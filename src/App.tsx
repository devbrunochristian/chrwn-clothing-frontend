import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'

function App(): React.ReactElement {
    return (
        <Route>
            <div>
                <HomePage />
            </div>
        </Route>
    )
}

export default App
