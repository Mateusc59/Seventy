<script setup>
const route = useRoute();

const { data: object } = await useFetchObject(route.params.id);
/* const { objects } = useObjects();
 */ const { toTitleCase } = useUtilities();
useHead({
    title: toTitleCase(route.params.name),
});

/* const object = computed(() => {
    return objects.find((c) => {
        return c.id === parseInt(route.params.id);
    });
}); */

if (!object.value) {
    throw createError({
        statusCode: 404,
        message: `Object with id of ${route.params.id} does not exist`,
    });
}

definePageMeta({
    layout: 'custom',
});
</script>

<template>
    <div v-if="object">
        <div class="container">
            <DetailHeroDetail :object="object" />
            <DetailAttributes :features="object.features" :object="object" />
            <DetailDescription :description="object.description" />
            <DetailContact />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    margin-top: 40px;
    @media (max-width: 768px) {
        width: 300px;
    }
}
</style>
