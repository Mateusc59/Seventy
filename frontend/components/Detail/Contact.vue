<script setup>
const message = ref({
    name: '',
    email: '',
    phone: '',
    message: '',
});
const route = useRoute();
const errorMessage = ref('');
const successMessage = ref('');
const disableButton = computed(() => {
    for (let key in message.value) {
        if (!message.value[key]) return true;
    }
    return false;
});

const onSubmit = async () => {
    try {
        const response = await $fetch(`/api/object/listings/${route.params.id}/message`, {
            method: 'post',
            body: message.value,
        });
        message.value = {
            name: '',
            email: '',
            phone: '',
            message: '',
        };
        successMessage.value = 'Message sent';
    } catch (err) {
        errorMessage.value = err.statusMessage;
        successMessage.value = '';
    }
};
</script>

<template>
    <div class="input_container">
        <div class="input-group">
            <input v-model="message.name" type="text" class="name-input" placeholder="Name" />
            <input v-model="message.email" type="email" class="email-input" placeholder="Email" />
            <input v-model="message.phone" type="tel" class="phone-input" placeholder="Phone" />
        </div>
        <div class="textarea-group">
            <textarea
                v-model="message.message"
                class="message-input"
                placeholder="Message"
            ></textarea>
        </div>
        <div class="button-group">
            <button :disabled="disableButton" class="submit-button" @click="onSubmit">
                Submit
            </button>
            <p v-if="errorMessage">{{ errorMessage }}</p>
            <p v-if="successMessage">{{ successMessage }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.input_container {
    width: 100%;
}
.input-group {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    input {
        border: 0.5px solid grey;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
}
.textarea-group {
    width: 100%;

    textarea {
        height: 100%;
        width: 100%;
        border: 0.5px solid grey;
        border-radius: 5px;
        padding: 10px;
    }
}

.button-group {
    background-color: brown;
    width: 100%;
    border-radius: 5px;
    text-align: center;
    margin-top: 5px;
    .submit-button {
        color: white;
        padding: 10px;
    }
}
</style>
