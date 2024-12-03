import { z } from "zod"

export const ResponseDataOptionalSchema = z.object({
	message: z.string(),
	status: z.boolean(),
	code: z.number(),
	success: z.boolean(),
	errors: z.array(
		z.object({
			field: z.string(),
			message: z.string(),
		}),
	),
})

export type ResponseDataSchema = z.infer<typeof ResponseDataOptionalSchema>

export interface ResponseDataOptional<T>
	extends z.infer<typeof ResponseDataOptionalSchema> {
	data: T
}
