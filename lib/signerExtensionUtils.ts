// utils/connectExtension.ts

import {
  web3Enable,
  web3Accounts,
  web3FromAddress,
} from "@polkadot/extension-dapp";
import { ref } from "vue";

export const extensionAccounts = ref([]);
export const selectedExtensionAccount = ref(null);
export const connectExtension = async () => {
  const extensions = await web3Enable("Integritee Dapp");
  console.log("Enabled extensions:", extensions);

  if (extensions.length === 0) {
    console.error("No wallet extensions found.");
    return "Please install a wallet extension and make sure it is enabled";
  }

  const accountsList = await web3Accounts();
  if (!accountsList) {
    console.error("No accounts found. Please unlock your wallet.");
    return "No accounts found. Please unlock your wallet.";
  }

  extensionAccounts.value = accountsList;
  console.log("Found accounts:", accountsList);

  if (accountsList.length < 1) {
    console.error(
      "No accounts detected in extension. Please unlock your wallet, check visibility or create an account.",
    );
    return "No accounts detected in extension. Please unlock your wallet, check visibility or create an account.";
  }

  return null; // No issues, return null
};

export const injectorForAddress = async (address) => {
  const injector = await web3FromAddress(address);
  console.debug(`setting injector: ${JSON.stringify(injector)}`);
  console.debug(`setting injector: ${JSON.stringify(injector.signer)}`);
  return injector;
};
