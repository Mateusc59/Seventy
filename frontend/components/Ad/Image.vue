<script setup>
const image = useState('objectImage', () => {
    return {
        preview: null,
        image: null,
    };
});

const emits = defineEmits(['changeInput']);

const onImageUpload = (event) => {
    const input = event.target;
    if (input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            image.value.preview = e.target.result;
        };
        image.value.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
        emits('changeInput', input.files[0], 'image');
    }
};
</script>

<template>
    <div class="container_image">
        <label for="">Image :</label>
        <form action="">
            <div class="form-group">
                <div class="input_image_container">
                    <label for="image-upload" class="custom-button">Upload an image</label>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        style="display: none"
                        @change="onImageUpload"
                    />
                </div>

                <div v-if="image.preview">
                    <img :src="image.preview" alt="" />
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.container_image {
    width: 100%;
}

.input_image_container {
    display: flex;
    flex-direction: column;
}

input {
    border-radius: 5px;
}

.custom-button {
    background-color: var(--accent-color);
    width: 150px;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    padding: 5px;
    margin: 10px 0 10px 0px;
}
</style>
