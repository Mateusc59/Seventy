<script setup>
const user = useSupabaseUser();

const supabase = useSupabaseClient();
const logout = () => {
    //only need this to logout
    const { error } = supabase.auth.signOut();
    if (error) {
        console.log(error);
    } else if (logout) {
        navigateTo('/');
    }
};
</script>

<template>
    <header class="header">
        <div class="site-name">
            <NuxtLink :to="localePath('/')">
                <NuxtImg class="logo_header" src="/dot.png" alt="" width="64" height="64" />
            </NuxtLink>
            <div>Seventy</div>
        </div>

        <nav class="navigation">
            <div v-if="user" class="user">
                <NuxtLink :to="localePath('about')">About</NuxtLink>
                <NuxtLink to="/profile/listings">Profile</NuxtLink>
                <p @click="logout">Logout</p>
            </div>
            <NuxtLink v-else to="/login">Login</NuxtLink>
            <custom-cursor v-pre></custom-cursor>
            <LanguageSwitcher />
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 64px;
    background-color: #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url(./assets/images/vecteezy.jpg);
    .site-name,
    .navigation {
        display: flex;
        align-items: center;
    }

    .logo_header {
        width: 50px;
        margin-right: 10px;
    }
    .user {
        display: flex;
        gap: 10px;
    }
}
</style>
