/* eslint-disable react/no-unescaped-entities */
import { signInUser } from 'actions/user-actions'
import CustomButton from 'components/custom-button/Custom-button'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import Input from '@material-ui/core/Input'
// import FormInput from 'components/form-input/Form-input'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import useStyles from './signinPage.styles'

type Inputs = {
    email: string
    password: string
}

const SigninPage = (): React.ReactElement => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset,
    } = useForm<Inputs>()
    const dispatch = useDispatch()
    const classes = useStyles()
    const { container, signupText, input, inputContainer } = classes

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const { email, password } = data
        dispatch(signInUser(email, password))
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({ email: '', password: '' })
        }
    }, [isSubmitSuccessful, reset])

    return (
        <div className={container}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={inputContainer}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Input
                                type="email"
                                className={input}
                                placeholder="Email"
                                {...field}
                            />
                        )}
                    />
                    {errors.email && <span>Email is required</span>}
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Input
                                type="password"
                                className={input}
                                placeholder="Password"
                                {...field}
                            />
                        )}
                    />
                    {errors.password && <span>Password field is required</span>}
                </div>
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
