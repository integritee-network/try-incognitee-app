import {defineStore} from "pinia";
import { ApiPromise, WsProvider } from '@polkadot/api';

export const usePaseo = defineStore('paseo', {
    state: () => ({
        api: <ApiPromise | null>null,
    }),
})
