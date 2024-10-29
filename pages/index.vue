<template>
  <CampaignBanner
    v-if="enableActions"
    :onClick="openGuessTheNumberOverlay"
    :isMobile="isMobile"
    textMobile="Guess-The-Number Campaign."
    textDesktop="Join the Guess-The-Number Campaign and win some juicy prizes."
  />

  <InfoBanner
    v-if="!enableActions"
    :isMobile="isMobile"
    textMobile="This page is not yet live for mainnet. please visit <a href='https://try.incognitee.io'>try.incognitee.io</a> for the latest version of our paseo testnet wallet"
    textDesktop="This page is not yet live for mainnet. please visit <a href='https://try.incognitee.io'>try.incognitee.io</a> for the latest version of our paseo testnet wallet"
  />

  <InfoBanner
    v-if="!enableActions"
    :isMobile="isMobile"
    textMobile="If you are looking for our TEERDAYS page, please follow <a href='/teerdays'>this link</a>"
    textDesktop="If you are looking for our TEERDAYS page, please follow <a href='/teerdays'>this link</a>"
  />

  <div class="mt-4"></div>

  <NetworkSelector
    :openAssetsInfo="openAssetsInfo"
    :selectedNetwork="shieldingTarget"
  />

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
            <h3 class="text-sm mb-3">Public Transferable Balance</h3>
            <div v-if="isFetchingShieldingTargetBalance" class="spinner"></div>
            <div class="text-4xl font-semibold" v-else>
              {{
                formatDecimalBalance(
                  accountStore.getDecimalBalanceTransferable(shieldingTarget),
                )
              }}
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
            <div
              class="flex flex-col items-center text-center"
              @click="openObtainTokenOverlay"
              v-else
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
              <p class="text-xs">Get {{ accountStore.getSymbol }}</p>
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
            getter disabled. please reconnect your account and sign the getter
            request in your extension
          </div>
          <div
            v-if="!isFetchingIncogniteeBalance && !disableGetter"
            class="text-4xl font-semibold"
          >
            {{ accountStore.formatBalanceFree(incogniteeSidechain) }}
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

  <!-- Assets Info -->
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

  <!-- Privacy Info -->
  <OverlayDialog
    :show="showPrivacyInfo"
    :close="closePrivacyInfo"
    title="On Privacy"
  >
    <div class="mt-2">
      <p class="text-sm text-gray-400 mt-4 text-justify">
        Incognitee enhances your privacy while dealing with digital assets. But
        what does privacy mean and how does incognitee improve privacy?
      </p>
      <p class="text-sm text-gray-400 text-justify my-4">
        First, let's explore why digital assets are generally
        <b>not</b> private. When dealing with crypto assets, your account is a
        pseudonym on a public ledger, much like a bank account number. Every
        single transaction this account does will be stored publicly forever and
        you have no right for deletion of the trace you left. If, at a certain
        point in time your pseudonym can be linked to your identity - i.e.
        because you send tokens to someone else - your entire behavioral history
        is revealed as is your balance.
      </p>
      <p class="text-sm text-gray-400 text-justify my-4">
        <NuxtLink to="https://incognitee.io" class="color_blue"
          >Incognitee
        </NuxtLink>
        is a privacy enhancing technology that allows you to shield your assets
        and transfer them privately. This means that you can send tokens to
        someone else without revealing your balance or transaction history. The
        recipient will not be able to see your balance or transaction history
        either. This is achieved by using a technology called
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
        attestation of TEEs. Moreover, it gives finality to Incognitee sidechain
        blocks.
      </p>
      <p class="text-sm text-gray-400 mt-4 text-justify">
        Incognitee is a layer 2 solution, maintaining a private ledger secured
        by TEE. All your transactions are confidential, only known to and the
        person your transacting with. Sender, recipient and amount are invisible
        to the public and even to the operators of Incognitee infrastructure.
      </p>
      <p class="text-sm text-gray-400 mt-4 text-justify">
        For maximal privacy, we suggest to shield your assets to incognitee and
        from then on transact them on incognitee only. If you need to unshield
        back to L1, you can still benefit from k-anonymity: the public just sees
        that someone out of <i>k</i> individuals is the originator of an
        unshielding event. If <i>k</i> is large enough, you can plausibly deny
        it was you. You can influence the size of <i>k</i> by choosing popular
        amounts and timing.
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

  <!-- Shielding -->
  <OverlayDialog
    :show="showShieldOverlay"
    :close="closeShieldOverlay"
    title="Shielding"
  >
    <p class="text-sm text-gray-400 text-left my-4">
      Shielding is the process of moving naked, publicly visible balance on L1
      to your private wallet on Incognitee.
    </p>
    <div v-if="shieldingLimit < Infinity">
      <p class="text-sm text-gray-400 text-left my-4">
        During beta phase, you can only shield up to
        {{ shieldingLimit }} {{ accountStore.getSymbol }} which includes your
        current private balance on incognitee.
      </p>
    </div>
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
            >Available for shielding: {{ computedShieldingMax.toFixed(3) }}
            {{ accountStore.getSymbol }}</span
          >
        </div>
        <input
          id="shieldAmount"
          v-model="shieldAmount"
          type="number"
          step="1"
          :min="1"
          :max="computedShieldingMax"
          required
          class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 text-right"
          style="border-color: #24ad7c"
        />
        <div class="text-right">
          <span class="text-xs text-gray-400"
            >Fee: ~16 m{{ accountStore.getSymbol }} for L1,
            {{ formatDecimalBalance(INCOGNITEE_SHIELDING_FEE_FRACTION * 100) }}%
            for Incognitee</span
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

  <!-- Faucet -->
  <OverlayDialog
    :show="showFaucetOverlay"
    :close="closeFaucetOverlay"
    title="Drip Faucet"
  >
    <p class="text-sm text-gray-400 text-left my-4">
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

  <ObtainTokenOverlay
    :withdraw-to-address="accountStore.getAddress"
    :token-symbol="accountStore.getSymbol"
    :close="closeObtainTokenOverlay"
    :show="showObtainTokenOverlay"
  />

  <!-- Unshield -->
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
        {{ accountStore.getSymbol }} at the time. In the future we will provide
        a score including timing and popular amounts to enhance unlinkability of
        your actions.
      </p>

      <div class="flex justify-between items-center mt-5">
        <label
          for="unshieldAmount"
          class="text-sm font-medium leading-6 text-white"
          >{{ accountStore.getSymbol }} Amount</label
        >

        <span class="text-xs text-gray-400"
          >Available private balance:
          {{ accountStore.formatBalanceFree(incogniteeSidechain) }}</span
        >
      </div>
      <input
        id="unshieldAmount"
        v-model="unshieldAmount"
        type="number"
        step="0.1"
        :min="1.1"
        :max="
          accountStore.getDecimalBalanceFree(incogniteeSidechain) -
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
          >Fee: {{ formatDecimalBalance(INCOGNITEE_UNSHIELDING_FEE) }}
          {{ accountStore.getSymbol }} for Incognitee</span
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

  <!-- Receive -->
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

  <!-- Send Privately -->
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
            {{ accountStore.formatBalanceFree(incogniteeSidechain) }}</span
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
              accountStore.getDecimalBalanceFree(incogniteeSidechain) -
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
            >Fee: {{ formatDecimalBalance(INCOGNITEE_TX_FEE) }}
            {{ accountStore.getSymbol }} for Incognitee</span
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

  <!-- Guess The Number -->
  <OverlayDialog
    :show="showGuessTheNumberOverlay"
    :close="closeGuessTheNumberOverlay"
    title="Guess The Number"
  >
    <div class="my-3 text-gray-300 text-sm text-center">
      <p>
        Guess a number between 0-10000 and win a weekly giveaway! You can place
        up to 10 guesses per round.
      </p>
    </div>

    <div class="mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-1 gap-6 items-start">
        <div>
          <div
            class="rounded-lg bg-gray-800 shadow-sm ring-1 ring-gray-700 pb-3"
          >
            <dl class="flex flex-wrap">
              <div class="w-full flex justify-between px-6 pt-3">
                <div class="flex-auto text-left mb-4 md:mb-0">
                  <dt
                    class="text-sm text-left font-semibold leading-6 text-gray-300"
                  >
                    Winnings
                  </dt>
                  <dd
                    class="mt-1 text-left text-base font-semibold leading-6 text-white"
                  >
                    {{
                      formatDecimalBalance(
                        guessTheNumberInfo?.winnings /
                          Math.pow(10, accountStore.decimals),
                      )
                    }}
                    {{ accountStore.getSymbol }}
                  </dd>
                </div>

                <div class="flex-auto text-right">
                  <dt class="text-sm font-semibold leading-6 text-gray-300">
                    Current round ends
                  </dt>
                  <dd class="mt-1 text-base font-semibold leading-6 text-white">
                    {{
                      formatTimestamp(guessTheNumberInfo?.next_round_timestamp)
                    }}
                  </dd>
                </div>
              </div>
              <div
                class="mt-3 flex w-full flex-none gap-x-4 border-t border-gray-700 px-6 pt-3"
              >
                <div class="flex-auto text-left mb-4 md:mb-0">
                  <dt
                    class="text-sm text-left font-semibold leading-6 text-gray-300"
                  >
                    Last lucky number
                  </dt>
                  <dd
                    class="mt-1 text-left text-base font-semibold leading-6 text-white"
                  >
                    {{
                      guessTheNumberInfo?.maybe_last_lucky_number ?? "unknown"
                    }}
                  </dd>
                </div>

                <div
                  v-if="guessTheNumberInfo?.maybe_last_winning_distance > 0"
                  class="flex-auto text-right"
                >
                  <dt class="text-sm font-semibold leading-6 text-gray-300">
                    Last winning distance
                  </dt>
                  <dd class="mt-1 text-base font-semibold leading-6 text-white">
                    {{ guessTheNumberInfo?.maybe_last_winning_distance }}
                  </dd>
                </div>
              </div>

              <div
                class="mt-3 flex flex-col w-full flex-none gap-y-4 border-t border-gray-700 px-6 pt-3"
              >
                <!-- Last weeks lucky number -->
                <div class="text-sm font-semibold leading-6 text-gray-300">
                  Last lucky winners
                </div>

                <!-- Winner's address displayed under the last lucky number -->
                <div
                  class="text-sm leading-6 text-gray-400"
                  v-html="gtnWinners"
                />
              </div>
            </dl>
          </div>
        </div>

        <div>
          <div></div>
        </div>
      </div>
    </div>
    <div
      v-if="
        accountStore.getDecimalBalanceTransferable(incogniteeSidechain) >
        INCOGNITEE_GTN_GUESS_FEE
      "
    >
      <form class="" @submit.prevent="submitGuessForm">
        <!-- Label for the input -->
        <div class="flex justify-between mb-2">
          <label for="guess" class="text-sm font-medium leading-6 text-white"
            >Enter your guess</label
          >
        </div>

        <!-- Flex container for input and button -->
        <div class="flex items-center space-x-4">
          <!-- Guess Input Field -->
          <div class="flex-grow relative">
            <input
              id="guess"
              v-model="guess"
              type="number"
              step="1"
              :min="0"
              :max="10000"
              required
              class="w-full text-sm rounded-lg bg-cool-900 text-white placeholder-gray-500 border border-green-500"
              style="border-color: #24ad7c"
              placeholder="guess"
            />

            <!-- Fee description below input, right-aligned -->
            <div class="absolute right-0 -bottom-5">
              <span class="text-xs text-gray-400"
                >Fee: {{ formatDecimalBalance(INCOGNITEE_GTN_GUESS_FEE) }}
                {{ accountStore.getSymbol }} for Incognitee</span
              >
            </div>
          </div>

          <!-- Submit Button -->
          <div class="flex items-center justify-center">
            <button
              type="submit"
              class="btn btn_gradient rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm"
              style="margin-left: auto; margin-right: auto"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    <div v-else>
      <div class="rounded-md bg-yellow-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg
              class="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3">
            <div class="text-left text-sm text-yellow-700">
              <p>
                You need at least
                {{ formatDecimalBalance(INCOGNITEE_GTN_GUESS_FEE) }} private
                {{ accountStore.getSymbol }} to participate in the game. Please
                shield some first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </OverlayDialog>

  <!-- Scan QR -->
  <OverlayDialog
    :show="showScanOverlay"
    :close="closeScanOverlay"
    title="Scan recipient's QR code"
  >
    <div class="mt-6 qrcode-container">
      <qrcode-stream @detect="onDecode"></qrcode-stream>
    </div>
  </OverlayDialog>

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
            Get free {{ accountStore.getSymbol }} tokens from faucet
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

  <!-- Choose Wallet -->
  <ChooseWalletOverlay
    :show="showChooseWalletOverlay"
    :close="closeChooseWalletOverlay"
    :createTestingAccount="isProd ? undefined : createTestingAccount"
    :onExtensionAccountChange="onExtensionAccountChange"
    :showTrustedGetterHint="true"
  />

  <StatusOverlay
    :tx-status="txStatus"
    :show="showStatusOverlay"
    :close="closeStatusOverlay"
  />
