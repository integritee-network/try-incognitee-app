<template>
  <div>
    <!-- wallet tab should always exist, just not be shown if inactive-->
    <WalletTab
      :show="activeApp === 'wallet'"
      :isProd="isProd"
      :isMobile="isMobile"
      :api="shieldingTargetApi"
      :isFetchingShieldingTargetBalance="isFetchingShieldingTargetBalance"
      :isFetchingIncogniteeBalance="isFetchingIncogniteeBalance"
      :disableGetter="disableGetter"
      ref="walletTabRef"
      :updateNotes="updateNotes"
      :fetchOlderBucket="fetchOlderBucket"
      :eventHorizon="oldestMomentInNoteBuckets"
      :bucketsCount="bucketsCount"
      :unfetchedBucketsCount="unfetchedBucketsCount"
      :isUpdatingNotes="isUpdatingNotes"
      :enableActions="enableActions"
    />
  </div>
  <!-- messgaing tab should always exist, just not be shown if inactive-->
  <div>
    <MessagingTab
      :show="activeApp === 'messaging'"
      :isMobile="isMobile"
      :updateNotes="updateNotes"
      :isUpdatingNotes="isUpdatingNotes"
      :fetchOlderBucket="fetchOlderBucket"
      :eventHorizon="oldestMomentInNoteBuckets"
      :bucketsCount="bucketsCount"
      :unfetchedBucketsCount="unfetchedBucketsCount"
    />
  </div>
  <!-- all following tabs can be unmounted if unselected -->
  <div v-if="activeApp === 'vouchers'"><VouchersTab /></div>
  <div v-else-if="activeApp === 'faq'"><FaqTab /></div>
  <div v-else-if="activeApp === 'swap'"><SwapTab /></div>
  <div v-else-if="activeApp === 'gov'"><GovTab /></div>
  <div v-else-if="activeApp === 'teerdays'">
    <TeerDaysTab :isMobile="isMobile" />
  </div>
  <!-- New Wallet -->
  <OverlayDialog
    :show="showNewWalletOverlay"
    :close="closeNewWalletOverlay"
    title="New Wallet!"
  >
    <div class="mt-2">
      <p class="text-sm text-gray-400">We have created a new wallet for you.</p>

      <div class="flex flex-col mt-5">
        <div class="relative flex items-center rounded-lg">
          <input
            id="accountAddress"
            type="text"
            :value="accountStore.getAddress"
            readonly
            class="w-full text-sm rounded-lg flex-grow pr-14 py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 truncate-input"
            style="border-color: #24ad7c"
          />
          <div class="absolute right-3 flex space-x-2">
            <div @click="copyOwnAddressToClipboard" class="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <a :href="faucetUrl" target="_blank">
          <button
            type="button"
            class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Get free {{ accountStore.getSymbol(null) }} tokens from faucet
          </button>
        </a>
      </div>
      <p class="text-sm text-gray-400 mt-4 text-left">
        In order to keep your wallet, please store a bookmark to the current url
        which includes your secret
        <strong>NOW</strong>. (i.e. type Ctrl+D to bookmark this page). If you
        lose the bookmark, you will lose access to your wallet. If you share
        your personal url with others, they can spend your funds. The purpose of
        this demo is not security but optimal user experience for testing
        purposes.
      </p>
      <p class="text-sm text-gray-400 text-left my-4">
        You will have zero funds. Please tap "Get free PAS tokens from faucet"
        and go to Paseo Faucet to get your first PAS tokens.
      </p>
    </div>
  </OverlayDialog>

  <!-- AddSessionProxy -->
  <SessionProxiesOverlay
    :show="showAuthorizeSessionOverlay"
    :close="closeAuthorizeSessionOverlay"
    :enableActions="enableActions"
    :updateNotes="updateNotes"
  />

  <!-- Choose Wallet -->
  <ChooseWalletOverlay
    :show="showChooseWalletOverlay"
    :close="closeChooseWalletOverlay"
    :createTestingAccount="isProd ? undefined : createTestingAccount"
    :onExtensionAccountChange="onExtensionAccountChange"
    :showTrustedGetterHint="true"
    :changeSessionAuthorization="changeSessionProxies"
  />
</template>

