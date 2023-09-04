import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        global: null as any | null,
        userName: 'Steven',
        timeNow: 0,
    }),
    getters: {
        header: (state) => state.global?.header ?? [],
        footer: (state) => state.global?.footer ?? [],
        socialMedia: (state) => state.global?.social_media ?? [],
        search: (state) => state.global?.search ?? {},
    },
    actions: {
        async nuxtServerInit() {
            // const { data } = await useApiFetch("global/global");
            // this.global = data.value?.data ?? {};
            const now = new Date()
            this.timeNow = now.getTime()
        },
    },
})
