import {defineStore} from "pinia";
import {ApiPromise, WsProvider} from "@polkadot/api";


export const usePolkadotApi = defineStore('polkadotApi', {
    state: () => ({
        api: <ApiPromise | null>null,
        apiReady: false,
    }),
    actions: {
        async initializeApi() {
            console.log("[polkadotApi] initializing...");

            const wsProvider = new WsProvider('wss://paseo.rpc.amforc.com');
            await ApiPromise.create({provider: wsProvider})
                .then((api) => {
                    this.api = api;
                    console.log("[polkadotApi] initialized");
                    this.apiReady = true;
                })
                .catch((reason) => console.log(reason));
        }
    },
})
