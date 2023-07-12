// import objects from '@/data/objects.json'; If i need to use json file
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
export default defineEventHandler((event) => {
    const { city } = event.context.params;
    const { make, minPrice, maxPrice } = getQuery(event);
    //    let filteredObjects = objects; if using the json files

    const filters = {
        city: city.toLowerCase(),
    };

    /*   filteredObjects = filteredObjects.filter((object) => {
        return object.city.toLowerCase() === city.toLowerCase();
    }); */
    if (make) {
        /*  filteredObjects = filteredObjects.filter((object) => {
            return object.make.toLowerCase() === make.toLowerCase();
        }); */
        filters.make = make;
    }

    if (minPrice || maxPrice) {
        filters.price = {};
    }

    if (minPrice) {
        /*     filteredObjects = filteredObjects.filter((object) => {
            return object.price >= parseInt(minPrice);
        }); */
        filters.price.gte = parseInt(minPrice);
    }
    if (maxPrice) {
        /*   filteredObjects = filteredObjects.filter((object) => {
            return object.price <= parseInt(maxPrice);
        }); */
        filters.price.lte = parseInt(maxPrice);
    }

    // return filteredObjects; that's was when using json file

    // return filters;

    return prisma.object.findMany({
        where: filters,
    });
});
