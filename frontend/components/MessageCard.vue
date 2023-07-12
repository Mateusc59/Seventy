<script setup>
defineProps({
    message: Object,
});
</script>

<template>
    <div class="container_card_message">
        <div class="card">
            <h1>{{ message.name }}</h1>
            <p>
                {{ message.message }}
            </p>
            <div class="details">
                <p>{{ message.email }}</p>
                <p>{{ message.phone }}</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container_card_message {
    padding: 20px;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    background-color: var(--background-color);
}

.card h1 {
    font-size: 24px;
    margin: 0 0 10px;
}

.card p {
    margin: 0 0 10px;
    line-height: 1.5;
}

.card .details {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.card .details p {
    margin: 0;
    font-weight: bold;
    color: var(--seclink-color);
}

.card a {
    text-decoration: none;
    color: #333;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
}

.card a:hover {
    background-color: #ccc;
}

@media (max-width: 600px) {
    .card {
        max-width: 100%;
    }
}
</style>
