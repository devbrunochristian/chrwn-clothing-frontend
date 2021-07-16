/* eslint-disable no-unused-vars */
import React from 'react'
import './form-input.styles.scss'

interface Props {
    label: string
    name: string
    type: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}
const FormInput: React.FunctionComponent<Props> = ({
    handleChange,
    label,
    value,
    name,
    type,
}) => (
    <div className="group">
        <input
            id="form-input"
            className="form-input"
            onChange={handleChange}
            name={name}
            type={type}
        />
        {label ? (
            <label
                htmlFor="form-input"
                className={`${value.length ? 'shrink' : ''} form-input-label`}
            >
                {label}
            </label>
        ) : null}
    </div>
)

export default FormInput
