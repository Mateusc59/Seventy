<script setup>
/* const { objects } = useObjects();
 */ const props = defineProps({
    objects: Array,
});

const favorite = useLocalStorage('favorite', {});
const handleFavorite = (id) => {
    if (id in favorite.value) {
        delete favorite.value[id];
    } else {
        favorite.value = {
            ...favorite.value,
            [id]: true,
        };
    }
};
</script>

<template>
    <div>
        <ObjectCard
            v-for="object in objects"
            :key="object.id"
            :object="object"
            :favored="object.id in favorite"
            @favor="handleFavorite"
        />
    </div>
</template>
