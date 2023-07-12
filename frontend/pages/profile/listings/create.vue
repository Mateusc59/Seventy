<script setup>
definePageMeta({
    layout: 'custom',
    //Middleware protect you from going to a login page
    middleware: [
        function (to, from) {
            const user = useSupabaseUser();
            if (user.value) {
                return;
            }
            return navigateTo('/login');
        },
    ],
});
const { makes } = useObjects();
const user = useSupabaseUser();

const supabase = useSupabaseClient();

const info = useState('adInfo', () => {
    return {
        make: '',
        model: '',
        year: '',
        miles: 'hello',
        price: '',
        city: '',
        seats: '',
        features: '',
        description: '',
        image: null,
    };
});

const errorMessage = ref('');

const onChangeInput = (data, name) => {
    info.value[name] = data;
};

const inputs = [
    {
        id: 1,
        title: 'Model *',
        name: 'model',
        placeholder: 'Civic',
    },
    {
        id: 2,
        title: 'Year *',
        name: 'year',
        placeholder: '2019',
    },
    {
        id: 3,
        title: 'Price *',
        name: 'price',
        placeholder: '$40000 ',
    },
    {
        id: 4,
        title: 'Miles *',
        name: 'miles',
        placeholder: '1000 miles',
    },
    {
        id: 5,
        title: 'City *',
        name: 'city',
        placeholder: 'Lille',
    },
    {
        id: 6,
        title: 'Number of Seats *',
        name: 'seats',
        placeholder: '5 seats',
    },
    {
        id: 7,
        title: 'Features',
        name: 'features',
        placeholder: 'Great condition',
    },
];

const isButtonDisabled = computed(() => {
    for (let key in info.value) {
        if (!info.value[key]) return true;
    }
    return false;
});
const handleSubmit = async () => {
    const fileName = Math.floor(Math.random() * 100000000000000);
    const { data, error } = await supabase.storage
        .from('images')
        .upload('public/' + fileName, info.value.image);
    if (error) {
        return (errorMessage.value = 'Cannot upload');
    }
    const body = {
        ...info.value,
        city: info.value.city.toLowerCase(),
        features: info.value.features.split(', '),
        numberOfSeats: parseInt(info.value.seats),
        miles: parseInt(info.value.miles),
        price: parseInt(info.value.price),
        year: parseInt(info.value.year),
        name: `${info.value.make} ${info.value.model}`,
        listerId: user.value.id,
        image: data.path,
    };
    delete body.seats;

    try {
        const response = await $fetch('/api/object/listings', {
            method: 'post',
            body,
        });
        navigateTo('/profile/listings');
    } catch (err) {
        errorMessage.value = err.statusMessage;
        await supabase.storage.from('images').remove(data.path);
    }
};
</script>

<template>
    <div class="container_card_create">
        <div class="card">
            <div class="form">
                <div><h1>Create your listings</h1></div>
                <AdSelect
                    title="Make *"
                    :options="makes"
                    name="make"
                    @change-input="onChangeInput"
                />
                <AdInput
                    v-for="input in inputs"
                    :key="input.id"
                    :title="input.title"
                    :name="input.name"
                    :placeholder="input.placeholder"
                    @change-input="onChangeInput"
                />
                <AdTextarea
                    title="Description"
                    name="description"
                    placeholder="description"
                    @change-input="onChangeInput"
                />
                <AdImage @change-input="onChangeInput" />
                <div>
                    <button :disabled="isButtonDisabled" @click="handleSubmit()">Submit</button>
                    <p v-if="errorMessage">{{ errorMessage }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container_card_create {
    padding: 10px;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
    padding: 20px;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 50px;
}

.card h1 {
    font-size: 24px;
    margin: 0 0 10px;
    text-align: center;
    color: var(--link-color);
}

.card .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 700px;
    width: 100%;
}

.card .form label {
    margin-bottom: 10px;
    font-weight: bold;
}

.card .form select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
}
</style>