<script setup lang="ts">
import WalletTab from "~/components/tabs/WalletTab.vue";
import VouchersTab from "~/components/tabs/VouchersTab.vue";
import ChooseWalletOverlay from "~/components/overlays/ChooseWalletOverlay.vue";
import SessionProxiesOverlay from "~/components/overlays/SessionProxiesOverlay.vue";
import { computed, onMounted, onUnmounted, ref, watch, defineProps } from "vue";
import { chainConfigs } from "@/configs/chains.ts";
import { useAccount } from "@/store/account.ts";
import { useIncognitee } from "@/store/incognitee.ts";
import OverlayDialog from "~/components/overlays/OverlayDialog.vue";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Keyring } from "@polkadot/keyring";
import { hexToU8a, u8aToHex } from "@polkadot/util";
import {
  cryptoWaitReady,
  encodeAddress,
  mnemonicGenerate,
  mnemonicToMiniSecret,
} from "@polkadot/util-crypto";
import { useInterval } from "@vueuse/core";
import { useRouter } from "vue-router";
import { eventBus } from "@/helpers/eventBus";
import {
  connectExtension,
  injectorForAddress,
} from "@/lib/signerExtensionUtils";
import {
  incogniteeShard,
  incogniteeSidechain,
  isLive,
  loadEnv,
  shieldingTarget,
  asset,
  incogniteeChainAssetId,
  shieldingTargetChainAssetId,
  incogniteeChainNativeAsset,
  shieldingTargetChainNativeAsset,
} from "@/lib/environmentConfig";
import { useSystemHealth } from "@/store/systemHealth";
import { useNotes } from "~/store/notes";
import { parseCall } from "~/lib/notes";
import { ChainAssetId, assetHubRoute, unifyAssetId } from "~/configs/assets";
import {
  SessionProxyRole,
  sessionProxyRoleOrder,
} from "@/lib/sessionProxyStorage.ts";
import MessagingTab from "~/components/tabs/MessagingTab.vue";
import SwapTab from "~/components/tabs/SwapTab.vue";
import GovTab from "~/components/tabs/GovTab.vue";
import TeerDaysTab from "~/components/tabs/TeerDaysTab.vue";
import FaqTab from "~/components/tabs/FaqTab.vue";
import type {AccountEssentials, NotesBucketInfo, TimestampedTrustedNote} from "@encointer/types";
import type {Vec} from "@polkadot/types";

const router = useRouter();
const accountStore = useAccount();
const incogniteeStore = useIncognitee();
const systemHealth = useSystemHealth();

const walletTabRef = ref(null);
const isFetchingShieldingTargetBalance = ref(true);
const isFetchingIncogniteeBalance = ref(true);
const isUpdatingIncogniteeBalance = ref(false);
const isUpdatingNotes = ref(false);
const isChoosingAccount = ref(false);
const disableGetter = ref(false);
const activeApp = ref("wallet");
const faucetUrl = ref<string | undefined>(undefined);
const forceLive = ref(false);
const mockExtension = ref(false);
const shieldingTargetApi = ref<ApiPromise | null>(null);
const isProd = computed(
  () => chainConfigs[shieldingTarget.value].faucetUrl === undefined,
);

const onExtensionAccountChange = async (selectedAddress) => {
  dropSubscriptions();
  console.log("user selected extension account:", selectedAddress);
  accountStore.resetState();
  accountStore.setAccount(selectedAddress.toString());
  accountStore.setInjector(await injectorForAddress(accountStore.getAddress));
  isUpdatingIncogniteeBalance.value = false;
};

const getterMap: { [address: string]: any } = {};

