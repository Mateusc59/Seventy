// import objects from '@/data/objects.json';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
    const { id } = event.context.params;

    /*  const object = objects.find((c) => {
        return c.id === parseInt(id);
    }); */

    const object = await prisma.object.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    if (!object) {
        throw createError({
            statusCode: 404,
            statusMessage: `Object with id of ${id} does not exist`,
        });
    }

    return object;
});
