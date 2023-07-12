<script setup>
// const { listings } = useObjects();
const user = useSupabaseUser();
const handleDelete = async (id) => {
    await $fetch(`/api/object/listings/${id}`, {
        method: 'delete',
    });
    listings.value = listings.value.filter((listing) => listing.id !== id);
};
const { data: listings } = await useFetch(`/api/object/listings/user/${user.value.id}`);
definePageMeta({
    layout: 'custom',
    //Middleware protect you from going to a login page
    middleware: ['auth'],
});
</script>
<template>
    <div>
        <div class="container_listing">
            <h1>My listings</h1>
            <NuxtLink to="/profile/listings/create"></NuxtLink>
        </div>
        <div class="Container_card_listing">
            <ListingCard
                v-for="listing in listings"
                :key="listing.id"
                :listing="listing"
                @delete-click="handleDelete"
            />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.Container_card_listing {
    padding: 10px;
}
.container_listing {
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: space-between;
    max-width: 800px;
    width: 100%;
    margin: auto;
    @media (max-width: 900px) {
        max-width: 500px;
        padding: 10px;
    }
}

h1 {
    margin: 0;
}

a {
    background-color: var(--accent-color);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: relative;
}

a::before {
    content: '';
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAGFBMVEUAAAD///////////////////////////8jfp1fAAAAB3RSTlMAv0DPN+9wYOKA6wAAADBJREFUGNNjgADG8iIIY8jyS6AsQTAQLS+GMBjKUQFBvhIYKJeXQRgI8weZf4nkAwBu1jA9/HEeFgAAAABJRU5ErkJggg==');
    background-size: 100%;
    background-position: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
}
</style>