</template>

<script setup lang="ts">
import NetworkSelector from "@/components/ui/NetworkSelector.vue";
import PublicPrivateBalanceSwitcher from "@/components/ui/PublicPrivateBalanceSwitcher.vue";
import BalanceInteractorContainer from "@/components/ui/BalanceInteractorContainer.vue";
import StatusOverlay from "@/components/ui/StatusOverlay.vue";
import ChooseWalletOverlay from "@/components/ui/ChooseWalletOverlay.vue";
import { computed } from "vue";
import { chainConfigs } from "@/configs/chains.ts";
import { useAccount } from "@/store/account.ts";
import { useIncognitee } from "@/store/incognitee.ts";
import OverlayDialog from "@/components/ui/OverlayDialog.vue";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Keyring } from "@polkadot/keyring";
import { hexToU8a, u8aToHex } from "@polkadot/util";
import { encodeAddress } from "@polkadot/util-crypto";
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
import InfoBanner from "~/components/ui/InfoBanner.vue";
import CampaignBanner from "~/components/ui/CampaignBanner.vue";
import {
  extensionAccounts,
  connectExtension,
  injectorForAddress,
} from "@/lib/signerExtensionUtils";
import {
  loadEnv,
  shieldingTarget,
  shieldingLimit,
  incogniteeSidechain,
  incogniteeShard,
  isLive,
} from "@/lib/environmentConfig";
import ObtainTokenOverlay from "@/components/ui/ObtainTokenOverlay.vue";
import { formatDecimalBalance } from "@/helpers/numbers";
import {
  INCOGNITEE_GTN_GUESS_FEE,
  INCOGNITEE_SHIELDING_FEE_FRACTION,
  INCOGNITEE_TX_FEE,
  INCOGNITEE_UNSHIELDING_FEE,
} from "../configs/incognitee";
import { useSystemHealth } from "@/store/systemHealth";

