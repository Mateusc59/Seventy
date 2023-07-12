export default async (city, filters) => {
    const { data, error, refresh } = await useFetch(`/api/objects/${city}`, {
        params: {
            ...filters,
        },
    });
    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: 'Unable to fectch Objects',
        });
    }
    return { data, refresh };
};
