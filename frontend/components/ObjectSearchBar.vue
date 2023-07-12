<script setup>
const city = ref('');
const cityError = ref(false);

const handleSearch = () => {
    if (!city.value) {
        return (cityError.value = true);
    }
    navigateTo(`/city/${city.value}/object`);
};
</script>

<template>
    <div class="searchbar-container">
        <input
            v-model="city"
            :class="{ 'border-color-red': cityError }"
            placeholder="Enter your text here"
            type="text"
        />
        <div class="button" @click="handleSearch()">Search</div>
        <!-- data-cursor="hover" -->
    </div>
</template>
<style lang="scss" scoped>
.searchbar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c96326;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input[type='text'] {
    border: none;
    font-size: 16px;
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    transition: border-color 0.2s ease-in-out;
    background-color: white;
}

input[type='text']:focus {
    outline: none;
    border-color: #3d7efd;
    box-shadow: 0 0 10px rgba(61, 126, 253, 0.5);
}

.border-color-red {
    border-color: #ff4c4c !important;
}

.button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #8e3c35;
    color: #fff;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 10px;
    padding: 10px;
    transition: background-color 0.2s ease-in-out;
}

.button:hover {
    background-color: #c96326;
}

@media only screen and (max-width: 768px) {
    .searchbar-container {
        flex-direction: column;
        padding: 20px;
    }
    input[type='text'] {
        margin-bottom: 10px;
    }
    .button {
        margin-left: 0;
    }
}
</style>
