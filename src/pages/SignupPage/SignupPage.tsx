import CustomButton from 'components/custom-button/Custom-button'
import React, { useEffect, useRef } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import Input from '@material-ui/core/Input/Input'
import useStyles from './signupPage.styles'

type Inputs = {
    name: string
    email: string
    password: string
    confirmPassword: string
}
const SignupPage = (): React.ReactElement => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset,
        watch,
    } = useForm<Inputs>()
    const { container, inputContainer, input } = useStyles()

    const password = useRef({})
    password.current = watch('password', '')

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({ email: '', password: '' })
        }
    }, [isSubmitSuccessful, reset])

    return (
        <div className={container}>
            <h2>Create a new account</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={inputContainer}>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Input
                                className={input}
                                placeholder="Name"
                                {...field}
                            />
                        )}
                    />
                    {errors.email && <span>Name is required</span>}
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Input
                                className={input}
                                type="email"
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
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message:
                                    'Password must have at least 8 characters',
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                className={input}
                                type="password"
                                placeholder="Password"
                                {...field}
                            />
                        )}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                    <Controller
                        name="confirmPassword"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Password is required',
                            validate: (value) =>
                                value === password.current ||
                                'The passwords do not match',
                        }}
                        render={({ field }) => (
                            <Input
                                className={input}
                                type="password"
                                placeholder="Confirm Password"
                                {...field}
                            />
                        )}
                    />
                    {errors.confirmPassword && (
                        <span>{errors.confirmPassword.message}</span>
                    )}
                </div>
                <CustomButton type="submit"> Sign up </CustomButton>
            </form>
        </div>
    )
}

export default SignupPage
