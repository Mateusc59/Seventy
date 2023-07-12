import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const { userId } = event.context.params;

    return prisma.object.findMany({
        where: {
            listerId: userId,
        },

        //only give us waht we need not all the user data
        select: {
            image: true,
            id: true,
            name: true,
            price: true,
        },
    });
});
