<script setup>
const props = defineProps({
    description: String,
});
</script>
<template>
    <div>
        <p class="small-description">{{ description }}</p>
    </div>
</template>
<style lang="scss">
.small-description {
    margin: 5px 0px 10px 0px;
}
</style>
