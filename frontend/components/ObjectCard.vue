<script setup>
import heartfilled from '@/assets/images/heartfilled.png';
import heartOutline from '@/assets/images/heartOutline.png';

const props = defineProps({
    object: Object,
    favored: Boolean,
});
const emit = defineEmits(['favor']);
const config = useRuntimeConfig();
</script>

<template>
    <ClientOnly>
        <div class="card">
            <img
                class="heart_logo"
                :src="favored ? heartfilled : heartOutline"
                alt=""
                @click="emit('favor', object.id)"
            />
            <NuxtImg
                class="object_img"
                :src="`${config.public.supabase.url}/storage/v1/object/public/images/${object.image}`"
                alt="Image"
                @click="navigateTo(`/object/${object.name}-${object.id}`)"
            />
            <div class="info">
                <h2>{{ object.name }}</h2>
                <p>{{ object.description }}</p>
                <p>${{ object.price }}</p>
            </div>
        </div>
    </ClientOnly>
</template>
<style lang="scss" scoped>
/* .card {
    display: flex;
    background-color: wheat;
    border-radius: 5px;
    width: 400px;
    margin-top: 10px;
    position: relative;
}
.heart_logo {
    position: absolute;
    width: 15px;
    top: 5px;
    right: 5px;
}
.object_img {
    width: 150px;
    height: 150px;
    border-radius: 5px;
}

.info {
    flex: 1;
    padding-left: 20px;
}

.info h2 {
    margin: 0;
    text-transform: uppercase;
    color: brown;
    font-size: 14px;
    font-weight: 900;
}

.info p {
    margin: 5px 0;
} */

.card {
    display: flex;
    align-items: flex-start;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    width: 100%;
    min-height: 200px;
    margin: auto;
    margin-bottom: 20px;
    background-color: #ccc;
    position: relative;
    @media (max-width: 767px) {
        flex-direction: column;
        width: 230px;
        height: 100%;
    }

    &:hover {
        transform: translateY(-5px);
    }

    .heart_logo {
        position: absolute;
        width: 15px;
        top: 5px;
        right: 5px;
    }

    .card-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .object_img {
        width: 300px;
        height: 100%;
        min-height: 200px;
        -o-object-fit: contain;
        object-fit: cover;
        margin-right: 20px;
    }

    .info {
        margin: 10px;
        flex: 1;

        h2 {
            font-size: 1.2rem;
            margin-bottom: 10px;
            color: var(--seclink-color);
        }

        p {
            font-size: 1rem;
            color: #333333;
            margin-bottom: 5px;
        }
        p:nth-child(3) {
            color: var(--thirdlink-color);
            font-weight: 900;
        }
    }
}
</style>
