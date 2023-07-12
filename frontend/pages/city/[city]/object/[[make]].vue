<script setup>
const route = useRoute();

// This make filter work using route params
const { data: objects, refresh } = await useFetchObjects(route.params.city, {
    minPrice: route.query.minPrice,
    maxPrice: route.query.maxPrice,
    make: route.params.make,
});

watch(
    () => route.query,
    () => {
        window.location.reload(true);
    }
);
</script>

<template>
    <div>
        <ObjectCards v-if="objects.length" :objects="objects" />
        <h1 v-else>NO Object in this location</h1>
    </div>
</template>

<!-- ROUTE -->
