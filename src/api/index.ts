export async function api<T = unknown>(url: string, init?: RequestInit): Promise<T> {
	const response = await fetch(url, init)
	const data: T = await response.json()
	return data
}
