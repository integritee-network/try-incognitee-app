// utils/connectExtension.ts

import {
  web3Enable,
  web3Accounts,
  web3FromAddress,
} from "@polkadot/extension-dapp";
import { ref } from "vue";

export const extensionAccounts = ref([]);
export const selectedExtensionAccount = ref(null);
export const connectExtension = () => {
  return web3Enable("Integritee Dapp")
    .then((extensions) => {
      console.log("Enabled extensions:", extensions);

      if (extensions.length === 0) {
        console.error(
          "No wallet extensions found. Please install or enable a wallet.",
        );
        alert("No wallet extensions found. Please install or enable a wallet.");
        return;
      }

      return web3Accounts();
    })
    .then((accountsList) => {
      if (!accountsList) {
        console.error("No accounts found. Please unlock your wallet.");
        alert("No accounts found. Please unlock your wallet.");
        return;
      }

      extensionAccounts.value = accountsList;
      console.log("Found accounts:", accountsList);

      if (accountsList.length < 1) {
        console.error(
          "No accounts detected in extension. Please unlock your wallet, check visibility or create an account.",
        );
        alert(
          "No accounts detected in extension. Please unlock your wallet, check visibility or create an account.",
        );
      }
    });
};

export const injectorForAddress = async (address) => {
  const injector = await web3FromAddress(address);
  console.debug(`setting injector: ${JSON.stringify(injector)}`);
  console.debug(`setting injector: ${JSON.stringify(injector.signer)}`);
  return injector;
};
