import { useRuntimeConfig } from "#app";
import { ChainId } from "@/configs/chains";
import { ref } from "vue";

export const shieldingTarget = ref(ChainId.PaseoRelay);
export const shieldingLimit = ref(Infinity);
export const incogniteeSidechain = ref(ChainId.IncogniteePaseoRelay);
export const incogniteeShard = ref(null);
export const isLive = ref(true);

export const integriteeNetwork = ref(ChainId.IntegriteeKusama);

export const loadEnv = () => {
  const shieldingTargetEnv = useRuntimeConfig().public.SHIELDING_TARGET;
  const shieldingLimitEnv = useRuntimeConfig().public.SHIELDING_LIMIT;
  const incogniteeSidechainEnv = useRuntimeConfig().public.INCOGNITEE_SIDECHAIN;
  const incogniteeShardEnv = useRuntimeConfig().public.SHARD;
  const isLiveEnv = useRuntimeConfig().public.LIVE;
  const integriteeNetworkEnv = useRuntimeConfig().public.INTEGRITEE_NETWORK;

  // apply sane defaults and fallbacks
  incogniteeShard.value =
    incogniteeShardEnv.length > 0
      ? incogniteeShardEnv
      : "5wePd1LYa5M49ghwgZXs55cepKbJKhj5xfzQGfPeMS7c";

  if (ChainId[shieldingTargetEnv]) {
    shieldingTarget.value = ChainId[shieldingTargetEnv];
  }
  if (ChainId[incogniteeSidechainEnv]) {
    incogniteeSidechain.value = ChainId[incogniteeSidechainEnv];
  }
  if (shieldingLimitEnv > 0) {
    shieldingLimit.value = Number(shieldingLimitEnv);
  }
  isLive.value = toBoolean(isLiveEnv);
  if (ChainId[integriteeNetworkEnv]) {
    integriteeNetwork.value = ChainId[integriteeNetworkEnv];
  }

  console.log(
    "SHIELDING_TARGET: env:" +
      shieldingTargetEnv +
      ". using " +
      ChainId[shieldingTarget.value],
  );
  console.log(
    "SHIELDING_LIMIT: env:" +
      shieldingLimitEnv +
      ". using " +
      shieldingLimit.value,
  );
  console.log(
    "INCOGNITEE_SIDECHAIN: env:" +
      incogniteeSidechainEnv +
      ". using " +
      ChainId[incogniteeSidechain.value],
  );
  console.log(
    "SHARD: env:" +
      useRuntimeConfig().public.SHARD +
      ". using " +
      incogniteeShard.value,
  );
  console.log("LIVE: env:" + isLiveEnv + ". using " + isLive.value);
  console.log(
    "INTEGRITEE_NETWORK: env:" +
      integriteeNetworkEnv +
      ". using " +
      ChainId[integriteeNetwork.value],
  );
};

const toBoolean = (value: string | number | boolean): boolean => {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value === 1;
  if (typeof value === "string")
    return value.toLowerCase() === "true" || value === "1";
  return false;
};
