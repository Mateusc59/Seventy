<script setup>
const props = defineProps({
    title: String,
    name: String,
    placeholder: String,
});

const emits = defineEmits(['changeInput']);
const state = ref('');
const onChange = () => {
    emits('changeInput', state.value, props.name);
};
</script>

<template>
    <div class="textaera-wrapper">
        <label for=""></label>
        <textarea
            v-model="state"
            type="text"
            class="description"
            :placeholder="placeholder"
            :name="name"
            @change="onChange"
        ></textarea>
    </div>
</template>
<style lang="scss" scoped>
.textaera-wrapper {
    position: relative;
    margin-bottom: 20px;
    max-width: 700px;
    width: 100%;
}

.textaera-wrapper label {
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
}

.textaera-wrapper textarea {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

.textaera-wrapper option {
    display: block;
    width: 100%;
    color: #fff;
}

textarea {
    border: 1px solid grey;
}
</style>
