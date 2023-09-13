'use client'
import React, { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}

const Button: FC<ButtonProps> = ({ className = '', label, ...rest }) => {
    return (
        <button className={`rounded-3xl border-2 ${className}`} {...rest}>
            {label}
        </button>
    )
}

export default Button
