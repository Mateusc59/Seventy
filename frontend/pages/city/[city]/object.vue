<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();
useHead({
    title: `${route.params.make ? toTitleCase(route.params.make) : 'Objects'} in ${toTitleCase(
        route.params.city
    )}`,
});
</script>

<template>
    <div class="container">
        <NuxtErrorBoundary>
            <ObjectSideBar />
            <NuxtPage />
            <template #error="{ error }">
                <h1>{{ error }}</h1>
                <h2>Oups wrong way</h2>
                <button @click="error.value = null">go back</button>
            </template>
        </NuxtErrorBoundary>
    </div>
</template>
<style lang="scss" scoped>
.container {
    display: flex;
    margin: auto;
    align-items: flex-start;
    justify-content: center;
    gap: 50px;
    margin: 20px;
    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
}
</style>