const router = useRouter();
const accountStore = useAccount();
const incogniteeStore = useIncognitee();
const systemHealth = useSystemHealth();
const isFetchingShieldingTargetBalance = ref(true);
const isFetchingIncogniteeBalance = ref(true);
const isUpdatingIncogniteeBalance = ref(false);
const isChoosingAccount = ref(false);
const disableGetter = ref(false);
const isSignerBusy = ref(false);
const txStatus = ref("");
const recipientAddress = ref("");
const sendAmount = ref(1.0);
const shieldAmount = ref(11.0);
const unshieldAmount = ref(10.0);
const guess = ref(null);
const guessTheNumberInfo = ref(null);
const scanResult = ref("No QR code data yet");
const faucetUrl = ref(null);
const forceLive = ref(false);

const isProd = computed(
  () => chainConfigs[shieldingTarget.value].faucetUrl === undefined,
);
const onExtensionAccountChange = async (selectedAddress) => {
  dropSubscriptions();
  console.log("user selected extension account:", selectedAddress);
  accountStore.setAccount(selectedAddress.toString());
  accountStore.setInjector(await injectorForAddress(accountStore.getAddress));
  isUpdatingIncogniteeBalance.value = false;
};

let api: ApiPromise | null = null;

const currentTab = ref("public");

