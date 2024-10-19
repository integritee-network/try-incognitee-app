<template>
  <div class="mt-10 incognitee-border-gradient">
    <NetworkSelector :openAssetsInfo="openAssetsInfo" />

    <div class="container">
      <PublicPrivateBalanceSwitcher
        :selectTab="selectTab"
        :currentTab="currentTab"
      />

      <BalanceInteractorContainer>
        <div v-if="currentTab === 'public'">
          <!-- Public Balance Content -->

          <div class="text-white mb-6 text-center">
            <div class="">
              <h3 class="text-sm mb-3">Public Balance</h3>
              <div
                v-if="isFetchingShieldingTargetBalance"
                class="spinner"
              ></div>
              <div class="text-4xl font-semibold" v-else>
                {{ accountStore.formatBalance(shieldingTarget) }}
                <span class="text-sm font-semibold">{{
                  accountStore.getSymbol
                }}</span>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <div
              class="inner-box flex justify-around text-white py-2 bg-gray-800 rounded-md"
            >
              <div
                class="flex flex-col items-center text-center"
                @click="openShieldOverlay"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 mx-auto mb-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
                <p class="text-xs">Shield</p>
              </div>
              <div
                class="flex flex-col items-center text-center"
                @click="openFaucetOverlay"
                v-if="faucetUrl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 mx-auto mb-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
                <p class="text-xs">Faucet</p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <!-- Private Balance Content -->
          <div class="text-white mb-6 text-center">
            <h3 class="text-sm mb-3" @click="openPrivacyInfo">
              Private Balance ⓘ
            </h3>
            <div v-if="isFetchingIncogniteeBalance" class="spinner"></div>
            <div v-if="disableGetter">
              getter disabled. please reconnect your account
            </div>
            <div class="text-4xl font-semibold" v-else>
              {{ accountStore.formatBalance(incogniteeSidechain) }}
              <span class="text-sm font-semibold">{{
                accountStore.getSymbol
              }}</span>
            </div>
          </div>
          <div class="mt-10">
            <div
              class="inner-box flex justify-around text-white py-2 bg-gray-800 rounded-md"
            >
              <div
                class="flex flex-col items-center text-center"
                @click="openPrivateSendOverlay"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 mx-auto mb-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                  />
                </svg>
                <p class="text-xs">Send</p>
              </div>

              <div
                class="flex flex-col items-center text-center"
                @click="openReceiveOverlay"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 mx-auto mb-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
                <p class="text-xs">Receive</p>
              </div>

              <div
                class="flex flex-col items-center text-center"
                @click="openUnshieldOverlay"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 mx-auto mb-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <p class="text-xs">Unshield</p>
              </div>
            </div>
          </div>
        </div>
      </BalanceInteractorContainer>
    </div>

    <OverlayDialog
      :show="showAssetsInfo"
      :close="closeAssetsInfo"
      title="Other Assets"
    >
      <div class="mt-2">
        <p class="text-sm text-gray-400 mt-4 text-left">
          Incognitee is capable of shielding any fungible asset on any
          substrate-based chain. Stay tuned for dedicated deployments for DOT,
          KSM, USDC, USDT and others
        </p>
        <p class="text-sm text-gray-400 text-left my-4">
          With further extension, Incognitee will be able to shield BTC, ETH and
          any other token whose protocol supports light clients
        </p>
      </div>
      <div class="w-full mt-8 bg-gray-800">
        <button
          type="button"
          class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm"
          @click="closeAssetsInfo"
        >
          Got it!
        </button>
      </div>
    </OverlayDialog>

    <OverlayDialog
      :show="showPrivacyInfo"
      :close="closePrivacyInfo"
      title="On Privacy"
    >
      <div class="mt-2">
        <p class="text-sm text-gray-400 mt-4 text-justify">
          Incognitee enhances your privacy while dealing with digital assets.
          But what does privacy mean and how does incognitee improve privacy?
        </p>
        <p class="text-sm text-gray-400 text-justify my-4">
          First, let's explore why digital assets are generally
          <b>not</b> private. When dealing with crypto assets, your account is a
          pseudonym on a public ledger, much like a bank account number. Every
          single transaction this account does will be stored publicly forever
          and you have no right for deletion of the trace you left. If, at a
          certain point in time your pseudonym can be linked to your identity -
          i.e. because you send tokens to someone else - your entire behavioral
          history is revealed as is your balance.
        </p>
        <p class="text-sm text-gray-400 text-justify my-4">
          <NuxtLink to="https://incognitee.io" class="color_blue"
            >Incognitee
          </NuxtLink>
          is a privacy enhancing technology that allows you to shield your
          assets and transfer them privately. This means that you can send
          tokens to someone else without revealing your balance or transaction
          history. The recipient will not be able to see your balance or
          transaction history either. This is achieved by using a technology
          called
          <NuxtLink
            to="https://docs.integritee.network/2-integritee-network/2.7-privacy-technology-trusted-execution-environments"
            class="color_blue"
            >trusted execution environments (TEE)
          </NuxtLink>
          . The TEEs we use are a hardware feature of server CPU's called
          <i>Intel SGX</i>. In addition, the
          <NuxtLink
            to="https://docs.integritee.network/2-integritee-network"
            class="color_blue"
            >Integritee Network
          </NuxtLink>
          , a Polkadot parachain, performs independent, decentralized remote
          attestation of TEEs. Moreover, it gives finality to Incognitee
          sidechain blocks.
        </p>
        <p class="text-sm text-gray-400 mt-4 text-justify">
          Incognitee is a layer 2 solution, maintaining a private ledger secured
          by TEE. All your transactions are confidential, only known to and the
          person your transacting with. Sender, recipient and amount are
          invisible to the public and even to the operators of Incognitee
          infrastructure.
        </p>
        <p class="text-sm text-gray-400 mt-4 text-justify">
          For maximal privacy, we suggest to shield your assets to incognitee
          and from then on transact them on incognitee only. If you need to
          unshield back to L1, you can still benefit from k-anonymity: the
          public just sees that someone out of <i>k</i> individuals is the
          originator of an unshielding event. If <i>k</i> is large enough, you
          can plausibly deny it was you. You can influence the size of
          <i>k</i> by choosing popular amounts and timing.
        </p>
      </div>
      <div class="mt-5 sm:mt-6">
        <button
          type="button"
          class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm"
          @click="closePrivacyInfo"
        >
          Got it!
        </button>
      </div>
    </OverlayDialog>

    <OverlayDialog
      :show="showShieldOverlay"
      :close="closeShieldOverlay"
      title="Shielding"
    >
      <p class="text-sm text-gray-400 text-left my-4">
        Shielding is the process of moving naked, publicly visible balance on L1
        to your private wallet on Incognitee.
      </p>
      <form
        @submit.prevent="submitShieldForm"
        class="flex-grow flex flex-col justify-between"
      >
        <div>
          <div class="flex justify-between items-center mt-4">
            <label
              for="sendAmount"
              class="text-sm font-medium leading-6 text-white"
              >{{ accountStore.getSymbol }} Amount</label
            >

            <span class="text-xs text-gray-400"
              >Available public balance:
              {{ accountStore.formatBalance(shieldingTarget) }}</span
            >
          </div>
          <input
            id="shieldAmount"
            v-model="shieldAmount"
            type="number"
            step="0.01"
            :min="0.1"
            :max="
              accountStore.getDecimalBalance(shieldingTarget) -
              accountStore.getDecimalExistentialDeposit(shieldingTarget) -
              0.1
            "
            required
            class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 text-right"
            style="border-color: #24ad7c"
          />
          <div class="text-right">
            <span class="text-xs text-gray-400"
              >Fee: 16 m{{ accountStore.getSymbol }} for L1, 0.175% for
              Incognitee</span
            >
          </div>
        </div>
        <div class="bottom-0 left-0 w-full mt-8 bg-gray-800">
          <button
            type="submit"
            class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm"
            @click="submitShieldForm"
          >
            Shield
          </button>
        </div>
      </form>
    </OverlayDialog>

    <OverlayDialog
      :show="showFaucetOverlay"
      :close="closeFaucetOverlay"
      title="Drip Faucet"
    >
      <p class="text-sm text-gray-400">
        The Paseo Faucet grants you PAS tokens every day. Just copy-paste your
        address and solve a CAPTCHA to get free PAS tokens
      </p>

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

      <div class="mt-5 sm:mt-6">
        <a :href="faucetUrl" target="_blank">
          <button
            type="button"
            class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-3 mt-8 text-sm font-semibold text-white shadow-sm"
          >
            Get free PAS tokens from faucet
          </button>
        </a>
      </div>
    </OverlayDialog>

    <OverlayDialog
      :show="showUnshieldOverlay && !showScanOverlay"
      :close="closeUnshieldOverlay"
      title="Unshield"
    >
      <p class="text-sm text-gray-400 text-left my-4">
        Unshielding is the process of moving funds from your private balance on
        Incognitee to publicly visible (naked) L1.
      </p>
      <form class="mt-5" @submit.prevent="submitUnshieldForm">
        <div class="flex flex-col">
          <label
            for="recipientAddress"
            class="text-sm font-medium leading-6 text-white text-left"
            >Recipient</label
          >
          <div class="relative flex items-center rounded-lg">
            <div class="absolute left-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.9889 0L0.0222883 5.99115L0 18.0089L12.0111 24L23.9778 18.0089L24 5.99115L11.9889 0ZM11.9055 2.93685L15.012 4.49375V7.60754L11.9055 9.16444L8.79902 7.60754V4.49375L11.9055 2.93685ZM5.66099 6.0491L8.76754 7.606V10.7198L5.66099 12.2767L8.76749 13.8336V16.9489L5.66093 18.5058L2.55438 16.9489V13.8336L5.66087 12.2767L2.55438 10.7198V7.606L5.66087 6.0491H5.66099ZM18.1278 6.0491L21.2343 7.606V10.7198L18.1279 12.2767L21.2344 13.8336V16.9489L18.1279 18.5058L15.0214 16.9489V13.8336L18.1279 12.2767L15.0214 10.7198V7.606L18.1278 6.0491ZM11.9055 9.16928L15.012 10.7262V13.84L11.913 15.3937L15.012 16.9457V20.0611L11.9055 21.618L8.79902 20.0611V16.9457L11.898 15.3937L8.79902 13.84V10.7262L11.9055 9.16928H11.9055Z"
                  fill="white"
                />
              </svg>
            </div>
            <input
              id="recipientAddress"
              v-model="recipientAddress"
              type="text"
              required
              placeholder="Recipient"
              class="w-full text-sm rounded-lg flex-grow pl-12 py-2 pr-20 bg-cool-900 text-white placeholder-gray-500 border border-green-500 truncate-input"
              style="border-color: #24ad7c"
            />
            <div class="absolute right-3 flex space-x-2">
              <div @click="setRecipientAddressToSelf" class="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <div @click="openScanOverlay" class="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <p class="text-sm text-gray-400 text-left mt-5">
          For optimal k-anonymity, we advise you to unshield exactly 10
          {{ accountStore.getSymbol }} at the time. In the future we will
          provide a score including timing and popular amounts to enhance
          unlinkability of your actions.
        </p>

        <div class="flex justify-between items-center mt-5">
          <label
            for="unshieldAmount"
            class="text-sm font-medium leading-6 text-white"
            >{{ accountStore.getSymbol }} Amount</label
          >

          <span class="text-xs text-gray-400"
            >Available private balance:
            {{ accountStore.formatBalance(incogniteeSidechain) }}</span
          >
        </div>
        <input
          id="unshieldAmount"
          v-model="unshieldAmount"
          type="number"
          step="0.1"
          :min="1.1"
          :max="
            accountStore.getDecimalBalance(incogniteeSidechain) -
            accountStore.getDecimalExistentialDeposit(incogniteeSidechain) -
            0.1
          "
          required
          class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 text-right"
          style="border-color: #24ad7c"
        />
        <!-- Fee description -->
        <div class="text-right">
          <span class="text-xs text-gray-400"
            >Fee: 30m {{ accountStore.getSymbol }} for Incognitee</span
          >
        </div>

        <div class="mt-8 w-full bg-gray-800">
          <button
            type="submit"
            class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Unshield
          </button>
        </div>
      </form>
    </OverlayDialog>

    <OverlayDialog
      :show="showReceiveOverlay"
      :close="closeReceiveOverlay"
      title="Receive"
    >
      <div class="mt-5">
        <p class="text-sm text-gray-400 text-left my-4">
          Share your address with the sender. You can either have them scan this
          QR code or send them a private message.
        </p>
      </div>
      <div class="mt-5 qrcode-container">
        <qrcode :value="accountStore.getAddress"></qrcode>
      </div>

      <div class="flex flex-col mt-5">
        <div
          class="w-full mt-5 mb-2 text-sm font-medium leading-6 text-white font-semibold"
        >
          Your address:
        </div>
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
    </OverlayDialog>

    <OverlayDialog
      :show="showPrivateSendOverlay && !showScanOverlay"
      :close="closePrivateSendOverlay"
      title="Send Privately"
    >
      <div class="mt-5">
        <p class="text-sm text-gray-400 text-left my-4">
          Sending privately means that only you and the recipient know who sent
          how much to whom.
        </p>
      </div>
      <form class="mt-5" @submit.prevent="submitSendForm">
        <div class="flex flex-col">
          <label
            for="recipientAddress"
            class="text-sm font-medium leading-6 text-white text-left"
            >Recipient</label
          >
          <div class="relative flex items-center rounded-lg">
            <input
              id="recipientAddress"
              v-model="recipientAddress"
              type="text"
              required
              class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 truncate-input pr-12"
              style="border-color: #24ad7c"
              placeholder="Recipient"
            />
            <div class="absolute right-3 flex space-x-2">
              <div @click="openScanOverlay" class="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <!-- Label and available balance -->
          <div class="flex justify-between items-center">
            <label
              for="sendAmount"
              class="text-sm font-medium leading-6 text-white"
              >{{ accountStore.getSymbol }} Amount</label
            >

            <span class="text-xs text-gray-400"
              >Available private balance:
              {{ accountStore.formatBalance(incogniteeSidechain) }}</span
            >
          </div>

          <!-- Input field -->
          <div>
            <input
              id="sendAmount"
              v-model="sendAmount"
              type="number"
              step="0.01"
              :min="0.1"
              :max="
                accountStore.getDecimalBalance(incogniteeSidechain) -
                accountStore.getDecimalExistentialDeposit(incogniteeSidechain) -
                0.1
              "
              required
              class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 text-right"
              style="border-color: #24ad7c"
              placeholder="Amount"
            />
          </div>

          <!-- Fee description -->
          <div class="text-right">
            <span class="text-xs text-gray-400"
              >Fee: 10m {{ accountStore.getSymbol }} for Incognitee</span
            >
          </div>
        </div>

        <div class="mt-8 bottom-0 left-0 w-full bg-gray-800">
          <button
            type="submit"
            class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Transfer
          </button>
        </div>
      </form>
    </OverlayDialog>

    <OverlayDialog
      :show="showScanOverlay"
      :close="closeScanOverlay"
      title="Scan recipient's QR code"
    >
      <div class="mt-6 qrcode-container">
        <qrcode-stream @detect="onDecode"></qrcode-stream>
      </div>
    </OverlayDialog>

    <OverlayDialog
      :show="showNewWalletOverlay"
      :close="closeNewWalletOverlay"
      title="New Wallet!"
    >
      <div class="mt-2">
        <p class="text-sm text-gray-400">
          We have created a new wallet for you.
        </p>

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
              Get free {{ accountStore.getSymbol }} tokens from faucet
            </button>
          </a>
        </div>
        <p class="text-sm text-gray-400 mt-4 text-left">
          In order to keep your wallet, please store a bookmark to the current
          url which includes your secret
          <strong>NOW</strong>. (i.e. type Ctrl+D to bookmark this page). If you
          lose the bookmark, you will lose access to your wallet. If you share
          your personal url with others, they can spend your funds. The purpose
          of this demo is not security but optimal user experience for testing
          purposes.
        </p>
        <p class="text-sm text-gray-400 text-left my-4">
          You will have zero funds. Please tap "Get free PAS tokens from faucet"
          and go to Paseo Faucet to get your first PAS tokens.
        </p>
      </div>
    </OverlayDialog>

    <OverlayDialog
      :show="showChooseWalletOverlay"
      :close="closeChooseWalletOverlay"
      title="Access Your Wallet!"
    >
      <div class="mt-2">
        <p class="text-sm text-gray-400">How would you like to connect?</p>
        <div class="mt-4">
          <button
            @click="createTestingAccount"
            class="incognitee-bg btn btn_gradient rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Create a New Account for Testing
          </button>
        </div>
        <p class="mt-4">or</p>
        <div v-if="extensionAccounts.length < 1" class="mt-4 flex flex-col">
          <div
            class="mx-auto grid max-w-lg grid-cols-2 gap-x-3 gap-y-3 sm:max-w-xl sm:grid-cols-4 sm:gap-x-3 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            <a href="https://talisman.xyz/download"
              ><img
                class="col-span-1 max-h-10 w-full object-contain lg:col-span-1"
                src="/img/index/talisman-logo.svg"
                alt="talisman"
            /></a>
            <a href="https://novawallet.io/"
              ><img
                class="col-span-1 max-h-7 w-full object-contain lg:col-span-1"
                src="/img/index/nova-wallet-logo.svg"
                alt="nova wallet"
            /></a>
            <a href="https://www.subwallet.app/"
              ><img
                class="col-span-1 max-h-10 w-full object-contain lg:col-span-1"
                src="/img/index/sub-wallet-logo.svg"
                alt="sub wallet"
            /></a>
            <a href="https://polkadot.js.org/extension/"
              ><img
                class="col-span-1 max-h-7 w-full object-contain lg:col-span-1"
                src="/img/index/polkadotjs-logo.svg"
                alt="polkajs"
            /></a>
          </div>
          <div class="mt-10">
            <button
              @click="connectExtension"
              class="incognitee-bg btn btn_gradient rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Connect Signer Extension
            </button>
          </div>
        </div>
        <div
          v-if="extensionAccounts.length > 0"
          ref="walletSection"
          id="wallet"
          class="py-12 sm:py-16"
        >
          <p class="text-sm text-gray-400">
            Choose one of your extension accounts
          </p>
          <select
            v-model="selectedExtensionAccount"
            id="account.address"
            name="account.address"
            placeholder="account.address"
            class="w-full rounded-md border-0 bg-gray-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-1 focus:ring-inset focus:ring-incognitee-green sm:text-sm sm:leading-6"
          >
            <option
              v-for="account in extensionAccounts"
              :key="account.address"
              :value="account.address"
            >
              {{ account.meta.name }}
            </option>
          </select>
        </div>
        <div v-if="accountStore.hasInjector" class="mt-10">
          <p>
            please allow this app to read your balance by signing the upcoming
            request in your extension
          </p>
          <p>this window will close once a balance could be fetched</p>
        </div>
      </div>
    </OverlayDialog>

    <StatusOverlay
      :tx-status="txStatus"
      :show="showStatusOverlay"
      :close="closeStatusOverlay"
    />
  </div>
