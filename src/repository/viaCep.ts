import { api } from '~/api'

export type AddressResponse = {
	city: string
	cep: string
	address: string
	additional: string
	state: string
	neighborhood: string
}

type ViaCepResponse = {
	cep: string
	logradouro: string
	complemento: string
	bairro: string
	localidade: string
	uf: string
	ibge: string
	gia: string
	ddd: string
	siafi: string
}

interface FindAddressByCepFunction {
	(cep: string): Promise<AddressResponse>
}

export const findAddressByCep: FindAddressByCepFunction = async (cep) => {
	const data = await api<ViaCepResponse>(`https://viacep.com.br/ws/${cep}/json/`)

	return {
		additional: data.complemento,
		address: data.logradouro,
		cep,
		city: data.localidade,
		state: data.uf,
		neighborhood: data.bairro,
	}
}
