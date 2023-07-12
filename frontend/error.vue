<script setup>
const error = useError();

const handleError = () => {
    clearError({
        redirect: '/',
    });
};
</script>

<template>
    <div class="container">
        <h1>{{ error.statusCode }}</h1>
        <p>{{ error.message }}</p>
        <button @click="handleError">Go back</button>
    </div>
</template>
<style lang="scss" scoped>
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
h1 {
    text-align: center;
    font-weight: 900;
    font-size: 60px;
    color: yellow;
}
p {
    text-align: center;
    font-weight: 900;
    font-size: 20px;
    color: white;
}

h2 {
    text-align: center;
    font-weight: 900;
    font-size: 20px;
    color: white;
}
button {
    display: block;
    text-align: center;
    color: white;
    background-color: orange;
    border-radius: 5px;
    width: 100px;
    margin: auto;
    margin-top: 20px;
}
</style>
