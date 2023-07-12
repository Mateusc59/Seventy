<script setup>
const { makes } = useObjects();

const modal = ref({
    make: false,
    location: false,
    price: false,
});
const city = ref('');

const priceRange = ref({
    min: '',
    max: '',
});
const route = useRoute();
const router = useRouter();

const priceRangeText = computed(() => {
    const minPrice = route.query.minPrice;
    const maxPrice = route.query.maxPrice;

    if (!minPrice && !maxPrice) return 'any';
    else if (!minPrice && maxPrice) {
        return `< $${maxPrice}`;
    } else if (minPrice && !maxPrice) {
        return `> $${minPrice}`;
    } else {
        return `$${minPrice}-$${maxPrice} `;
    }
});

const updateModal = (key) => {
    modal.value[key] = !modal.value[key];
};

const onChangeLocation = () => {
    if (!city.value) return;
    if (!isNaN(parseInt(city.value))) {
        throw createError({
            statusCode: 400,
            message: 'Not a city',
        });
    }
    updateModal('location');
    navigateTo(`/city/${city.value}/object/${route.params.make}`);
    city.value = '';
};

const onChangeMake = (make) => {
    updateModal('make');
    navigateTo(`/city/${route.params.city}/object/${make}`);
};

const onChangePrice = () => {
    updateModal('price');
    if (priceRange.value.max && priceRange.value.min) {
        if (priceRange.value.min > priceRange.value.max) return;
    }
    router.push({
        query: {
            minPrice: priceRange.value.min,
            maxPrice: priceRange.value.max,
        },
    });
};
</script>

<template>
    <div class="square">
        <!-- Location start -->
        <div class="row">
            <p>city</p>
            <p @click="updateModal('location')">{{ route.params.city }}</p>
            <div v-if="modal.location" class="popup">
                <input v-model="city" type="text" placeholder="text" />
                <button @click="onChangeLocation">Apply</button>
            </div>
        </div>
        <!-- Location end -->
        <!-- Makes start -->

        <div class="row">
            <p>make</p>
            <p @click="updateModal('make')">{{ route.params.make || 'any' }}</p>
            <div v-if="modal.make" class="popup makes">
                <h4 v-for="make in makes" :key="make" @click="onChangeMake(make)">{{ make }}</h4>
                <button>Apply</button>
            </div>
        </div>
        <!-- Makes end -->
        <!-- Price start -->

        <div class="row">
            <p>Price</p>
            <p @click="updateModal('price')">{{ priceRangeText }}</p>
            <div v-if="modal.price" class="popup price">
                <input v-model="priceRange.min" type="number" placeholder="Min" />
                <input v-model="priceRange.max" type="number" placeholder="Max" />

                <button @click="onChangePrice">Apply</button>
            </div>
        </div>
        <!-- Price end -->
    </div>
</template>
<style lang="scss" scoped>
/* .square {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    background-color: white;
    border-radius: 5px;
}

.row {
    margin: 5px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: relative;
    p {
        text-transform: capitalize;
        text-align: left;
    }
    p:nth-child(2) {
        color: brown;
        font-weight: 600;
    }
}

.popup {
    position: absolute;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    top: 0;
    right: -200px;
    width: 200px;
    padding: 10px;
    z-index: 1;
}

.makes {
    width: 500px;
    -webkit-columns: 3;
    -moz-columns: 3;
    columns: 3;
    right: -500px;
}

input {
    width: 100%;
    padding: 20px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
}

button {
    width: 100%;
    background-color: orange;
    height: 20px;
    border-radius: 5px;
    margin-top: 5px;
} */

.square {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: var(--background-color);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
    position: relative;
    width: 100%;
    max-width: 230px;
}

.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    width: 100%;
}

.row p {
    font-size: 18px;
    font-weight: bold;
    color: var(--text-color);
    margin-right: 15px;
    text-transform: capitalize;
}

.row p:last-child {
    cursor: pointer;
    font-size: 18px;
    color: var(--seclink-color);
    text-transform: capitalize;
}

.popup {
    position: absolute;
    right: -365px;
    top: 0;
    z-index: 10;
    padding: 20px;
    background-color: var(--background-color);
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
}

.price {
    right: -550px;
}

.popup input {
    font-size: 16px;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    box-sizing: border-box;
}

.popup button {
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    background-color: var(--seclink-color);
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
}

.popup button:hover {
    background-color: #d06a58;
}

.popup.makes {
    right: -528px;
    top: 40px;
    columns: 3;
}

.popup.makes h4 {
    font-size: 16px;
    font-weight: normal;
    margin: 0;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.popup.makes h4:hover {
    background-color: #d06a58;
    color: #ffffff;
}
@media (min-width: 768px) and (max-width: 900px) {
    .square {
        align-items: center;
        margin: auto;
    }
}

@media (max-width: 900px) {
    .square {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .row p {
        font-size: 16px;
    }

    .row p:last-child {
        font-size: 16px;
    }

    .popup {
        position: absolute;
        bottom: 0;
        top: 0;
        right: 0px;
        padding: 10px;
        height: 100%;
    }

    .popup.makes {
        width: 350px;
        right: 0px;
        left: -60px;
        top: 0;
        height: 650px;
    }

    .popup.price {
        min-height: 180px;
    }

    .popup.makes h4 {
        font-size: 14px;
        padding: 5px;
    }
}
</style>
