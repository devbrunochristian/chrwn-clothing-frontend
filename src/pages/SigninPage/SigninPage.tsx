/* eslint-disable react/no-unescaped-entities */
import { signInUser } from 'actions/user-actions'
import CustomButton from 'components/custom-button/Custom-button'
import FormInput from 'components/form-input/Form-input'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import useStyles from './signinPage.styles'

const SigninPage = (): React.ReactElement => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useDispatch()
    const classes = useStyles()
    const { container, signupText } = classes

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        dispatch(signInUser(email, password))
        setEmail('')
        setPassword('')
    }

    return (
        <div className={container}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    handleChange={(
                        e: React.ChangeEvent<HTMLInputElement>
                    ): void => setEmail(e.target.value)}
                    value={email}
                    label="Email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={(
                        e: React.ChangeEvent<HTMLInputElement>
                    ): void => setPassword(e.target.value)}
                    label="Password"
                    required
                />
                <CustomButton type="submit"> Sign in </CustomButton>
                <span className={signupText}>
                    Don't you have an account?{' '}
                    <Link to="/signup">Register now</Link>
                </span>
            </form>
        </div>
    )
}

export default SigninPage
