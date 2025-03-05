import { useRuntimeConfig } from "#app";
import { ChainId } from "@/configs/chains";
import { computed, ref } from "vue";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { ChainAssetId } from "~/configs/assets"; // Add this import

export const shieldingTarget = ref(ChainId.PaseoRelay);
export const shieldingLimit = ref(Infinity);
export const incogniteeSidechain = ref(ChainId.IncogniteePaseoRelay);
export const incogniteeShard = ref(null);
export const isLive = ref(true);

export const teerdaysNetwork = ref(ChainId.IntegriteeKusama);
export const asset = ref<string | null>(null);

export const loadEnv = async (envFile?: string) => {
  const envDefault = useRuntimeConfig().public;
  let envOverride: Record<string, any> = {};
  if (envFile) {
    const response = await fetch(`${envFile}`);
    if (response.ok) {
      const fileContent = await response.text();
      const parsedEnv = dotenv.parse(fileContent);
      envOverride = { ...parsedEnv };
    }
  }

  const getEnvValue = (key: string, defaultValue: any) => {
    return envOverride[key] ?? envDefault[key] ?? defaultValue;
  };

  const shieldingTargetEnv = getEnvValue(
    "SHIELDING_TARGET",
    ChainId.PaseoRelay,
  );
  const shieldingLimitEnv = getEnvValue("SHIELDING_LIMIT", Infinity);
  const incogniteeSidechainEnv = getEnvValue(
    "INCOGNITEE_SIDECHAIN",
    ChainId.IncogniteePaseoRelay,
  );
  const incogniteeShardEnv = getEnvValue(
    "SHARD",
    "5wePd1LYa5M49ghwgZXs55cepKbJKhj5xfzQGfPeMS7c",
  );
  const isLiveEnv = getEnvValue("LIVE", true);
  const integriteeNetworkEnv = getEnvValue(
    "TEERDAYS_NETWORK",
    ChainId.IntegriteeKusama,
  );
  const assetEnv = getEnvValue("ASSET", null);

  incogniteeShard.value = incogniteeShardEnv;
  shieldingTarget.value = ChainId[shieldingTargetEnv] ?? ChainId.PaseoRelay;
  incogniteeSidechain.value =
    ChainId[incogniteeSidechainEnv] ?? ChainId.IncogniteePaseoRelay;
  shieldingLimit.value =
    shieldingLimitEnv > 0 ? Number(shieldingLimitEnv) : Infinity;
  isLive.value = toBoolean(isLiveEnv);
  teerdaysNetwork.value =
    ChainId[integriteeNetworkEnv] ?? ChainId.IntegriteeKusama;
  asset.value = String(assetEnv).trim().normalize();

  console.log(
    "SHIELDING_TARGET: env:" +
      shieldingTargetEnv +
      ". using " +
      ChainId[shieldingTarget.value],
  );
  console.log("ASSET: env:" + assetEnv + ". using " + asset.value);
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
    "SHARD: default:" +
      useRuntimeConfig().public.SHARD +
      ". using " +
      incogniteeShard.value,
  );
  console.log("LIVE: env:" + isLiveEnv + ". using " + isLive.value);
  console.log(
    "TEERDAYS_NETWORK: env:" +
      integriteeNetworkEnv +
      ". using " +
      ChainId[teerdaysNetwork.value],
  );
};

const toBoolean = (value: string | number | boolean): boolean => {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value === 1;
  if (typeof value === "string")
    return value.toLowerCase() === "true" || value === "1";
  return false;
};

export const incogniteeChainAssetId = computed(() => {
  return new ChainAssetId(
    incogniteeSidechain.value,
    asset.value ? asset.value : "native",
  );
});

export const incogniteeChainNativeAsset = computed(() => {
  return new ChainAssetId(incogniteeSidechain.value, "native");
});

export const shieldingTargetChainAssetId = computed(() => {
  return new ChainAssetId(
    shieldingTarget.value,
    asset.value ? asset.value : "native",
  );
});

export const shieldingTargetChainNativeAsset = computed(() => {
  return new ChainAssetId(shieldingTarget.value, "native");
});

export const teerdaysChainNativeAsset = computed(() => {
  return new ChainAssetId(teerdaysNetwork.value, "native");
});
