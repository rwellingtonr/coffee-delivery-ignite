import { type ComponentProps, forwardRef } from 'react'
import { InputContainer } from './styles'

interface InputTextProps extends ComponentProps<'input'> {
	required?: boolean
	error: boolean
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, forwardRef) => {
	const { error, required = true, ...rest } = props

	return (
		<InputContainer $error={`${error}`}>
			<input {...rest} className="input_text" ref={forwardRef} />
			{required ? <p className="optional">opcional</p> : <></>}
		</InputContainer>
	)
})

InputText.displayName = 'InputText'
