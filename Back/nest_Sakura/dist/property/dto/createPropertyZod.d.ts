import z from "zod";
export declare const createPropertySchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    area: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name?: string;
    description?: string;
    area?: number;
}, {
    name?: string;
    description?: string;
    area?: number;
}>;
export type CreatePropertyZodDto = z.infer<typeof createPropertySchema>;
