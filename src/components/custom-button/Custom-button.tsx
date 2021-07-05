/* eslint-disable react/button-has-type */
import React from 'react'

import './custom-button.styles.scss'

interface Props {
    children: string
    otherProps?: React.HTMLProps<HTMLButtonElement>
    type: 'button' | 'submit' | 'reset' | undefined
}

const CustomButton: React.FunctionComponent<Props> = ({
    children,
    type,
    ...otherProps
}) => (
    <button type={type} className="custom-button" {...otherProps}>
        {children}
    </button>
)

export default CustomButton
