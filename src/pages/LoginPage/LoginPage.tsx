import CustomButton from 'components/custom-button/Custom-button'
import FormInput from 'components/form-input/Form-input'
import React, { useState } from 'react'
import './loginPage.styles.scss'

const LoginPage = (): React.ReactElement => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        console.log(email, password)
    }

    return (
        <div className="sign-in">
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
            </form>
        </div>
    )
}

export default LoginPage
