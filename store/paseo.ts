import {defineStore} from "pinia";
import { ApiPromise, WsProvider } from '@polkadot/api';


export const usePaseo = defineStore('paseo', {
    state: () => ({
        api: <ApiPromise | null>null,
    }),
    getters: {
        getPaseoApi() {
            return this.paseoApi;
        },
    },
    actions: {
        async initializeApi() {
/*            try {
                const wsProvider = new WsProvider('wss://paseo.rpc.amforc.com');
                this.api = await ApiPromise.create({ provider: wsProvider, types: {} });
                console.log("Paseo api connected relay chain")
            } catch (error) {
                console.error('Failed to initialize API:', error);
            }

 */
        },
    },
})
