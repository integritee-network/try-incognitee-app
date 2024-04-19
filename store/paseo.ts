import {defineStore} from "pinia";

export const usePaseo = defineStore('paseo', {
    state: () => ({
        api: <ApiPromise | null>null,
    }),
})
