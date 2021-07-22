import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Link, useHistory } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { ReactComponent as Logo } from 'assets/crown.svg'
import { useSelector } from 'react-redux'
import { IApplicationState } from 'store'
import useStyles from './header.styles'

const Header: React.FunctionComponent = () => {
    const history = useHistory()
    const user = useSelector((state: IApplicationState) => state.user.user)
    const { toolbar, appbar, root, menu } = useStyles()
    return (
        <div className={root}>
            <AppBar position="static" className={appbar}>
                <Toolbar className={toolbar}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Logo
                            className="logo"
                            onClick={() => history.push('/')}
                        />
                    </IconButton>
                    {user ? (
                        <div className={menu}>
                            <Link to="/shop">SHOP</Link>
                            <Link to="/cart">CART</Link>
                            <span>Welcome {user.name}</span>
                        </div>
                    ) : (
                        <div className={menu}>
                            <Link to="/shop">Shop</Link>
                            <Link to="/signin">Sign in</Link>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Header
