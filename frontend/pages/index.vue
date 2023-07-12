<script setup>
const route = useRoute().query;
if (route.preview_token) {
    useGqlHeaders({ 'X-Craft-Token': route.preview_token });
}
useHead({
    titleTemplate: 'SeventyDeal - %s',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [{ name: 'description', content: 'My amazing site.' }],
    bodyAttrs: {
        class: 'test',
    },
});
const { t } = useI18n();
const { data } = await useAsyncData(`homepage-${t('siteId')}`, () =>
    GqlHomepage({ siteId: t('siteId') })
);
</script>

<template>
    <div>
        <Head>
            <Title>Main page</Title>
        </Head>

        <!--         <p>{{ $t('homepage.title') }}</p>
 -->
        <!--<clip-container v-pre>
            <div>
                <parallax-el>
                    <NuxtImg src="/Users/agenceleeroy/PATH/frontend/assets/images/dot.png" alt="" />
                </parallax-el>
                <div class="clip-container__title">hellooo</div>
            </div>
        </clip-container> -->
        <ObjectHero />

        <custom-cursor v-pre></custom-cursor>
    </div>
</template>
