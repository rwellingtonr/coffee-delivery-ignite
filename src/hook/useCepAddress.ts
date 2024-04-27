import { useEffect, useState } from 'react'
import { type AddressResponse, findAddressByCep } from '~/repository/viaCep'

export const useCepAddress = (cep: string = '') => {
	const [isLoading, setIsLoading] = useState(false)
	const [address, setAddress] = useState<AddressResponse | null>(null)
	const onlyNumbers = cep.replace(/\W/g, '')
	const isCepFilled = onlyNumbers?.length === 8

	useEffect(() => {
		if (isCepFilled) {
			setIsLoading(true)
			findAddressByCep(onlyNumbers)
				.then(setAddress)
				.catch(console.error)
				.finally(() => {
					setIsLoading(false)
				})
		}
	}, [cep])

	return {
		isCepFilled,
		isLoading,
		address,
	}
}