</template>

<script setup lang="ts">
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} from "@polkadot/extension-dapp";
import NetworkSelector from "@/components/ui/NetworkSelector.vue";
import PublicPrivateBalanceSwitcher from "@/components/ui/PublicPrivateBalanceSwitcher.vue";
import BalanceInteractorContainer from "@/components/ui/BalanceInteractorContainer.vue";
import StatusOverlay from "@/components/ui/StatusOverlay.vue";
import { ChainId, chainConfigs } from "@/configs/chains.ts";
import { useAccount } from "@/store/account.ts";
import { useIncognitee } from "@/store/incognitee.ts";
import OverlayDialog from "@/components/ui/OverlayDialog.vue";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Keyring } from "@polkadot/keyring";
import { hexToU8a, u8aToHex } from "@polkadot/util";
import { TypeRegistry, u32 } from "@polkadot/types";
import {
  cryptoWaitReady,
  mnemonicGenerate,
  mnemonicToMiniSecret,
} from "@polkadot/util-crypto";
import { useInterval } from "@vueuse/core";
import { onUnmounted, onMounted, ref, watch } from "vue";
import Qrcode from "vue-qrcode";
import { QrcodeStream } from "vue-qrcode-reader";
import { useRouter } from "vue-router";
import { eventBus } from "@/helpers/eventBus";
import { useRuntimeConfig } from "#app";

