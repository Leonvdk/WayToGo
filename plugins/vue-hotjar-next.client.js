import VueHotjar from "vue-hotjar-next";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueHotjar, {
        id: 3596998,
        isProduction: true,
    });
});