import { z } from "zod"

export const AddressSchema = z.object({
	cep: z.string().min(8),
	address: z.string().min(3),
	number: z.string().min(1),
	additional: z.optional(z.string()),
	neighborhood: z.string().min(3),
	city: z.string().min(3),
	state: z.string().max(2),
})

export type AddressSchemaType = z.infer<typeof AddressSchema>
