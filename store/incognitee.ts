import {defineStore} from "pinia";
import {IntegriteeWorker} from "@encointer/worker-api";

export const useIncognitee = defineStore('incognitee', {
    state: () => ({
        api: <IntegriteeWorker | null>null,
        apiReady: false,
        shard: '',
        fingerprint: '',
    }),
/*    getters: {
        api() { return this.api; },
        shard() {return this.shard },
        fingerprint() {return this.fingerprint }
    },*/
    actions: {
        async initializeApi() {

            const worker = new IntegriteeWorker('wss://scv1.paseo.api.incognitee.io:443', {
                createWebSocket: (url) => new WebSocket(url),
                types: {}
            })
            this.api = worker
            worker.getShardVault().then((sk) => {
                console.log('Vault: ')
                console.log(sk[0])
            });
            // todo! hard-coded for now. soon to be fetched
            this.shard = '5wePd1LYa5M49ghwgZXs55cepKbJKhj5xfzQGfPeMS7c';
            this.fingerprint = '7RuM6U4DLEtrTnVntDjDPBCAN4LbCGRpnmcTYUGhLqc7';
            console.log("Incognitee Api connected to sidechain")
            this.apiReady = true
        }
    },
})
