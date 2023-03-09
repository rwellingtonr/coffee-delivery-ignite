import { InputHTMLAttributes } from "react"
import { InputContainer, InputTextContainer } from "./styles"

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
	isOptional: boolean
}

export function InputText({ isOptional, ...props }: InputTextProps) {
	return (
		<InputContainer>
			<InputTextContainer {...props} />
			{isOptional ? <p className="optional">opcional</p> : <></>}
		</InputContainer>
	)
}