const selectTab = (tab) => {
  currentTab.value = tab;
};

const submitSendForm = () => {
  // Handle the form submission here
  openStatusOverlay();
  closePrivateSendOverlay();
  sendPrivately();
};
const submitShieldForm = async () => {
  // double check input values here
  // fixme: why is this necessary? it seems computed max will not be enforced otherwise
  if (shieldAmount.value > computedShieldingMax.value) {
    alert(
      `Shield amount exceeds the maximum allowed value of ${computedShieldingMax.value}`,
    );
    return;
  }
  // Handle the form submission here
  openStatusOverlay();
  closeShieldOverlay();
  await shield();
};
const submitUnshieldForm = async () => {
  // Handle the form submission here
  openStatusOverlay();
  closeUnshieldOverlay();
  await unshield();
};
const submitGuessForm = async () => {
  // Handle the form submission here
  openStatusOverlay();
  closeGuessTheNumberOverlay();
  await submitGuess();
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

const handleTopResult = (result, successMsg?) => {
  console.log("TOP result: " + result);
  if (result) {
    if (result.status.isInSidechainBlock) {
      if (successMsg) {
        txStatus.value = successMsg;
      } else {
        txStatus.value =
          "😀 included in sidechain block: " + result.status.asInSidechainBlock;
      }
      return;
    }
    if (result.status.isInvalid) {
      txStatus.value = "😞 Invalid (unspecified reason)";
      return;
    }
  }
  console.error(`unknown result: ${result}`);
  txStatus.value = "😞 Unknown Result";
};

const handleTopError = (err) => {
  console.error(`error: ${err}`);
  txStatus.value = `😞 Submission Failed: ${err}`;
};

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
    const amount = accountStore.decimalAmountToBigInt(shieldAmount.value);
    console.log(`sending ${amount} to vault: ${incogniteeStore.vault}`);

    await api.tx.balances
      .transferKeepAlive(incogniteeStore.vault, amount)
      .signAsync(accountStore.account, {
        signer: accountStore.injector?.signer,
      })
      .then((tx) => tx.send(txResHandlerShieldingTarget))
      .catch(txErrHandlerShieldingTarget);
  }
};

