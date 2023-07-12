<script setup>
const props = defineProps({
    title: String,
    name: String,
    options: Array,
    placeholder: String,
});

const emits = defineEmits(['changeInput']);
const state = ref('');
const onChange = () => {
    emits('changeInput', state.value, props.name);
};
</script>

<template>
    <div class="select-wrapper">
        <label for=""></label>
        <select id="" v-model="state" name="" placeholder="placeholder" @change="onChange">
            <option v-for="option in options" :key="option.id" :value="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>
<style lang="scss" scoped>
.select-wrapper {
    position: relative;
    margin-bottom: 20px;
    width: 200px;
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
