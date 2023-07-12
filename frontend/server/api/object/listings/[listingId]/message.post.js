import Joi from 'joi';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const schema = Joi.object({
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'fr'] },
    }),
    phone: Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .required(),
    name: Joi.string().required(),
    message: Joi.string().min(20).required(),
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { listingId } = event.context.params;

    const { error } = await schema.validate(body);

    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message,
        });
    }

    const { message, email, phone, name } = body;

    return prisma.message.create({
        data: {
            message,
            email,
            name,
            phone,
            listingId: parseInt(listingId),
        },
    });
});
