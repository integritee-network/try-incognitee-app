import {defineStore} from "pinia";
import {ApiPromise, WsProvider} from "@polkadot/api";


export const usePolkadotApi = defineStore('polkadotApi', {
    state: () => ({
        api: <ApiPromise | null>null,
        apiReady: false,
    }),
    actions: {
        async initializeApi() {
            console.log("trying to init api");

            const wsProvider = new WsProvider('wss://rpc.ibp.network/paseo');
            this.api = await ApiPromise.create({provider: wsProvider});
            this.apiReady = true;
        }
    },
})