const fetchIncogniteeBalance = async () => {
  if (!incogniteeStore.apiReady) return;
  if (!accountStore.account) return;
  const currentAccount = accountStore.getAccount;

  if (isUpdatingIncogniteeBalance.value == true) {
    console.log("[fetchIncogniteeBalance] already updating. waiting...");
    return;
  }

  if (disableGetter.value == true) {
    console.log(
      "[fetchIncogniteeBalance] getter disabled. reconnect your account to enable again...",
    );
    return;
  }

  isUpdatingIncogniteeBalance.value = true;

  const injector = accountStore.hasInjector ? accountStore.injector : null;
  try {
    if (!getterMap[currentAccount]) {
      if (injector) {
        console.debug(
          `fetching incognitee balance&nonce needs signing in extension: ${injector.name}`,
        );
      }
      getterMap[currentAccount] =
        await incogniteeStore.withWorker(
            async (worker) => await worker.accountEssentialsGetter(
                currentAccount,
                incogniteeStore.shard,
                { signer: injector?.signer },
            )
        );
    } else {
      console.debug(`fetching incognitee balance&nonce using cached getter`);
      if (isChoosingAccount.value == false) {
        closeChooseWalletOverlay();
      }
    }
  } catch (e) {
    // this will be the case if we click on cancel in the extension popup.
    console.error(e);
    isUpdatingIncogniteeBalance.value = false;
    disableGetter.value = true;
    return;
  }

  await getterMap[currentAccount]
    .send()
    .then((accountEssentials: AccountEssentials) => {
      const accountInfo = accountEssentials.account_info;
      const proxies = accountEssentials.session_proxies;
      console.debug(
        `current account info L2: ${accountInfo} on shard ${incogniteeStore.shard}`,
      );
      console.debug(`session proxies: ${proxies}`);
      storeSessionProxies(proxies);
      accountStore.setBalanceFree(
        accountInfo.data.free.toBigInt(),
        incogniteeChainNativeAsset.value,
      );
      for (const assetBalance of accountEssentials.asset_balances) {
        console.log(
          "found asset balance: " +
            assetBalance.asset_id +
            ": " +
            assetBalance.balance,
        );
        accountStore.setBalanceFree(
          assetBalance.balance.toBigInt(),
          new ChainAssetId(
            incogniteeSidechain.value,
            assetBalance.asset_id.toString(),
          ),
        );
      }
      accountStore.setNonce(
        Number(accountInfo.nonce),
        incogniteeSidechain.value,
      );
      isFetchingIncogniteeBalance.value = false;
      isUpdatingIncogniteeBalance.value = false;
      isChoosingAccount.value = false;
      if (
        proxies.length == 0 &&
        accountStore.hasInjector &&
        !accountStore.hasDeclinedSessionProxy &&
        accountStore.getDecimalBalanceFree(incogniteeChainNativeAsset.value) > 0
      ) {
        openAuthorizeSessionOverlay();
      }
      //openAuthorizeSessionOverlay();
    })
    .catch((err) => {
      console.error(`[fetchIncogniteeBalance] error ${err}`);
      isUpdatingIncogniteeBalance.value = false;
    });
};

const storeSessionProxies = (proxies) => {
  // Add the first entry for each role in proxies to the store
  sessionProxyRoleOrder.forEach((role) => {
    const proxy = proxies.find((p) => p.role.toString() === role);
    if (proxy) {
      const localKeyring = new Keyring({ type: "sr25519" });
      const seed = hexToU8a(proxy.seed.toString());
      const account = localKeyring.addFromSeed(seed);
      accountStore.addSessionProxy(account, seed, role);
    } else {
      accountStore.removeProxyForRole(role);
    }
  });
};
const fetchNetworkStatus = async () => {
  const promises = [];
  if (shieldingTargetApi.value?.isReady) {
    // If the browser tab was open, but inactive for a long time,
    // it could be that we need to reconnect (ready is a bad indicator here).
    await reconnectShieldingTargetIfNecessary();
    const p = shieldingTargetApi.value.rpc.chain
      .getFinalizedHead()
      .then((head) => {
        shieldingTargetApi.value.rpc.chain.getBlock(head).then((block) => {
          console.log(
            `finalized L1 block number, according to L1 api: ${block.block.header.number}`,
          );
        });
      });
    promises.push(p);
  }
  if (!incogniteeStore.apiReady) return;

  console.debug("fetch network status info");
  const getter = await incogniteeStore.withWorker(
      (worker) => worker.parentchainsInfoGetter(incogniteeShard.value!)
  );
  const p2 = getter.send().then((info) => {
    console.debug(`parentchains info: ${info}`);
    const shielding_target_id = info.shielding_target
      .toString()
      .replace(/([A-Z])/g, "_$1")
      .toLowerCase()
      .replace(/^_/, "");
    const block_number = info[shielding_target_id]?.block_number;
    const genesis_hash = info[shielding_target_id]?.genesis_hash
      .toHex()
      .toString();
    if (block_number !== null && block_number !== undefined) {
      systemHealth.observeShieldingTargetImportedBlockNumber(block_number);
    }
    if (genesis_hash?.length > 0) {
      systemHealth.setShieldingTargetLightClientGenesisHashHex(genesis_hash);
    }
  });
  promises.push(p2);

  await Promise.all(promises);
};