const router = useRouter();
const accountStore = useAccount();
const incogniteeStore = useIncognitee();
const isFetchingShieldingTargetBalance = ref(true);
const isFetchingIncogniteeBalance = ref(true);
const isUpdatingIncogniteeBalance = ref(false);
const isChoosingAccount = ref(false);
const disableGetter = ref(false);
const isSignerBusy = ref(false);

const shieldingTarget = ref(ChainId.PaseoRelay);
const incogniteeSidechain = ref(ChainId.IncogniteePaseoRelay);

const txStatus = ref("");
const recipientAddress = ref("");
const sendAmount = ref(1.0);
const shieldAmount = ref(1.0);
const unshieldAmount = ref(10.0);
const scanResult = ref("No QR code data yet");
const extensionAccounts = ref([]);
const selectedExtensionAccount = ref(null);
const faucetUrl = ref(null);

watch(selectedExtensionAccount, async (selectedAddress) => {
  if (selectedAddress) {
    console.log("user selected extension account:", selectedAddress);
    dropSubscriptions();
    router.push({
      query: { address: selectedAddress },
    });
    accountStore.setAccount(selectedAddress.toString());
    const injector = await web3FromAddress(accountStore.getAddress);
    console.log(`setting injector: ${JSON.stringify(injector)}`);
    console.log(`setting injector: ${JSON.stringify(injector.signer)}`);
    accountStore.setInjector(injector);
    isUpdatingIncogniteeBalance.value = false;
  }
});

