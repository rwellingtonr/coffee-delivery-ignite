export type AddressResponse = {
	city: string
	cep: string
	address: string
	additional: string
	state: string
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

export async function findAddressByCep(cep: string): Promise<AddressResponse> {
	const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
	const data: ViaCepResponse = await response.json()

	const address = {
		additional: data.complemento,
		address: data.logradouro,
		cep,
		city: data.localidade,
		state: data.uf,
	}
	return address
}