const noteBucketsInfo = ref<NotesBucketInfo | null>(null);
const firstNoteBucketIndexFetched = ref<number | null>(null);
let lastAccount: string | null  = null;
let lastBucketIndex: number | null = null;
const noteStore = useNotes();
const updateNotes = async () => {
  console.log("updateNotes called");
  if (accountStore.account !== lastAccount) {
    console.log("account changed, purging note history...");
    noteStore.purgeAll();
  }
  lastAccount = accountStore.getAccount;
  await fetchNoteBucketsInfo();
  if (noteBucketsInfo.value?.last.unwrap().index <= lastBucketIndex ?? 0) {
    console.log("bucket didn't change");
  } else {
    lastBucketIndex = noteBucketsInfo.value?.last.unwrap().index;
    console.log("lastBucketIndex=" + lastBucketIndex);
  }
  await fetchIncogniteeNotes(lastBucketIndex, true);
};
const fetchNoteBucketsInfo = async () => {
  if (!incogniteeStore.apiReady) return;

  console.log("fetch note buckets info");
  const getter = await incogniteeStore.withWorker(
      (worker) => worker.noteBucketsInfoGetter(incogniteeStore.shard)
  );
  await getter.send().then((info) => {
    console.log(`note buckets info: ${info}`);
    noteBucketsInfo.value = info;
  });
};
const fetchOlderBucket = async () => {
  const index = firstNoteBucketIndexFetched.value
    ? firstNoteBucketIndexFetched.value - 1
    : lastBucketIndex;
  console.log("fetchOlderBuckets : " + firstNoteBucketIndexFetched.value);
  isUpdatingNotes.value = true;
  await fetchIncogniteeNotes(index, false);
  firstNoteBucketIndexFetched.value = index;
  isUpdatingNotes.value = false;
};

/// returns the date as moment before which all notes have been purged from sidechain state
const oldestMomentInNoteBuckets = computed(() => {
  const beginsAt = noteBucketsInfo.value?.first.unwrap().begins_at;
  console.log("oldest moment is " + beginsAt?.toNumber());
  return beginsAt ? beginsAt.toNumber() : NaN;
});

const bucketsCount = computed(() => {
  if (!noteBucketsInfo.value) return 0;
  return (
    noteBucketsInfo.value.last.unwrap().index -
    noteBucketsInfo.value.first.unwrap().index +
    1
  );
});

const unfetchedBucketsCount = computed(() => {
  const firstBucketIndex = noteBucketsInfo.value?.first
    .unwrap()
    .index.toNumber();
  const lastBucketIndex = noteBucketsInfo.value?.last.unwrap().index.toNumber();
  if (firstBucketIndex === null || lastBucketIndex === null) return null;
  const unfetchedCount =
    firstNoteBucketIndexFetched.value === null
      ? lastBucketIndex - firstBucketIndex + 1
      : firstNoteBucketIndexFetched.value - firstBucketIndex;
  console.debug("unfetchedBucketsCount: ", unfetchedCount);
  return unfetchedCount;
});

const fetchIncogniteeNotes = async (
  maybeBucketIndex: number | null,
  skip_if_signer_needed: boolean,
) => {
  if (!incogniteeStore.apiReady) return;
  if (!accountStore.account) return;
  // avoid race condition leading to duplicate entries in notes
  if (accountStore.getSymbol(null) === "UNIT") return;

  if (disableGetter.value == true) {
    console.log(
      "[fetchIncogniteeNotes] getter disabled. reconnect your account to enable again...",
    );
    return;
  }

  const bucketIndex = maybeBucketIndex ? maybeBucketIndex : 0;
  const mapKey = `notesFor:${accountStore.account}:${bucketIndex}`;
  const sessionProxy = accountStore.sessionProxyForRole(
    SessionProxyRole.ReadAny,
  );
  console.debug(
    "[fetchIncogniteeNotes] sessionProxy: " + sessionProxy?.address,
  );
  const injector = accountStore.hasInjector ? accountStore.injector : null;
  console.debug("[fetchIncogniteeNotes] injector: " + injector);
  try {
    if (!getterMap[mapKey]) {
      if (injector && sessionProxy == null) {
        if (skip_if_signer_needed) {
          console.log(
            "skipping automated fetchIncogniteeNotes because signer is needed",
          );
          return;
        } else {
          console.debug(
            `fetching incognitee notes needs signing in extension: ${injector.name}`,
          );
        }
      }
      getterMap[mapKey] = await incogniteeStore.withWorker(
          async (worker) => await worker.notesForTrustedGetter(
            accountStore.getAccount,
            bucketIndex,
            incogniteeStore.shard,
            { delegate: sessionProxy, signer: injector?.signer },
          )
      );
    } else {
      console.debug(`fetching incognitee notes using cached getter`);
    }
  } catch (e) {
    // this will be the case if we click on cancel in the extension popup.
    console.error(e);
    disableGetter.value = true;
    return;
  }

  await getterMap[mapKey]
    .send()
    .then((notes: Vec<TimestampedTrustedNote>) => {
      console.debug(
        `notes for ${accountStore.getAddress} on shard ${incogniteeStore.shard} in bucket ${bucketIndex}:`,
      );
      for (const note of notes) {
        try {
          if (note.note.isSuccessfulTrustedCall) {
            const call = incogniteeStore.createType(
              "IntegriteeTrustedCall",
              note.note.asSuccessfulTrustedCall,
            );
            const parsedNote = parseCall(
              call,
              note.timestamp,
              accountStore.getAddress,
              accountStore.getSs58Format,
            );
            noteStore.addNote(parsedNote);
          }
        } catch (e) {
          console.error(`[fetchIncogniteeNotes] error parsing note ${e}`);
        }
      }
    })
    .catch((err) => {
      console.error(`[fetchIncogniteeNotes] error ${err}`);
    });
  if (
    firstNoteBucketIndexFetched.value !== null &&
    firstNoteBucketIndexFetched.value <= bucketIndex
  ) {
    console.log("first note bucket fetched didn't change");
  } else {
    console.log("first note bucket fetched is now " + bucketIndex);
    firstNoteBucketIndexFetched.value = bucketIndex;
  }
};

