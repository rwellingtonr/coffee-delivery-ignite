import { useEffect, useState } from "react"
import { type AddressResponse, findAddressByCep } from "~/repository/viaCep"

export const useCepAddress = (cep: string) => {
	const [isLoading, setIsLoading] = useState(false)
	const [address, setAddress] = useState<AddressResponse | null>(null)

	const isCepFilled = cep?.length === 9

	useEffect(() => {
		if (isCepFilled) {
			setIsLoading(true)
			const onlyNumbers = cep.replace(/\W/g, "")
			findAddressByCep(onlyNumbers)
				.then((address) => {
					setAddress(address)
				})
				.catch((err) => {
					console.error("Error: ", err)
				})
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
