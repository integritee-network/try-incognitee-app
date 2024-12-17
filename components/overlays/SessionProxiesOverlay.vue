<template>
  <OverlayDialog :show="show" :close="closeProxy" title="Session Authorization">
    <div class="mt-2">
      <p class="text-sm text-gray-400">
        For a smooth experience with minimal signing interaction we recommend
        that your authorize a session key. It will be cached confidentially on
        Incognitee and loaded automatically on your next visit.
      </p>
      <p class="text-sm text-gray-400">
        Registering a session key costs a fee of
        {{ formatDecimalBalance(INCOGNITEE_TX_FEE) }}
        {{ accountStore.getSymbol }} and a deposit of
        {{ INCOGNITEE_SESSION_PROXY_DEPOSIT }} {{ accountStore.getSymbol }} will
        be reserved.
      </p>
      <!--<p>you currently have a session key with role {{ bestSessionProxyRole }}</p>-->
      <div class="flex flex-col mt-5">
        <form @submit.prevent="updateAuthorization">
          <label>Select an option:</label>
          <!-- removing proxies not yet supported
          <div v-if="bestSessionProxyRole !== null" class="radio-group">
            <div>
              <input
                type="radio"
                id="noProxy"
                value="NoProxy"
                v-model="selectedSessionProxyRole"
              />
            </div>
            <label for="noProxy">remove all authorizations</label>
          </div> -->
          <div class="radio-group">
            <div v-if="'readBalance' !== bestSessionProxyRole">
              <input
                type="radio"
                id="readBalance"
                value="ReadBalance"
                v-model="selectedSessionProxyRole"
              />
            </div>
            <div v-else class="mr-4">✓</div>
            <label for="readBalance">allow reading balance</label>
          </div>
          <div class="radio-group">
            <div v-if="'readAny' !== bestSessionProxyRole">
              <input
                type="radio"
                id="readAny"
                value="ReadAny"
                v-model="selectedSessionProxyRole"
              />
            </div>
            <div v-else class="mr-4">✓</div>
            <label for="readAny">full read access</label>
          </div>
          <div class="radio-group">
            <div v-if="'nonTransfer' !== bestSessionProxyRole">
              <input
                type="radio"
                id="nonTransfer"
                value="NonTransfer"
                v-model="selectedSessionProxyRole"
              />
            </div>
            <div v-else class="mr-4">✓</div>
            <label for="nonTransfer">allow non-transfer actions</label>
          </div>
          <div class="radio-group">
            <div v-if="'any' !== bestSessionProxyRole">
              <input
                type="radio"
                id="any"
                value="Any"
                v-model="selectedSessionProxyRole"
              />
            </div>
            <div v-else class="mr-4">✓</div>
            <label for="any">allow all actions</label>
          </div>
          <!--
                    <p class="text-sm text-gray-400">
                      If this is your personal machine, we recommend to persist a session
                      key in browser storage. This will avoid the initial authentication
                      signature in the extension when you visit this site.
                    </p>
                    <div class="mt-2">
                      <input
                        type="checkbox"
                        id="persistSession"
                        v-model="persistSessionProxy"
                      />
                      <label for="persistSession"
                      >Persist session key in browser storage</label
                      >
                    </div>-->
          <p class="text-sm text-gray-400 mb-5">
            the signer extension will pop up and ask you to sign this request
          </p>

          <button
            type="submit"
            class="incognitee-bg btn btn_gradient rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Update Authorization
          </button>
        </form>
        <div v-if="bestSessionProxyRole == null" class="mt-5">
          <button
            type="button"
            @click="close(true)"
            class="incognitee-bg btn btn_gradient rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Continue Without Session Proxy
          </button>
        </div>
      </div>
    </div>
  </OverlayDialog>
  <StatusOverlay
    :tx-status="txStatus"
    :show="showStatusOverlay"
    :close="closeStatusOverlay"
  />