let api: ApiPromise | null = null;

const currentTab = ref("public");

const selectTab = (tab) => {
  currentTab.value = tab;
};

const submitSendForm = () => {
  // Handle the form submission here
  console.log("submitting send form");
  openStatusOverlay();
  closePrivateSendOverlay();
  sendPrivately();
};
const submitShieldForm = () => {
  // Handle the form submission here
  openStatusOverlay();
  closeShieldOverlay();
  shield();
};
const submitUnshieldForm = () => {
  // Handle the form submission here
  openStatusOverlay();
  closeUnshieldOverlay();
  unshield();
};

const setRecipientAddressToSelf = () => {
  recipientAddress.value = accountStore.getAddress;
};

const onDecode = (decodeResult) => {
  console.log("QR scan decoded: " + decodeResult[0].rawValue);
  scanResult.value = decodeResult[0].rawValue;
  recipientAddress.value = decodeResult[0].rawValue;
  closeScanOverlay();
};

const txResHandlerShieldingTarget = ({ events = [], status, txHash }) => {
  status.isFinalized
    ? (txStatus.value = `😀 Finalized. Finalized. You should see your Incognitee balance increase in seconds. Please move to the Private Balance tab`)
    : (txStatus.value = `⌛ Current transaction status: ${status.type}. please be patient a few more seconds. you should see your L1 balance going down`);
  isSignerBusy.value = false;
  // Loop through Vec<EventRecord> to display all events
  events.forEach(({ _, event: { data, method, section } }) => {
    if (section + ":" + method === "system:ExtrinsicFailed") {
      // extract the data for this event
      const [dispatchError, dispatchInfo] = data;
      console.log(`dispatchinfo: ${dispatchInfo}`);
      let errorInfo;

      // decode the error
      if (dispatchError.isModule) {
        // for module errors, we have the section indexed, lookup
        // (For specific known errors, we can also do a check against the
        // api.errors.<module>.<ErrorName>.is(dispatchError.asModule) guard)
        const mod = dispatchError.asModule;
        const error = api.registry.findMetaError(
          new Uint8Array([
            mod.index.toNumber(),
            bnFromHex(mod.error.toHex().slice(0, 4)).toNumber(),
          ]),
        );
        const message = `${error.section}.${error.name}${
          Array.isArray(error.docs)
            ? `(${error.docs.join("")})`
            : error.docs || ""
        }`;

        errorInfo = `${message}`;
        console.log(`Error-info::${JSON.stringify(error)}`);
      } else {
        // Other, CannotLookup, BadOrigin, no extra info
        errorInfo = dispatchError.toString();
      }
      txStatus.value = `😞 Transaction Failed! ${section}.${method}::${errorInfo}`;
    } else if (section + ":" + method === "system:ExtrinsicSuccess") {
      console.log(
        `✅ Transaction successful with status: ${status} hash: ${txHash}`,
      );
    }
  });
};