async function fetchWorkerData() {
  if (!incogniteeStore.apiReady) {
    return;
  }

await incogniteeStore.withWorker((worker) => {
    console.debug(
        `[IntegriteeWorker]: connections stats: ${JSON.stringify(worker.wsStats)}`,
    );
    console.debug(
        `[IntegriteeWorker]: endpoint stats: ${JSON.stringify(worker.endpointStats)}`,
    );
  })

  await fetchNetworkStatus();
  await fetchIncogniteeBalance();

  // autofetch history slowly
  try {
    if (
      accountStore.sessionProxyForRole(SessionProxyRole.ReadAny) !== null ||
      !accountStore.hasInjector
    ) {
      console.debug("unfetchedBucketsCount is " + unfetchedBucketsCount.value);
      if (unfetchedBucketsCount.value > 0) {
        await fetchOlderBucket();
      }
    }
  } catch (error) {
    console.warn("error auto-fetching older incognitee note buckets: " + error);
  }
}

const pollingInterval = 1000; // 1.0 seconds
let pollingTimeout: any = null;
const isPolling = ref(true);

// After 20 seconds in background, we will stop some services,
// which can be resumed upon coming into foreground again.
const inactivityTimeoutPeriod = 20000; // 20 seconds
let disconnectWsTimeout: any = null;

async function pollWorker() {
  if (!incogniteeStore.apiReady) {
    // Schedule the next polling.
    pollingTimeout = setTimeout(pollWorker, pollingInterval);
    return;
  }

  await fetchWorkerData();

  if (isPolling.value) {
    // Schedule the next polling.
    pollingTimeout = setTimeout(pollWorker, pollingInterval);
  }
}

function handleVisibilityChange() {
  if (document.visibilityState === "visible") {
    console.debug("[Polling] Tab became visible");
    onVisible();
  } else {
    console.debug("[Polling] Tab became invisible");
    onBackground();
  }
}

async function onVisible() {
  isPolling.value = true;
  clearInterval(disconnectWsTimeout);

  if (!incogniteeStore.apiReady) {
    console.debug("[onVisible] api not ready")
    return;
  }

  if (!incogniteeStore.isConnected) {
    console.debug("[onVisible] Reconnecting to the worker api");
    await incogniteeStore.reconnect();
  }

  // avoid spamming polls due to visibility changes
  clearInterval(pollingTimeout);
  await pollWorker();
}

async function onBackground() {
  isPolling.value = false;
  clearTimeout(pollingTimeout);

  // otherwise we will see errors in the log that
  // the websocket unexpectedly closed after a while.

  // prevent scheduling multiple closes
  clearInterval(disconnectWsTimeout);
  disconnectWsTimeout = setTimeout(closeWs, inactivityTimeoutPeriod);
}

async function closeWs() {
  console.debug("closing websocket");
  if (incogniteeStore.api?.isConnected) {
    // not sure why, but sometimes the websocket is already
    // closed here.
    await incogniteeStore.api?.closeWs();
    console.debug("closed websocket");
  } else {
    console.debug("websocket was closed already");
  }
}

