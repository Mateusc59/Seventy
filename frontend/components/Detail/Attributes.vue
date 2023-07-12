<script setup>
const props = defineProps({
    object: Object,
    features: Array,
});
</script>

<template>
    <div class="container_div">
        <div class="container_description">
            <h1>{{ object.name }}</h1>
            <p class="description">Seats : {{ object.numberOfSeats }}</p>
            <p class="description">Miles : {{ object.miles }}</p>

            <p class="price">${{ object.price }}</p>
        </div>
        <div class="separator"></div>
        <div v-for="feature in features" :key="feature" class="features_column">
            <div class="feature_column">
                <ul>
                    <li>{{ feature }}</li>
                </ul>
            </div>
        </div>
        <div class="separator"></div>
    </div>
</template>
<style lang="scss" scoped>
/* .container_description {
    display: flex;
    flex-direction: column;
    width: 500px;
}
h1 {
    margin: 0;
    color: brown;
    font-weight: 900;
    font-size: 20px;
    display: flex;
    text-align: left;
}

span {
    border-top: 0.5px solid grey;
    height: 0.5px;
    width: 100%;
    opacity: 0.3;
}
.description {
    margin-top: 10px;
}
.price {
    margin: 0;
    text-align: right;
    margin-bottom: 10px;
}

hr {
    width: 100%;
    margin: 20px 0;
    border: none;
    border-top: 1px solid black;
}

ul {
    width: 500px;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
        margin-top: 10px;
        margin-bottom: 10px;
    }
} */

.card {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
    background-color: var(--background-color);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 10px;
    font-family: var(--font-family);
    font-size: var(--font-size);
    line-height: var(--line-height);
}

.container_div {
    width: 100%;
}
.container_description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
}
.features_column {
    column-count: 2; /* Display the list items in two columns */
}

.feature_column {
    width: 100%;
}
.container_description h1 {
    font-size: 40px;
    font-weight: bold;
    color: var(--text-color);
    margin: 0;
}

.description {
    font-size: 20px;
    color: var(--secondary-color);
    margin: 0;
}

.price {
    font-size: 30px;
    font-weight: bold;
    color: var(--accent-color);
    margin: 0;
}

.separator {
    border-bottom: 1px solid var(--border-color);
    margin: 10px 0;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

ul li {
    font-size: 15px;
    color: var(--text-color);
    margin: 2px 0;
}

@media only screen and (max-width: 600px) {
    .card {
        padding: 20px;
    }
    .container_description {
        flex-direction: column;
        align-items: flex-start;
    }
    .container_description h1 {
        font-size: 30px;
        margin-bottom: 10px;
    }
    .description {
        font-size: 16px;
    }
    .price {
        font-size: 24px;
    }
}
</style>