const txErrHandlerShieldingTarget = (err) =>
  (txStatus.value = `😞 Transaction Failed: ${err.toString()}`);
const shield = async () => {
  console.log("shielding .....");
  if (isSignerBusy.value) {
    // fixme! this is a hack. don't know why extension pops up twice without this
    console.log("signer busy. aborting repeated attempt...");
    return;
  }
  isSignerBusy.value = true;
  txStatus.value = "⌛ awaiting signature and connection";
  if (incogniteeStore.vault && api?.isReady) {
    const balance = accountStore.balance[shieldingTarget.value];
    const amount = accountStore.decimalAmountToBigInt(shieldAmount.value);
    console.log(`sending ${amount} to vault: ${incogniteeStore.vault}`);

    api.tx.balances
      .transferKeepAlive(incogniteeStore.vault, amount)
      .signAsync(accountStore.account, {
        signer: accountStore.injector?.signer,
      })
      .then((tx) => tx.send(txResHandlerShieldingTarget))
      .catch(txErrHandlerShieldingTarget);
  }
};

const unshield = () => {
  console.log("will unshield 30% of your private funds to same account on L1");
  txStatus.value = "⌛ will unshield to L1";
  const amount = accountStore.decimalAmountToBigInt(unshieldAmount.value);
  const account = accountStore.account;
  const nonce = new u32(
    new TypeRegistry(),
    accountStore.nonce[incogniteeSidechain.value],
  );
  console.log(
    `sending ${unshieldAmount.value} from ${accountStore.getAddress} privately (nonce:${nonce}) to ${recipientAddress.value} on L1 (shard: ${incogniteeStore.shard})`,
  );

  incogniteeStore.api
    .balanceUnshieldFunds(
      account,
      incogniteeStore.shard,
      incogniteeStore.fingerprint,
      accountStore.getAddress,
      recipientAddress.value,
      amount,
      {
        signer: accountStore.injector?.signer,
        nonce: nonce,
      },
    )
    .then((hash) => {
      txStatus.value = "😀 Triggered unshielding of funds successfully.";
      console.log(`trustedOperationHash: ${hash}`);
    });
  //todo: manually inc nonce locally avoiding clashes with fetchIncogniteeBalance
};