watch(
  () => accountStore.getAddress,
  async () => await subscribeWhatsReady(),
);

async function reconnectShieldingTargetIfNecessary() {
  if (!shieldingTargetApi.value?.isConnected) {
    const wsProvider = new WsProvider(chainConfigs[shieldingTarget.value].api);
    console.log(
      "re-initializing api at " + chainConfigs[shieldingTarget.value].api,
    );
    shieldingTargetApi.value = await ApiPromise.create({
      provider: wsProvider,
    });
    await shieldingTargetApi.value.isReadyOrError;

    // await is quick as we only subscribe
    await shieldingTargetApi.value.rpc.chain.subscribeNewHeads((lastHeader) => {
      systemHealth.observeShieldingTargetBlockNumber(
        lastHeader.number.toNumber(),
      );
    });
  }
}

const subscribeWhatsReady = async () => {
  //todo! only reinitialize if account changes
  if (shieldingTargetApi.value?.isReady) {
    //console.log("skipping api init. It seems the ShieldingTarget api is already subscribed to balance changes");
    return;
  }
  firstNoteBucketIndexFetched.value = null;
  const wsProvider = new WsProvider(chainConfigs[shieldingTarget.value].api);
  console.log(
    "trying to init api at " + chainConfigs[shieldingTarget.value].api,
  );
  shieldingTargetApi.value = await ApiPromise.create({ provider: wsProvider });
  await shieldingTargetApi.value.isReadyOrError;
  accountStore.setExistentialDeposit(
    shieldingTargetApi.value.consts.balances.existentialDeposit.toBigInt(),
    shieldingTargetChainNativeAsset.value,
  );
  accountStore.setNativeDecimals(
    Number(shieldingTargetApi.value.registry.chainDecimals[0]),
  );
  accountStore.setSS58Format(
    Number(shieldingTargetApi.value.registry.chainSS58),
  );
  accountStore.setSymbol(String(shieldingTargetApi.value.registry.chainTokens));
  console.log(
    "api-reported genesis hash for shielding target: " +
      shieldingTargetApi.value.genesisHash.toHex().toString(),
  );
  systemHealth.setShieldingTargetApiGenesisHashHex(
    shieldingTargetApi.value.genesisHash.toHex().toString(),
  );

  // await is quick as we only subscribe
  await shieldingTargetApi.value.rpc.chain.subscribeNewHeads((lastHeader) => {
    systemHealth.observeShieldingTargetBlockNumber(
      lastHeader.number.toNumber(),
    );
  });
  faucetUrl.value = chainConfigs[shieldingTarget.value].faucetUrl?.replace(
    "ADDRESS",
    accountStore.getAddress,
  );
  console.log("faucet url: " + faucetUrl.value);
  if (accountStore.hasInjector) {
    const currentQuery = { ...router.currentRoute.value.query };
    currentQuery.address = accountStore.getAddress;
    currentQuery.seed = undefined;
    router.push({
      query: currentQuery,
    });
  }
  if (accountStore.getAddress === "none") {
    console.log("skipping account subscription. no address");
    return;
  }

  const promises = [];
  const p1 = shieldingTargetApi.value.query.system.account(
    accountStore.getAddress,
    ({
      data: {
        free: currentFree,
        reserved: currentReserved,
        frozen: currentFrozen,
      },
    }) => {
      console.log(
        "shielding-target native balance: free=" +
          currentFree +
          " reserved=" +
          currentReserved +
          " frozen=" +
          currentFrozen,
      );
      accountStore.setBalanceFree(
        BigInt(currentFree),
        shieldingTargetChainNativeAsset.value,
      );
      accountStore.setBalanceReserved(
        BigInt(currentReserved),
        shieldingTargetChainNativeAsset.value,
      );
      accountStore.setBalanceFrozen(
        BigInt(currentFrozen),
        shieldingTargetChainNativeAsset.value,
      );
      isFetchingShieldingTargetBalance.value = false;
    },
  );
  promises.push(p1);
  // if asset, subscribe to asset balance too
  if (asset.value) {
    const [module, assetIdStr] = assetHubRoute[unifyAssetId(asset.value)];
    const assetId = JSON.parse(assetIdStr);
    console.log("asset instance: " + module + " AssetId: " + assetId);
    const pA = shieldingTargetApi.value.query[module].account(
      assetId,
      accountStore.getAddress,
      (assetAccount) => {
        const balance = BigInt(
          assetAccount.unwrapOrDefault().balance.toString(),
        );
        console.log(
          "shielding-target asset balance:",
          "asset =",
          asset.value,
          "assetAccount =",
          assetAccount,
          "balance = ",
          balance,
        );
        accountStore.setBalanceFree(balance, shieldingTargetChainAssetId.value);
        //isFetchingShieldingTargetBalance.value = false;
      },
    );
    promises.push(pA);
  }

  // for quicker responsiveness we dont wait until the next regular poll, but trigger the balance fetch here
  const p2 = fetchIncogniteeBalance().then(() =>
    console.log("fetched incognitee balance"),
  );
  promises.push(p2);
  await Promise.all(promises);
  walletTabRef.value?.onWalletInfoInitialized();
};