</template>
<script setup lang="ts">
import OverlayDialog from "~/components/overlays/OverlayDialog.vue";
import { defineProps, ref, watch } from "vue";
import { useAccount } from "~/store/account.ts";
import {
  cryptoWaitReady,
  mnemonicGenerate,
  mnemonicToMiniSecret,
} from "@polkadot/util-crypto";
import { Keyring } from "@polkadot/keyring";
import StatusOverlay from "~/components/overlays/StatusOverlay.vue";
import { formatDecimalBalance } from "~/helpers/numbers";
import { SessionProxyRole } from "@/lib/sessionProxyStorage.ts";
import {
  INCOGNITEE_TX_FEE,
  INCOGNITEE_SESSION_PROXY_DEPOSIT,
} from "~/configs/incognitee";
import { useIncognitee } from "~/store/incognitee";
import { Health, useSystemHealth } from "~/store/systemHealth";
import { TypeRegistry, u32 } from "@polkadot/types";
import { incogniteeSidechain } from "~/lib/environmentConfig";

const accountStore = useAccount();
const incogniteeStore = useIncognitee();
const systemHealth = useSystemHealth();

const selectedSessionProxyRole = ref("NonTransfer");
const persistSessionProxy = ref(false);
const bestSessionProxy = ref(null);
const bestSessionProxyRole = ref(null);
const isSignerBusy = ref(false);

const updateAuthorization = async () => {
  if (systemHealth.getSidechainSystemHealth.overall() !== Health.Healthy) {
    alert(
      "Sidechain health currently can't be assessed. Please wait for a green health indicator and try again",
    );
    return;
  }
  if (!props?.enableActions) {
    console.error("network not live");
    return;
  }
  console.log(
    "updating authorization from ",
    bestSessionProxyRole,
    " to ",
    selectedSessionProxyRole.value,
  );
  if (bestSessionProxyRole.value === null) {
    props?.close();
    await createSessionProxy();
  } else if (bestSessionProxyRole.value !== selectedSessionProxyRole.value) {
    props?.close();
    await modifySessionProxyRole(
      bestSessionProxy.value,
      selectedSessionProxyRole.value,
    );
  } else {
    console.log("ignoring authorization update request: no change in role");
  }
};

const createSessionProxy = async () => {
  txStatus.value = "Creating session proxy....";
  openStatusOverlay();
  await cryptoWaitReady();
  const generatedMnemonic = mnemonicGenerate();
  const localKeyring = new Keyring({ type: "sr25519", ss58Format: 42 });
  const sessionProxy = localKeyring.addFromMnemonic(generatedMnemonic, {
    name: "fresh",
  });
  const seed = mnemonicToMiniSecret(generatedMnemonic);
  console.log(
    "creating session proxy " +
      sessionProxy.address +
      " with role: " +
      selectedSessionProxyRole.value +
      " localStorage: " +
      persistSessionProxy.value,
  );
  await addSessionProxyFromSeed(seed);
};

const addSessionProxyFromSeed = async (seed: Uint8Array) => {
  const localKeyring = new Keyring({ type: "sr25519", ss58Format: 42 });
  const sessionProxy = localKeyring.addFromSeed(seed, {
    name: "fresh",
  });
  const injector = accountStore.hasInjector ? accountStore.injector : null;
  const role = incogniteeStore.api.createType(
    "SessionProxyRole",
    selectedSessionProxyRole.value,
  );
  const now = new Date();
  const expiryDate = new Date(now.getTime() + 40 * 24 * 60 * 60 * 1000);
  const expiry = Math.floor(expiryDate.getTime());
  console.log(
    "create session proxy " +
      sessionProxy.address +
      " with role: " +
      role +
      " expiry update to: " +
      expiry,
  );
  const nonce = new u32(
    new TypeRegistry(),
    accountStore.nonce[incogniteeSidechain.value],
  );
  await incogniteeStore.api
    .trustedAddSessionProxy(
      accountStore.account,
      incogniteeStore.shard,
      incogniteeStore.fingerprint,
      role,
      sessionProxy.address,
      expiry,
      seed,
      { signer: injector?.signer, nonce: nonce },
    )
    .then((result) =>
      handleTopResult(result, "😀 session proxy registration successful"),
    )
    .catch((err) => handleTopError(err));
};

