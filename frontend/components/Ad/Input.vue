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
    <div class="input-wrapper">
        <label for=""></label>
        <input
            v-model="state"
            type="text"
            class="inputs"
            :placeholder="placeholder"
            :name="name"
            @change="onChange"
        />
    </div>
</template>
<style lang="scss" scoped>
.input-wrapper {
    display: block;
    margin-bottom: 10px;
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

.select-wrapper label {
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
}

.select-wrapper select {
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

.select-wrapper option {
    display: block;
    width: 100%;
    color: #fff;
}
.select-wrapper::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 10px;
    width: 0;
    height: 0;
    border-top: 5px solid #666;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    transform: translateY(-50%);
    pointer-events: none;
}
</style>