const unshield = async () => {
  console.log("will unshield 30% of your private funds to same account on L1");
  txStatus.value = "⌛ will unshield to L1";
  const amount = accountStore.decimalAmountToBigInt(unshieldAmount.value);
  const account = accountStore.account;
  const nonce = new u32(
    new TypeRegistry(),
    accountStore.nonce[incogniteeSidechain.value],
  );
  console.log(
    `sending ${unshieldAmount.value} from ${accountStore.getAddress} publicly (nonce:${nonce}) to ${recipientAddress.value} on L1 (shard: ${incogniteeStore.shard})`,
  );

  await incogniteeStore.api
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
    .then((result) =>
      handleTopResult(result, "😀 Triggered unshielding of funds"),
    )
    .catch((err) => handleTopError(err));
  //todo: manually inc nonce locally avoiding clashes with fetchIncogniteeBalance
};

const sendPrivately = async () => {
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

  await incogniteeStore.api
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
    .then((result) => handleTopResult(result, "😀 Balance transfer successful"))
    .catch((err) => handleTopError(err));
  //todo: manually inc nonce locally avoiding clashes with fetchIncogniteeBalance
};

const submitGuess = async () => {
  console.log("submit guess: ", guess.value);
  txStatus.value = "⌛ privately submitting your guess to incognitee";
  const account = accountStore.account;
  const nonce = new u32(
    new TypeRegistry(),
    accountStore.nonce[incogniteeSidechain.value],
  );
  console.log(
    `sending guess ${guess.value} from ${account.address} privately to incognitee`,
  );

  await incogniteeStore.api
    .guessTheNumber(
      account,
      incogniteeStore.shard,
      incogniteeStore.fingerprint,
      guess.value,
      {
        signer: accountStore.injector?.signer,
        nonce: nonce,
      },
    )
    .then((result) => handleTopResult(result, "😀 Guess submission successful"))
    .catch((err) => handleTopError(err));
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
        console.debug(
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

  await getterMap[accountStore.account]
    .send()
    .then((accountInfo) => {
      console.debug(
        `current account info L2: ${accountInfo} on shard ${incogniteeStore.shard}`,
      );
      accountStore.setBalanceFree(
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

const fetchGuessTheNumberInfo = async () => {
  if (!incogniteeStore.apiReady) return;
  console.log("fetch guess the number info");
  const getter = incogniteeStore.api.guessTheNumberInfoGetter(
    incogniteeStore.shard,
  );
  await getter.send().then((info) => {
    console.log(`guess the number info: ${info}`);
    guessTheNumberInfo.value = info;
  });
};

const gtnWinners = computed(() => {
  if (guessTheNumberInfo.value) {
    let winners = [];
    for (const winner of guessTheNumberInfo.value.last_winners) {
      winners.push(
        encodeAddress(winner, accountStore.getSs58Format).slice(0, 8) + "...",
      );
    }
    return winners.join("<br>");
  }
  return "no one";
});

const fetchNetworkStatus = async () => {
  let promises = [];
  if (api?.isReady) {
    const p = api.rpc.chain.getFinalizedHead().then((head) => {
      api.rpc.chain.getBlock(head).then((block) => {
        console.log(
          `finalized L1 block number, according to L1 api: ${block.block.header.number}`,
        );
      });
    });
    promises.push(p);
  }
  if (!incogniteeStore.apiReady) return;
  console.debug("fetch network status info");
  const getter = incogniteeStore.api.parentchainsInfoGetter(
    incogniteeShard.value,
  );
  let p2 = getter.send().then((info) => {
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

const pollCounter = useInterval(2000);
watch(pollCounter, async () => {
  await fetchIncogniteeBalance();
  await fetchNetworkStatus();
});

watch(
  () => accountStore.getAddress,
  async () => await subscribeWhatsReady(),
);

const subscribeWhatsReady = async () => {
  //todo! only reinitialize if account changes
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
  console.log(
    "api-reported genesis hash for shielding target: " +
      api.genesisHash.toHex().toString(),
  );
  systemHealth.setShieldingTargetApiGenesisHashHex(
    api.genesisHash.toHex().toString(),
  );

  // await is quick as we only subscribe
  await api.rpc.chain.subscribeNewHeads((lastHeader) => {
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
  let p1 = api.query.system.account(
    accountStore.getAddress,
    ({
      data: {
        free: currentFree,
        reserved: currentReserved,
        frozen: currentFrozen,
      },
    }) => {
      console.log(
        "shielding-target balance: free=" +
          currentFree +
          " reserved=" +
          currentReserved +
          " frozen=" +
          currentFrozen,
      );
      accountStore.setBalanceFree(BigInt(currentFree), shieldingTarget.value);
      accountStore.setBalanceReserved(
        BigInt(currentReserved),
        shieldingTarget.value,
      );
      accountStore.setBalanceFrozen(
        BigInt(currentFrozen),
        shieldingTarget.value,
      );
      isFetchingShieldingTargetBalance.value = false;
    },
  );
  promises.push(p1);
  // for quicker responsiveness we dont wait until the next regular poll, but trigger the balance fetch here
  let p2 = fetchIncogniteeBalance().then(() =>
    console.log("fetched incognitee balance"),
  );
  promises.push(p2);

  await Promise.all(promises);
};
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
  checkIfMobile();
  window.addEventListener("resize", checkIfMobile);
  loadEnv();
  incogniteeStore.initializeApi(
    chainConfigs[incogniteeSidechain.value].api,
    incogniteeShard.value,
  );
  eventBus.on("addressClicked", openChooseWalletOverlay);
  const seedHex = router.currentRoute.value.query.seed;
  const injectedAddress = router.currentRoute.value.query.address;
  if (router.currentRoute.value.query.forceLive) {
    forceLive.value = true;
    console.log("forcing live status to true");
  }
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
    await subscribeWhatsReady();
  }
});

onUnmounted(() => {
  eventBus.off("addressClicked", openChooseWalletOverlay);
  window.removeEventListener("resize", checkIfMobile);
});

const dropSubscriptions = () => {
  console.log("dropping subscriptions");
  api?.disconnect();
  api = null;
  isFetchingIncogniteeBalance.value = true;
  disableGetter.value = false;
  accountStore.setInjector(null);
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

const computedShieldingMax = computed(() => {
  return Math.max(
    0,
    Math.min(
      shieldingLimit.value -
        accountStore.getDecimalBalanceFree(incogniteeSidechain.value),
      accountStore.getDecimalBalanceTransferable(shieldingTarget.value) -
        accountStore.getDecimalExistentialDeposit(shieldingTarget.value) -
        0.1,
    ),
  );
});

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
  if (!enableActions.value) {
    console.error("network not live");
    return;
  }
  showNewWalletOverlay.value = true;
};
const closeNewWalletOverlay = () => {
  showNewWalletOverlay.value = false;
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

const showShieldOverlay = ref(false);
const openShieldOverlay = () => {
  if (!enableActions.value) {
    console.error("network not live");
    return;
  }
  shieldAmount.value = Math.floor(
    Math.min(shieldAmount.value, computedShieldingMax.value),
  );
  showShieldOverlay.value = true;
};
const closeShieldOverlay = () => {
  showShieldOverlay.value = false;
};

const showFaucetOverlay = ref(false);
const openFaucetOverlay = () => {
  if (!enableActions.value) {
    console.error("network not live");
    return;
  }
  showFaucetOverlay.value = true;
};
const closeFaucetOverlay = () => {
  showFaucetOverlay.value = false;
};

const showObtainTokenOverlay = ref(false);
const openObtainTokenOverlay = () => {
  if (!enableActions.value) {
    console.error("network not live");
    return;
  }
  showObtainTokenOverlay.value = true;
};
const closeObtainTokenOverlay = () => {
  showObtainTokenOverlay.value = false;
};

const showUnshieldOverlay = ref(false);
const openUnshieldOverlay = () => {
  if (!enableActions.value) {
    console.error("network not live");
    return;
  }
  unshieldAmount.value = Math.floor(
    Math.min(10, accountStore.getDecimalBalanceFree(incogniteeSidechain.value)),
  );
  showUnshieldOverlay.value = true;
};
const closeUnshieldOverlay = () => {
  showUnshieldOverlay.value = false;
};
const showReceiveOverlay = ref(false);
const openReceiveOverlay = () => {
  if (!enableActions.value) {
    console.error("network not live");
    return;
  }
  showReceiveOverlay.value = true;
};
const closeReceiveOverlay = () => {
  showReceiveOverlay.value = false;
};
const showPrivateSendOverlay = ref(false);
const openPrivateSendOverlay = () => {
  if (!enableActions.value) {
    console.error("network not live");
    return;
  }
  console.debug(
    `openPrivateSendOverlay (scanoverlay=${showScanOverlay.value})`,
  );
  sendAmount.value = Math.floor(
    Math.min(
      sendAmount.value,
      accountStore.getDecimalBalanceFree(incogniteeSidechain.value) - 0.1,
    ),
  );
  showPrivateSendOverlay.value = true;
};
const closePrivateSendOverlay = () => {
  console.debug("closePrivateSendOverlay");
  showPrivateSendOverlay.value = false;
};

const showGuessTheNumberOverlay = ref(false);
const openGuessTheNumberOverlay = () => {
  if (!enableActions.value) {
    console.error("network not live");
    return;
  }
  console.log(
    `openGuessTheNumberOverlay (scanoverlay=${showScanOverlay.value})`,
  );
  fetchGuessTheNumberInfo();
  showGuessTheNumberOverlay.value = true;
};
const closeGuessTheNumberOverlay = () => {
  console.log("closeGuessTheNumberOverlay");
  showGuessTheNumberOverlay.value = false;
};

const showScanOverlay = ref(false);
const openScanOverlay = () => {
  scanResult.value = "No QR code data yet";
  showScanOverlay.value = true;
};
const closeScanOverlay = () => {
  console.debug("closeScanOverlay");
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

const isMobile = ref(false);

// Überwache die Bildschirmgröße und aktualisiere den isMobile-Wert
const checkIfMobile = () => {
  isMobile.value = window.matchMedia("(max-width: 768px)").matches;
};
const formatTimestamp = (timestamp: number | null) => {
  if (!timestamp) return "undefined";
  console.log("formatting epoch: " + timestamp);
  const date = new Date(timestamp.toNumber());
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZoneName: "short",
  };
  return new Intl.DateTimeFormat("de-CH", options).format(date);
};

const enableActions = computed(() => {
  return isLive.value || forceLive.value;
});
</script>

<style scoped>
.currency-box {
  position: relative;
  outline: none; /* Keine Outline standardmäßig */
}

.currency-box:hover {
  outline: 2px solid var(--incognitee-green); /* Verwende outline statt border */
}

.text-overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

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