const modifySessionProxyRole = async (
  proxy: AddressOrPair,
  role: SessionProxyRole,
) => {
  if (isSignerBusy.value) {
    // fixme! this is a hack. don't know why extension pops up twice without this
    console.log("signer busy. aborting repeated attempt...");
    return;
  }
  isSignerBusy.value = true;
  txStatus.value = "Modifying session proxy role....";
  openStatusOverlay();
  const injector = accountStore.hasInjector ? accountStore.injector : null;
  const seed = accountStore.sessionProxySeed(proxy);
  const now = new Date();
  const expiryDate = new Date(now.getTime() + 40 * 24 * 60 * 60 * 1000);
  const expiry = Math.floor(expiryDate.getTime());
  console.log(
    "modify session proxy " +
      proxy.address +
      " to role: " +
      role +
      " expiry update to: " +
      expiry,
  );
  const nonce = new u32(
    new TypeRegistry(),
    accountStore.nonce[incogniteeSidechain.value],
  );
  await incogniteeStore.api
    .trustedAddSessionProxy(
      accountStore.account,
      incogniteeStore.shard,
      incogniteeStore.fingerprint,
      role,
      proxy.address,
      expiry,
      seed,
      { signer: injector?.signer, nonce: nonce },
    )
    .then((result) =>
      handleTopResult(result, "😀 session proxy registration successful"),
    )
    .catch((err) => handleTopError(err));
};

const txStatus = ref("");
const handleTopResult = (result, successMsg?) => {
  console.log("TOP result: " + result);
  if (result) {
    isSignerBusy.value = false;
    if (result.status.isInSidechainBlock) {
      if (successMsg) {
        txStatus.value = successMsg;
      } else {
        txStatus.value =
          "😀 included in sidechain block: " + result.status.asInSidechainBlock;
      }
      //update history to see successful action immediately
      props?.updateNotes();
      return;
    }
    if (result.status.isInvalid) {
      txStatus.value = "😞 Invalid (unspecified reason)";
      return;
    }
  }
  console.error(`unknown result: ${result}`);
  txStatus.value = "😞 Unknown result";
};

const handleTopError = (err) => {
  console.error(`error: ${err}`);
  txStatus.value = `😞 Submission failed: ${err}.`;
};

const showStatusOverlay = ref(false);
const openStatusOverlay = () => {
  showStatusOverlay.value = true;
};
const closeStatusOverlay = () => {
  showStatusOverlay.value = false;
  // close self
  props.close();
};

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  close: {
    type: Function,
    required: true,
  },
  enableActions: {
    type: Boolean,
    required: true,
  },
  updateNotes: {
    type: Function,
    required: true,
  },
});

watch(
  () => props.show,
  (show) => {
    if (show) {
      isSignerBusy.value = false;
      [bestSessionProxy.value, bestSessionProxyRole.value] =
        accountStore.sessionProxyBest();
      console.log(
        "best session proxy: ",
        bestSessionProxy.value.address,
        " role: ",
        bestSessionProxyRole.value,
      );
      if (bestSessionProxyRole.value !== null) {
        selectedSessionProxyRole.value = bestSessionProxyRole.value;
      } else {
        selectedSessionProxyRole.value = "NonTransfer";
      }
    }
  },
);
// even if the same account stays selected and the overlay is manually closed
// we need to call onExtensionAccountChange. otherwise the balance poll will wait forever
const closeProxy = () => {
  props.close();
};
</script>

<style>
.radio-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.radio-group input[type="radio"] {
  margin-right: 10px;
}
</style>