const switchToWallet = () => {
  activeApp.value = "wallet";
  const query = { ...router.currentRoute.value.query };
  query.app = activeApp.value;
  router.push({
    query: query,
  });
};

const switchToMessaging = () => {
  activeApp.value = "messaging";
  const query = { ...router.currentRoute.value.query };
  query.app = activeApp.value;
  router.push({
    query: query,
  });
};

const switchToSwap = () => {
  activeApp.value = "swap";
  const query = { ...router.currentRoute.value.query };
  query.app = activeApp.value;
  router.push({
    query: query,
  });
};

const switchToGov = () => {
  activeApp.value = "gov";
  const query = { ...router.currentRoute.value.query };
  query.app = activeApp.value;
  router.push({
    query: query,
  });
};

const switchToVouchers = () => {
  activeApp.value = "vouchers";
  const query = { ...router.currentRoute.value.query };
  query.app = activeApp.value;
  router.push({
    query: query,
  });
};

const switchToTeerDays = () => {
  activeApp.value = "teerdays";
  const query = { ...router.currentRoute.value.query };
  query.app = activeApp.value;
  router.push({
    query: query,
  });
};

const switchToFaq = () => {
  activeApp.value = "faq";
  const query = { ...router.currentRoute.value.query };
  query.app = activeApp.value;
  router.push({
    query: query,
  });
};

onMounted(async () => {
  checkIfMobile();
  window.addEventListener("resize", checkIfMobile);
  document.addEventListener("visibilitychange", handleVisibilityChange);
  await loadEnv(props.envFile);
  await incogniteeStore.initializeApi(
    chainConfigs[incogniteeSidechain.value].api,
    incogniteeShard.value!,
  );
  eventBus.on("addressClicked", openChooseWalletOverlay);
  eventBus.on("switchToWallet", switchToWallet);
  eventBus.on("switchToMessaging", switchToMessaging);
  eventBus.on("switchToSwap", switchToSwap);
  eventBus.on("switchToGov", switchToGov);
  eventBus.on("switchToVouchers", switchToVouchers);
  eventBus.on("switchToTeerDays", switchToTeerDays);
  eventBus.on("switchToFaq", switchToFaq);
  eventBus.on("openSessionProxiesOverlay", openAuthorizeSessionOverlay);

  const injectedAddress = router.currentRoute.value.query.address;
  if (router.currentRoute.value.query.forceLive) {
    forceLive.value = true;
    console.log("forcing live status to true");
  }
  // this is needed to facilitate end-to-end-tests without extension e.g. for screenshots
  if (router.currentRoute.value.query.mockExtension) {
    mockExtension.value = true;
    console.log("fall back to mocking extension unless really connected");
    accountStore.setInjector("mock");
  }
  const initActiveApp = router.currentRoute.value.query.app;
  if (initActiveApp) {
    activeApp.value = initActiveApp;
  }
  const seedHex = router.currentRoute.value.query.seed;
  if (seedHex) {
    console.log("found seed in url: " + seedHex);
    await cryptoWaitReady().then(() => {
      const localKeyring = new Keyring({ type: "sr25519" });
      const account = localKeyring.addFromSeed(hexToU8a(seedHex));
      accountStore.setAccount(account);
    });
  } else if (injectedAddress) {
    await connectExtension();
    try {
      accountStore.setAccount(injectedAddress.toString());
      accountStore.setInjector(
        await injectorForAddress(accountStore.getAddress),
      );
    } catch (e) {
      console.warn("could not load injected account" + e);
      alert(
        "could not find selected address in extensions. Have you enabled your extensions?",
      );
    }
  } else {
    openChooseWalletOverlay();
  }
  // if we move back from TEERdays, the account may already be selected and the subscription watcher won't trigger
  await subscribeWhatsReady();
  // start polling the worker
  await pollWorker();
});

