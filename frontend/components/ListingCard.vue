<script setup>
const props = defineProps({
    listing: Object,
});

const emits = defineEmits(['deleteClick']);
const config = useRuntimeConfig();
</script>

<template>
    <div class="card">
        <img
            :src="`${config.public.supabase.url}/storage/v1/object/public/images/${listing.image}`"
            alt=""
        />
        <div class="container_description">
            <div>
                <h1>{{ listing.name }}</h1>
                <p>${{ listing.price }}</p>
            </div>
            <div>
                <NuxtLink class="link" :to="`/profile/listings/view/${listing.id}`">View</NuxtLink>
                <p class="delete" @click="emits('deleteClick', listing.id)">Delete</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card {
    display: flex;
    align-items: flex-start;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    width: 100%;
    min-height: 200px;
    margin: auto;
    margin-bottom: 20px;
    background-color: #ccc;

    @media (max-width: 900px) {
        flex-direction: column;
        max-width: 500px;
        min-height: 400px;
        padding: 10px;
    }
}

.card img {
    width: 400px;
    height: 100%;
    min-height: 200px;
    object-fit: contain;
    margin-right: 20px;
    @media (max-width: 900px) {
        width: 100%;
    }
}
.container_description {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.card h1 {
    font-size: 20px;
    margin: 0 0 10px;
}

.card p {
    margin: 0;
}

.card a {
    text-decoration: none;
    color: #333;
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;
}

.card a:hover {
}

.card .delete {
    cursor: pointer;
    color: red;
    margin-left: auto;
}
</style>
