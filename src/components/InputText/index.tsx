import { InputHTMLAttributes } from "react"
import { InputContainer } from "./styles"

type InputTextProps = InputHTMLAttributes<HTMLInputElement>

export function InputText(props: InputTextProps) {
	return <InputContainer {...props} />
}
