import CustomButton from 'components/custom-button/Custom-button'
import FormInput from 'components/form-input/Form-input'
import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
import useStyles from './signupPage.styles'

const SignupPage = (): React.ReactElement => {
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    // const dispatch = useDispatch()
    const { container } = useStyles()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        setEmail('')
        setName('')
        setConfirmPassword('')
        setPassword('')
    }

    return (
        <div className={container}>
            <h2>Create a new account</h2>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="name"
                    type="name"
                    handleChange={(
                        e: React.ChangeEvent<HTMLInputElement>
                    ): void => setName(e.target.value)}
                    value={name}
                    label="Name"
                />
                <FormInput
                    name="email"
                    type="email"
                    handleChange={(
                        e: React.ChangeEvent<HTMLInputElement>
                    ): void => setEmail(e.target.value)}
                    value={email}
                    label="Email"
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={(
                        e: React.ChangeEvent<HTMLInputElement>
                    ): void => setPassword(e.target.value)}
                    label="Password"
                />
                <FormInput
                    name="confirmPassword"
                    type="confirmPassword"
                    value={confirmPassword}
                    handleChange={(
                        e: React.ChangeEvent<HTMLInputElement>
                    ): void => setConfirmPassword(e.target.value)}
                    label="Confirm Password"
                />

                <CustomButton type="submit"> Sign up </CustomButton>
            </form>
        </div>
    )
}

export default SignupPage