const sendPrivately = () => {
  console.log("sending funds on incognitee");
  txStatus.value = "⌛ sending funds privately on incognitee";
  const amount = accountStore.decimalAmountToBigInt(sendAmount.value);
  const account = accountStore.account;
  const nonce = new u32(
    new TypeRegistry(),
    accountStore.nonce[incogniteeSidechain.value],
  );
  console.log(
    `sending ${sendAmount.value} from ${account.address} privately to ${recipientAddress.value} with nonce ${nonce}`,
  );

  incogniteeStore.api
    .trustedBalanceTransfer(
      account,
      incogniteeStore.shard,
      incogniteeStore.fingerprint,
      accountStore.getAddress,
      recipientAddress.value,
      amount,
      {
        signer: accountStore.injector?.signer,
        nonce: nonce,
      },
    )
    .then((hash) => {
      console.log(`trustedOperationHash: ${hash}`);
      txStatus.value = "😀 Success";
    });
  //todo: manually inc nonce locally avoiding clashes with fetchIncogniteeBalance
};

const getterMap: { [address: string]: any } = {};

const fetchIncogniteeBalance = async () => {
  if (!incogniteeStore.apiReady) return;
  if (!accountStore.account) return;

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
    if (!getterMap[accountStore.account]) {
      if (injector) {
        console.log(
          `fetching incognitee balance&nonce needs signing in extension: ${injector.name}`,
        );
      }
      getterMap[accountStore.account] =
        await incogniteeStore.api.accountInfoGetter(
          accountStore.account,
          incogniteeStore.shard,
          { signer: injector?.signer },
        );
    } else {
      console.log(`fetching incognitee balance&nonce using cached getter`);
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

  await getterMap[accountStore.account]
    .send()
    .then((accountInfo) => {
      console.log(
        `current account info L2: ${accountInfo} on shard ${incogniteeStore.shard}`,
      );
      accountStore.setBalance(
        BigInt(accountInfo.data.free),
        incogniteeSidechain.value,
      );
      accountStore.setNonce(
        Number(accountInfo.nonce),
        incogniteeSidechain.value,
      );
      isFetchingIncogniteeBalance.value = false;
      isUpdatingIncogniteeBalance.value = false;
      isChoosingAccount.value = false;
    })
    .catch((err) => {
      console.error(`[fetchIncogniteeBalance] error ${err}`);
      isUpdatingIncogniteeBalance.value = false;
    });
};

const pollCounter = useInterval(2000);

watch(pollCounter, async () => {
  //console.log("ping: " + pollCounter.value);
  await fetchIncogniteeBalance();
});

watch(accountStore, async () => {
  //todo! only reinitialize if account changes
  if (accountStore.getAddress === "none") {
    console.log("skipping api init. no address");
    return;
  }
  if (api?.isReady) {
    //console.log("skipping api init. It seems the ShieldingTarget api is already subscribed to balance changes");
    return;
  }

  const wsProvider = new WsProvider(chainConfigs[shieldingTarget.value].api);
  console.log(
    "trying to init api at " + chainConfigs[shieldingTarget.value].api,
  );
  api = await ApiPromise.create({ provider: wsProvider });
  await api.isReady;
  accountStore.setExistentialDeposit(
    BigInt(api.consts.balances.existentialDeposit),
  );
  accountStore.setDecimals(Number(api.registry.chainDecimals));
  accountStore.setSS58Format(Number(api.registry.chainSS58));
  accountStore.setSymbol(String(api.registry.chainTokens));

  faucetUrl.value = chainConfigs[shieldingTarget.value].faucetUrl?.replace(
    "ADDRESS",
    accountStore.getAddress,
  );
  console.log("faucet url: " + faucetUrl.value);
  api.query.system.account(
    accountStore.getAddress,
    ({ data: { free: currentFree } }) => {
      console.log("shielding target balance:" + currentFree);
      accountStore.setBalance(BigInt(currentFree), shieldingTarget.value);
      isFetchingShieldingTargetBalance.value = false;
    },
  );
  // for quicker responsiveness we dont wait until the next regular poll, but trigger the balance fetch here
  fetchIncogniteeBalance().then(() =>
    console.log("fetched incognitee balance"),
  );
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

onMounted(async () => {
  const shieldingTargetEnv = useRuntimeConfig().public.SHIELDING_TARGET;
  const incogniteeSidechainEnv = useRuntimeConfig().public.INCOGNITEE_SIDECHAIN;
  const incogniteeShard = useRuntimeConfig().public.SHARD;
  if (ChainId[shieldingTargetEnv]) {
    shieldingTarget.value = ChainId[shieldingTargetEnv];
  }
  if (ChainId[incogniteeSidechainEnv]) {
    incogniteeSidechain.value = ChainId[incogniteeSidechainEnv];
  }
  console.log(
    "SHIELDING_TARGET: env:" +
      shieldingTargetEnv +
      ". using " +
      ChainId[shieldingTarget.value],
  );
  console.log(
    "INCOGNITEE_SIDECHAIN: env:" +
      incogniteeSidechainEnv +
      ". using " +
      ChainId[incogniteeSidechain.value],
  );

  incogniteeStore.initializeApi(
    chainConfigs[incogniteeSidechain.value].api,
    incogniteeShard,
  );
  eventBus.on("addressClicked", openChooseWalletOverlay);
  const seedHex = router.currentRoute.value.query.seed;
  const injectedAddress = router.currentRoute.value.query.address;

  if (seedHex) {
    console.log("found seed in url: " + seedHex);
    cryptoWaitReady().then(() => {
      const localKeyring = new Keyring({ type: "sr25519" });
      const account = localKeyring.addFromSeed(hexToU8a(seedHex));
      accountStore.setAccount(account);
    });
  } else if (injectedAddress) {
    connectExtension();
    try {
      accountStore.setAccount(injectedAddress.toString());
      const injector = await web3FromAddress(accountStore.getAddress);
      console.log(`setting injector: ${JSON.stringify(injector)}`);
      console.log(`setting injector: ${JSON.stringify(injector.signer)}`);
      accountStore.setInjector(injector);
    } catch (e) {
      console.log("could not load injected account" + e);
      alert(
        "could not find selected address in extensions. Have you enabled your extensions?",
      );
    }
  } else {
    openChooseWalletOverlay();
  }
});

onUnmounted(() => {
  eventBus.off("addressClicked", openChooseWalletOverlay);
});

const dropSubscriptions = () => {
  console.log("dropping subscriptions");
  api?.disconnect();
  api = null;
  isFetchingIncogniteeBalance.value = true;
  disableGetter.value = false;
  accountStore.setInjector(null);
};

const createTestingAccount = () => {
  cryptoWaitReady().then(() => {
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
    router.push({
      query: { seed: privateKeyHex },
    });
    accountStore.setAccount(newAccount);
    openNewWalletOverlay();
    closeChooseWalletOverlay();
    isChoosingAccount.value = false;
    isUpdatingIncogniteeBalance.value = false;
    isFetchingIncogniteeBalance.value = true;
  });
};

const connectExtension = () => {
  web3Enable("Integritee Dapp")
    .then((extensions) => {
      console.log("Enabled extensions:", extensions);

      // Check if any extensions are found
      if (extensions.length === 0) {
        console.error(
          "No wallet extensions found. Please install or enable a wallet.",
        );
        alert("No wallet extensions found. Please install or enable a wallet.");
        return; // Stop execution if no extensions are found
      }

      return web3Accounts();
    })
    .then((accountsList) => {
      // If web3Accounts() didn't return a list, exit gracefully
      if (!accountsList) {
        console.error("No accounts found. Please unlock your wallet.");
        alert("No accounts found. Please unlock your wallet.");
        return;
      }

      // If accounts are found, store them
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
    })
    .catch((error) => {
      // Handle any errors during the connection process
      console.error("Error during wallet connection:", error);
      alert("Error during wallet connection. Please try again.");
    });
};

const open = ref(true);

const showAssetsInfo = ref(false);
const openAssetsInfo = () => {
  showAssetsInfo.value = true;
};
const closeAssetsInfo = () => {
  showAssetsInfo.value = false;
};

const showPrivacyInfo = ref(false);
const openPrivacyInfo = () => {
  showPrivacyInfo.value = true;
};
const closePrivacyInfo = () => {
  showPrivacyInfo.value = false;
};

const showNewWalletOverlay = ref(false);
const openNewWalletOverlay = () => {
  showNewWalletOverlay.value = true;
};
const closeNewWalletOverlay = () => {
  showNewWalletOverlay.value = false;
};

const showChooseWalletOverlay = ref(false);
const openChooseWalletOverlay = () => {
  selectedExtensionAccount.value = null;
  isChoosingAccount.value = true;
  isUpdatingIncogniteeBalance.value = true;
  showChooseWalletOverlay.value = true;
};
const closeChooseWalletOverlay = () => {
  isChoosingAccount.value == false;
  showChooseWalletOverlay.value = false;
};

const showShieldOverlay = ref(false);
const openShieldOverlay = () => {
  showShieldOverlay.value = true;
};
const closeShieldOverlay = () => {
  showShieldOverlay.value = false;
};

const showFaucetOverlay = ref(false);
const openFaucetOverlay = () => {
  showFaucetOverlay.value = true;
};
const closeFaucetOverlay = () => {
  showFaucetOverlay.value = false;
};

const showUnshieldOverlay = ref(false);
const openUnshieldOverlay = () => {
  unshieldAmount.value = 10;
  showUnshieldOverlay.value = true;
};
const closeUnshieldOverlay = () => {
  showUnshieldOverlay.value = false;
};
const showReceiveOverlay = ref(false);
const openReceiveOverlay = () => {
  showReceiveOverlay.value = true;
};
const closeReceiveOverlay = () => {
  showReceiveOverlay.value = false;
};
const showPrivateSendOverlay = ref(false);
const openPrivateSendOverlay = () => {
  console.log(`openSendOverlay (scanoverlay=${showScanOverlay.value})`);
  showPrivateSendOverlay.value = true;
};
const closePrivateSendOverlay = () => {
  console.log("closePrivateSendOverlay");
  showPrivateSendOverlay.value = false;
};

const showScanOverlay = ref(false);
const openScanOverlay = () => {
  scanResult.value = "No QR code data yet";
  showScanOverlay.value = true;
};
const closeScanOverlay = () => {
  console.log("closeScanOverlay");
  showScanOverlay.value = false;
};
const showStatusOverlay = ref(false);
const openStatusOverlay = () => {
  showStatusOverlay.value = true;
};
const closeStatusOverlay = () => {
  showStatusOverlay.value = false;
  showPrivateSendOverlay.value = false;
  showShieldOverlay.value = false;
  showUnshieldOverlay.value = false;
};
</script>

<style scoped>
.border-green-500 {
  border-color: #24ad7c;
}

.bg-gray-800 {
  background-color: #1f2937;
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

.qrcode-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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

.incognitee-border-gradient {
  width: 100%;
  height: 100%;
  background: url("/img/global/bg-line.svg") no-repeat center center;
  background-size: cover;
}

.spinner {
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 1em; /* Adjust the size here */
  height: 1em; /* Adjust the size here */
  animation: spin 2s linear infinite;
  vertical-align: middle; /* Align with the text */
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
