<script setup>
const props = defineProps({
    object: Object,
});

const config = useRuntimeConfig();
</script>

<template>
    <div class="container_img_div">
        <NuxtImg
            :src="`${config.public.supabase.url}/storage/v1/object/public/images/${object.image}`"
            alt="Big Image"
        />
    </div>
</template>
<style lang="scss" scoped>
.container_img_div {
    width: 100%;
}
img {
    width: 100%;
    max-width: 600px;
    height: 300px;
    margin-bottom: 20px;
    border-radius: 5px;
    object-fit: cover;
}
</style>
