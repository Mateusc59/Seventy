<script setup>
definePageMeta({
    layout: 'custom',
    //Middleware protect you from going to a login page
    middleware: ['auth'],
});
const route = useRoute();
const { data: messages } = useFetch(`/api/object/listings/${route.params.id}/message`);
</script>

<template>
    <div class="container">
        <MessageCard v-for="message in messages" :key="message.id" :message="message" />
    </div>
</template>
