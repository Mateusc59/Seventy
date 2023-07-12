import Joi from 'joi';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

//This is for our form when adding an object(item),this help for validation using postman
const schema = Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number()
        .min(1886)
        .max(new Date().getFullYear() + 1),
    miles: Joi.number().required().min(0),
    city: Joi.string().min(2).required(),
    description: Joi.string().min(20).required(),
    numberOfSeats: Joi.number().max(1000).min(1).required(),
    features: Joi.array().items(Joi.string()).required(),
    image: Joi.string().required(),
    listerId: Joi.string().required(),
    price: Joi.number().required().min(0),
    name: Joi.string().required(),
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { error, value } = await schema.validate(body);
    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message,
        });
    }

    const {
        image,
        name,
        numberOfSeats,
        features,
        description,
        miles,
        price,
        listerId,
        city,
        make,
        model,
    } = body;

    const object = await prisma.object.create({
        data: {
            image,
            name,
            numberOfSeats,
            features,
            description,
            miles,
            price,
            listerId,
            city: city.toLowerCase(),
            make,
            model,
        },
    });

    return object;
});
