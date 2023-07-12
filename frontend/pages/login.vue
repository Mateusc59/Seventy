<script setup>
const supabase = useSupabaseClient();

const login = async () => {
    const { error } = supabase.auth.signInWithOAuth({
        provider: 'google',
    });
    if (error) {
        console.log(error);
    }
};
</script>

<template>
    <div>
        <h1>Log in</h1>
        <button @click="login">Login with google</button>
    </div>
</template>
