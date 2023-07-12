//this is use to  protect you from going to a login page

export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();
    if (user.value) {
        return;
    }
    return navigateTo('/login');
});