onUnmounted(() => {
  eventBus.off("addressClicked", openChooseWalletOverlay);
  window.removeEventListener("resize", checkIfMobile);

  clearTimeout(pollingTimeout);
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});

const dropSubscriptions = () => {
  console.log("dropping subscriptions");
  shieldingTargetApi.value?.disconnect();
  shieldingTargetApi.value = null;
  isFetchingIncogniteeBalance.value = true;
  disableGetter.value = false;
  accountStore.setInjector(null);
};

const changeSessionProxies = () => {
  closeChooseWalletOverlay();
  isUpdatingIncogniteeBalance.value = false;
  openAuthorizeSessionOverlay();
};

const createTestingAccount = async () => {
  await cryptoWaitReady().then(() => {
    dropSubscriptions();
    const generatedMnemonic = mnemonicGenerate();
    const localKeyring = new Keyring({ type: "sr25519", ss58Format: 42 });
    const newAccount = localKeyring.addFromMnemonic(generatedMnemonic, {
      name: "fresh",
    });
    const seed = mnemonicToMiniSecret(generatedMnemonic);
    const privateKeyHex = u8aToHex(seed);
    console.log(`Private Key in Hex: ${privateKeyHex}`);
    // change url to contain new seed to allow bookmarking
    const currentQuery = { ...router.currentRoute.value.query };
    currentQuery.address = undefined;
    currentQuery.seed = privateKeyHex;
    router.push({
      query: currentQuery,
    });
    accountStore.setAccount(newAccount);
    openNewWalletOverlay();
    closeChooseWalletOverlay();
    isChoosingAccount.value = false;
    isUpdatingIncogniteeBalance.value = false;
    isFetchingIncogniteeBalance.value = true;
  });
};

const showNewWalletOverlay = ref(false);
const openNewWalletOverlay = () => {
  if (!enableActions.value) {
    console.error("network not live");
    return;
  }
  showNewWalletOverlay.value = true;
};
const closeNewWalletOverlay = () => {
  showNewWalletOverlay.value = false;
};

const showAuthorizeSessionOverlay = ref(false);
const openAuthorizeSessionOverlay = () => {
  if (!enableActions.value) {
    console.error("network not live");
    return;
  }
  showAuthorizeSessionOverlay.value = true;
};
const closeAuthorizeSessionOverlay = (optout: boolean) => {
  if (optout) {
    accountStore.declineSessionProxy();
  }
  showAuthorizeSessionOverlay.value = false;
};
const showChooseWalletOverlay = ref(false);
const openChooseWalletOverlay = () => {
  if (!enableActions.value) {
    console.error("network not live");
    return;
  }
  isChoosingAccount.value = true;
  isUpdatingIncogniteeBalance.value = true;
  showChooseWalletOverlay.value = true;
};
const closeChooseWalletOverlay = () => {
  isChoosingAccount.value == false;
  showChooseWalletOverlay.value = false;
};

const isMobile = ref(false);

// Überwache die Bildschirmgröße und aktualisiere den isMobile-Wert
const checkIfMobile = () => {
  isMobile.value = window.matchMedia("(max-width: 768px)").matches;
};

const enableActions = computed(() => {
  return isLive.value || forceLive.value;
});

// overrides the .env values
const props = defineProps({
  envFile: String,
});

const copyOwnAddressToClipboard = () => {
  navigator.clipboard
    .writeText(accountStore.getAddress)
    .then(() =>
      alert(
        "copied your account address to clipboard. Please paste it into the address field on the faucet.",
      ),
    );
};
</script>

<style scoped>
.border-green-500 {
  border-color: #24ad7c;
}

.text-white {
  color: #ffffff;
}

.truncate-input {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

h1 {
  font-size: 1em; /* Adjust as needed */
  font-weight: bold; /* Makes the text bold */
  color: #999; /* Change color as needed */
  text-align: center; /* Centers the text */
  margin-bottom: 20px; /* Adds space below the heading */
}

hr {
  border: none;
  border-top: 1px #222; /* Change color as needed */
  color: #111; /* Change color as needed */
  background-color: #333; /* Change color as needed */
  height: 1px; /* Adjust as needed */
}

.form-container input {
  background-color: #333;
  color: #fff; /* You might want to change the text color to ensure it's readable against the dark background */
}

.form-container input#amount {
  font-size: 2em; /* Make the font size twice as large */
  text-align: center; /* Center the text */
  width: 50%; /* Reduce the width by 50% */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
