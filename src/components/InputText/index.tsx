import { InputHTMLAttributes } from "react"
import { Path, UseFormRegister } from "react-hook-form"

import type { AddressSchemaType } from "~/pages/Checkout/validation"
import { InputContainer, InputTextContainer } from "./styles"

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
	label: Path<AddressSchemaType>
	register: UseFormRegister<AddressSchemaType>
	required?: boolean
	error: boolean
}

export function InputText({
	label,
	register,
	required = true,
	error = false,
	...props
}: InputTextProps) {
	return (
		<InputContainer error={error}>
			<InputTextContainer {...props} {...register(label, { required })} />
			{required ? <p className="optional">opcional</p> : <></>}
		</InputContainer>
	)
}
