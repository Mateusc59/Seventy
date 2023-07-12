import objects from '~/data/objects.json';
import makes from '@/data/makes.json';
import listings from '@/data/listings.json';

export const useObjects = () => {
    return {
        objects,
        makes,
        listings,
    };
};
