import { FormHTMLAttributes, ReactNode } from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}



export function Form({ children, ...restProps }: FormProps) {
  return <form {...restProps}>{children}</form>
}

export function FormInputs() {}