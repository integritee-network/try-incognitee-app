<template>
  <div v-if="show" class="p-3">
    <div class="flex justify-between items-center">
      <button
        @click="eventBus.emit('toggleSidebar')"
        class="lg:hidden text-white focus:outline-none text-2xl"
        id="sidebar-open"
      >
        ☰
      </button>
      <div class="lg:hidden" id="wallet-tab-health-indicator">
        <HealthIndicator />
      </div>
      <div class="lg:hidden" id="wallet-tab-wallet-indicator">
        <WalletIndicator />
      </div>
      <div class="lg:hidden" id="wallet-tab-token-indicator">
        <TokenIndicator />
      </div>
    </div>
    <WarningBanner
      v-if="
        (accountStore.getSymbol(asset) === 'TEER' ||
          accountStore.getSymbol(asset) === 'DOT') &&
        accountStore.getAddress !== 'none' &&
        !accountStore.hasInjector
      "
      :isMobile="isMobile"
      textMobile="This is a temporary voucher with low security. Please use a <a href='https://docs.integritee.network/2-integritee-network/2.4-teer-token/2.4.1-how-to-set-up-a-wallet'>secure wallet</a>"
      textDesktop="You are using a temporary voucher with low security. Everyone who knows your url (including the person who may have shared this url with you) could spend these funds. Please transfer funds to a <a href='https://docs.integritee.network/2-integritee-network/2.4-teer-token/2.4.1-how-to-set-up-a-wallet'>secure wallet</a>"
    />
    <WarningBanner
      :isMobile="isMobile"
      textMobile="Incognitee for AssetHub Polkadot suffered a critical failure. Please read <a href='https://medium.com/@integritee/hardware-failure-incogniteeahp-cc1-incident-post-mortem-64a5797027b6'>our statement</a>. Affected tokens: DOT, USDC, USDT, EURC, ETH, WBTC, PEPE."
      textDesktop="Incognitee for AssetHub Polkadot suffered a critical failure. Please read <a href='https://medium.com/@integritee/hardware-failure-incogniteeahp-cc1-incident-post-mortem-64a5797027b6'>our statement</a>. Affected tokens: DOT, USDC, USDT, EURC, ETH, WBTC, PEPE."
    />
    <!-- div v-else>
      <CampaignBanner
        v-if="enableActions && accountStore.getSymbol(asset) === 'TEER'"
        :onClick="openGuessTheNumberOverlay"
        :isMobile="isMobile"
        textMobile="Guess-The-Number"
        textDesktop="Join the Guess-The-Number Campaign and win some juicy prizes."
      />
    </div -->

    <InfoBanner
      v-if="!enableActions"
      :isMobile="isMobile"
      textMobile="This page is not yet live for mainnet"
      textDesktop="This page is not yet live for mainnet. Please stay tuned!"
    />

    <div class="mt-4"></div>

    <div>
      <PublicPrivateBalanceSwitcher
        :selectTab="selectTab"
        :currentTab="currentTab"
      />

      <BalanceInteractorContainer>
        <div v-if="currentTab === 'public'">
          <!-- Public Balance Content -->

          <div class="text-white mb-6 text-center">
            <div class="">
              <h3 class="text-sm mb-3">
                Public Transferable Balance on
                {{ chainConfigs[shieldingTarget].name }}
              </h3>
              <div
                v-if="isFetchingShieldingTargetBalance"
                class="spinner"
              ></div>
              <div
                class="text-4xl font-semibold"
                v-else
                id="public-balance-display"
              >
                {{
                  formatDecimalBalance(
                    accountStore.getDecimalBalanceTransferable(
                      shieldingTargetChainAssetId,
                    ),
                  )
                }}
                <span class="text-sm font-semibold">{{
                  accountStore.getSymbol(asset)
                }}</span>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <div
              class="inner-box flex justify-around text-white py-2 bg-gray-800 rounded-md"
            >
              <div
                class="flex flex-col items-center text-center cursor-pointer"
                @click="openShieldOverlay"
                id="public-balance-shield"
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
                class="flex flex-col items-center text-center cursor-pointer"
                @click="openFaucetOverlay"
                v-if="faucetUrl"
                id="private-balance-faucet"
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
                class="flex flex-col items-center text-center cursor-pointer"
                @click="openObtainTokenOverlay"
                id="private-balance-obtain"
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
                <p class="text-xs">Get {{ accountStore.getSymbol(asset) }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <!-- Private Balance Content -->
          <div class="text-white mb-6 text-center">
            <h3 class="text-sm mb-3">
              Private Balance
              <span @click="openPrivacyInfo" class="cursor-pointer">ⓘ</span>
            </h3>
            <div v-if="isFetchingIncogniteeBalance" class="spinner"></div>
            <div v-if="disableGetter">
              getter disabled. please reconnect your account and sign the getter
              request in your extension
            </div>
            <div
              v-if="!isFetchingIncogniteeBalance && !disableGetter"
              class="text-4xl font-semibold"
              id="private-balance-display"
            >
              {{ accountStore.formatBalanceFree(incogniteeChainAssetId) }}
              <span class="text-sm font-semibold">{{
                accountStore.getSymbol(asset)
              }}</span>
            </div>
          </div>
          <div class="mt-5">
            <div
              class="inner-box flex justify-around text-white py-2 bg-gray-800 rounded-md"
            >
              <div
                class="flex flex-col items-center text-center cursor-pointer"
                @click="openPrivateSendOverlay"
                id="private-balance-send"
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
                class="flex flex-col items-center text-center cursor-pointer"
                @click="openReceiveOverlay"
                id="private-balance-receive"
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
                class="flex flex-col items-center text-center cursor-pointer"
                @click="openUnshieldOverlay"
                id="private-balance-unshield"
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

      <PrivateTxHistory
        :show="currentTab === 'private'"
        :fetchOlderBucket="props.fetchOlderBucket"
        :eventHorizon="props.eventHorizon"
        :bucketsCount="props.bucketsCount"
        :unfetchedBucketsCount="props.unfetchedBucketsCount"
        :isUpdatingNotes="props.isUpdatingNotes"
      />
      <PublicTxHistory :show="currentTab === 'public'" />
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
          {{ shieldingLimit }} {{ accountStore.getSymbol(asset) }} which
          includes your current private balance on incognitee.
        </p>
      </div>
      <div v-if="minShieldingAmount(asset) > computedShieldingMax">
        <p class="text-sm text-yellow-400">
          You need at least
          {{
            formatDecimalBalance(
              minShieldingAmount(asset) +
                accountStore.getDecimalExistentialDeposit(
                  shieldingTargetChainAssetId,
                ),
            )
          }}
          {{ accountStore.getSymbol(asset) }} public balance to shield. You have
          {{ accountStore.formatBalanceFree(shieldingTargetChainAssetId) }}.
        </p>
      </div>
      <div v-else>
        <form
          @submit.prevent="submitShieldForm"
          class="flex-grow flex flex-col justify-between"
        >
          <div>
            <div class="flex justify-between items-center mt-4">
              <label
                for="sendAmount"
                class="text-sm font-medium leading-6 text-white"
                >{{ accountStore.getSymbol(asset) }} Amount</label
              >

              <span class="text-xs text-gray-400"
                >Available for shielding:
                {{ formatDecimalBalance(computedShieldingMax) }}
                {{ accountStore.getSymbol(asset) }}</span
              >
            </div>
            <input
              id="shieldAmount"
              v-model="shieldAmount"
              type="number"
              step="any"
              :min="minShieldingAmount(asset)"
              :max="computedShieldingMax"
              required
              class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 text-right"
              style="border-color: #24ad7c"
            />
            <div class="text-right">
              <span class="text-xs text-gray-400"
                >Fee: ~16 m{{ accountStore.getSymbol(null) }} for L1,
                {{
                  formatDecimalBalance(INCOGNITEE_SHIELDING_FEE_FRACTION * 100)
                }}% for Incognitee</span
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
      </div>
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
      :token-symbol="accountStore.getSymbol(asset)"
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
      <div
        v-if="
          txFeeUnshielding(asset) +
            minUnshieldingAmount(accountStore.getSymbol(asset)) >
          accountStore.getDecimalBalanceFree(incogniteeChainAssetId)
        "
      >
        <p class="text-sm text-yellow-400">
          You need at least
          {{
            formatDecimalBalance(
              txFeeUnshielding(asset) +
                minUnshieldingAmount(accountStore.getSymbol(asset)),
            )
          }}
          {{ accountStore.getSymbol(asset) }} private balance to unshield. You
          have {{ accountStore.formatBalanceFree(incogniteeChainAssetId) }}.
        </p>
      </div>
      <div v-else>
        <form class="mt-5" @submit.prevent="submitUnshieldForm">
          <div class="flex flex-col">
            <label
              for="unshieldingRecipientAddress"
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
                id="unshieldingRecipientAddress"
                v-model="unshieldingRecipientAddress"
                type="text"
                required
                placeholder="Recipient"
                class="w-full text-sm rounded-lg flex-grow pl-12 py-2 pr-20 bg-cool-900 text-white placeholder-gray-500 border border-green-500 truncate-input"
                style="border-color: #24ad7c"
              />
              <div class="absolute right-3 flex space-x-2">
                <div
                  @click="setUnshieldingRecipientAddressToSelf"
                  class="cursor-pointer"
                >
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
            For optimal k-anonymity, we advise you to unshield either exactly
            {{ computedUnshieldingSuggestions[0] }} or
            {{ computedUnshieldingSuggestions[1] }}
            {{ accountStore.getSymbol(asset) }} at the time. In the future we
            will provide a score including timing and popular amounts to enhance
            unlinkability of your actions.
          </p>

          <div class="flex justify-between items-center mt-5">
            <label
              for="unshieldAmount"
              class="text-sm font-medium leading-6 text-white"
              >{{ accountStore.getSymbol(asset) }} Amount</label
            >

            <span class="text-xs text-gray-400"
              >Available private balance:
              {{ accountStore.formatBalanceFree(incogniteeChainAssetId) }}</span
            >
          </div>
          <input
            id="unshieldAmount"
            v-model="unshieldAmount"
            type="number"
            step="any"
            :min="minUnshieldingAmount(accountStore.getSymbol(asset))"
            :max="
              Math.min(
                accountStore.getDecimalBalanceFree(incogniteeChainAssetId) -
                  accountStore.getDecimalExistentialDeposit(
                    incogniteeChainAssetId,
                  ) -
                  txFeeBase(asset),
                shieldingLimit,
              )
            "
            required
            class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 text-right"
            style="border-color: #24ad7c"
          />
          <!-- Fee description -->
          <div class="text-right">
            <span class="text-xs text-gray-400"
              >Fee: {{ formatDecimalBalance(txFeeUnshielding(asset)) }}
              {{ accountStore.getSymbol(asset) }} for Incognitee</span
            >
          </div>

          <div class="mt-8 w-full bg-gray-800">
            <button
              type="submit"
              id="private-balance-unshield-submit"
              class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm"
            >
              Unshield
            </button>
          </div>
        </form>
      </div>
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
        <qrcode
          :value="accountStore.getAddress"
          :color="{ dark: '#000000', light: '#ffffff' }"
          type="image/png"
        ></qrcode>
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
      <div
        v-if="
          txFeeBase(asset) >
          accountStore.formatBalanceFree(incogniteeChainAssetId)
        "
      >
        <p class="text-sm text-yellow-400">
          Your balance is lower than the tx fee of
          {{ formatDecimalBalance(txFeeBase(asset)) }}
          {{ accountStore.getSymbol(asset) }}. You have
          {{ accountStore.formatBalanceFree(incogniteeChainAssetId) }}.
        </p>
      </div>
      <div v-else>
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
                >{{ accountStore.getSymbol(asset) }} Amount</label
              >

              <span class="text-xs text-gray-400"
                >Available private balance:
                {{
                  accountStore.formatBalanceFree(incogniteeChainAssetId)
                }}</span
              >
            </div>

            <!-- Input field -->
            <div>
              <input
                id="sendAmount"
                v-model="sendAmount"
                type="number"
                step="any"
                :min="txFeeBase(asset)"
                :max="
                  accountStore.getDecimalBalanceFree(incogniteeChainAssetId) -
                  accountStore.getDecimalExistentialDeposit(
                    incogniteeChainAssetId,
                  ) -
                  txFeeBase(asset)
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
                >Fee: {{ formatDecimalBalance(txFeeBase(asset)) }}
                {{ accountStore.getSymbol(asset) }} for Incognitee</span
              >
            </div>
          </div>

          <!-- Messages -->
          <div class="flex flex-col">
            <label
              for="paymentNote"
              class="text-sm font-medium leading-6 text-white text-left"
              >Note</label
            >
            <div class="relative flex items-center rounded-lg">
              <textarea
                id="sendPrivateNote"
                v-model="sendPrivateNote"
                rows="2"
                placeholder="Enter a private note for the recipient"
                :maxlength="140"
                class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 truncate-input pr-12"
              ></textarea>
            </div>
          </div>

          <div class="mt-8 bottom-0 left-0 w-full bg-gray-800">
            <button
              type="submit"
              id="private-balance-send-transfer"
              class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm"
            >
              Transfer
            </button>
          </div>
        </form>
      </div>
    </OverlayDialog>

    <!-- Guess The Number -->
    <OverlayDialog
      :show="showGuessTheNumberOverlay"
      :close="closeGuessTheNumberOverlay"
      title="Guess The Number"
    >
      <div class="my-3 text-gray-300 text-sm text-center">
        <p>
          Guess a number between 0-10000 and win a weekly giveaway! You can
          place up to 10 guesses per round.
        </p>
      </div>

      <div class="mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-1 gap-6 items-start">
          <div>
            <div
              class="rounded-lg bg-gray-800 shadow-sm ring-1 ring-gray-700 pb-3"
            >
              <dl class="flex flex-wrap">
                <!-- round info -->
                <div class="w-full flex justify-between px-6 pt-3">
                  <div class="flex-auto text-left mb-4 md:mb-0">
                    <dt
                      class="text-sm text-left font-semibold leading-6 text-gray-300"
                    >
                      Prize
                    </dt>
                    <dd
                      class="mt-1 text-left text-base font-semibold leading-6 text-white mr-1"
                    >
                      {{
                        formatDecimalBalance(
                          guessTheNumberInfo?.winnings /
                            Math.pow(10, accountStore.getDecimals(null)),
                        )
                      }}
                      {{ accountStore.getSymbol(asset) }}
                    </dd>
                  </div>

                  <div class="flex-auto text-right">
                    <dt class="text-sm font-semibold leading-6 text-gray-300">
                      Current round ends
                    </dt>
                    <dd
                      class="mt-1 text-base font-semibold leading-6 text-white"
                    >
                      {{
                        formatMoment(
                          guessTheNumberInfo?.next_round_timestamp.toNumber(),
                        )
                      }}
                    </dd>
                  </div>
                </div>
                <!-- last round lucky number -->
                <div
                  v-if="guessTheNumberInfo?.maybe_last_lucky_number.isSome"
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
                    <dd
                      class="mt-1 text-base font-semibold leading-6 text-white"
                    >
                      {{ guessTheNumberInfo?.maybe_last_winning_distance }}
                    </dd>
                  </div>
                </div>
                <!-- last round winners -->
                <div
                  v-if="guessTheNumberInfo?.maybe_last_lucky_number.isSome"
                  class="mt-3 flex flex-col w-full flex-none gap-y-4 border-t border-gray-700 px-6 pt-3"
                >
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
          accountStore.getDecimalBalanceTransferable(incogniteeChainAssetId) >
          INCOGNITEE_GTN_GUESS_FEE
        "
        class="mb-4"
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
          <!-- Fee description below input, right-aligned -->
          <div class="text-left right-0 mb-0">
            <span class="text-xs text-gray-400"
              >Fee: {{ formatDecimalBalance(INCOGNITEE_GTN_GUESS_FEE) }}
              {{ accountStore.getSymbol(asset) }} for Incognitee</span
            >
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
                  {{ accountStore.getSymbol(asset) }} to participate in the
                  game. Please shield some first.
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

    <StatusOverlay
      :tx-status="txStatus"
      :show="showStatusOverlay"
      :close="closeStatusOverlay"
    />
  </div>
</template>

<script setup lang="ts">
import {
  INCOGNITEE_GTN_GUESS_FEE,
  INCOGNITEE_SHIELDING_FEE_FRACTION,
  minUnshieldingAmount,
  txFeeBase,
  minShieldingAmount,
  txFeeUnshielding,
} from "~/configs/incognitee";
import { formatDecimalBalance } from "~/helpers/numbers";
import WarningBanner from "~/components/ui/WarningBanner.vue";
import CampaignBanner from "~/components/ui/CampaignBanner.vue";
import ObtainTokenOverlay from "~/components/overlays/ObtainTokenOverlay.vue";
import InfoBanner from "~/components/ui/InfoBanner.vue";
import PublicPrivateBalanceSwitcher from "~/components/ui/PublicPrivateBalanceSwitcher.vue";
import OverlayDialog from "~/components/overlays/OverlayDialog.vue";
import Qrcode from "vue-qrcode";
import BalanceInteractorContainer from "~/components/ui/BalanceInteractorContainer.vue";
import PrivateTxHistory from "~/components/ui/PrivateTxHistory.vue";
import PublicTxHistory from "~/components/ui/PublicTxHistory.vue";
import { computed, defineProps, ref, defineExpose } from "vue";
import { encodeAddress } from "@polkadot/util-crypto";
import { TypeRegistry, u32 } from "@polkadot/types";
import { Health, useSystemHealth } from "~/store/systemHealth";
import { useAccount } from "~/store/account";
import { useIncognitee } from "~/store/incognitee";
import StatusOverlay from "~/components/overlays/StatusOverlay.vue";
import {
  shieldingTarget,
  shieldingLimit,
  incogniteeSidechain,
  isLive,
  asset,
  incogniteeChainAssetId,
  shieldingTargetChainAssetId,
  incogniteeChainNativeAsset,
} from "~/lib/environmentConfig";
import { chainConfigs } from "~/configs/chains";
import { QrcodeStream } from "vue-qrcode-reader";
import { ApiPromise } from "@polkadot/api";
import { isNumber } from "@polkadot/util";
import { formatMoment } from "~/helpers/date";
import { eventBus } from "@/helpers/eventBus";
import { SessionProxyRole } from "~/lib/sessionProxyStorage";
import SessionProxiesOverlay from "~/components/overlays/SessionProxiesOverlay.vue";
import HealthIndicator from "~/components/ui/HealthIndicator.vue";
import IncogniteeLogo from "~/components/Logo/incognitee-logo.vue";
import TokenIndicator from "~/components/ui/TokenIndicator.vue";
import MessagingTab from "~/components/tabs/MessagingTab.vue";
import WalletIndicator from "~/components/ui/WalletIndicator.vue";
import {
  assetHubRoute,
  ChainAssetId,
  unifyAssetId,
} from "../../configs/assets";
import type { GuessTheNumberInfo } from "@encointer/types";

const accountStore = useAccount();
const incogniteeStore = useIncognitee();
const systemHealth = useSystemHealth();
const isSignerBusy = ref(false);
const sendAmount = ref<number | null>(null);
const sendPrivateNote = ref("");
const shieldAmount = ref(11.0);
const unshieldAmount = ref(10.0);
const recipientAddress = ref("");
const unshieldingRecipientAddress = ref("");
const guess = ref(null);
const guessTheNumberInfo = ref<GuessTheNumberInfo | null>(null);
const currentTab = ref("public");
const txStatus = ref("");
const faucetUrl = ref(null);

const selectTab = (tab) => {
  currentTab.value = tab;
  if (tab === "private") {
    props.updateNotes();
  }
};

defineExpose({
  onWalletInfoInitialized: async () => {
    console.log(
      "onWalletInfoInitialized: L1: " +
        accountStore.getDecimalBalanceTransferable(
          shieldingTargetChainAssetId.value,
        ) +
        " L2: " +
        accountStore.getDecimalBalanceTransferable(
          incogniteeChainAssetId.value,
        ),
    );
    if (
      accountStore.getDecimalBalanceTransferable(
        shieldingTargetChainAssetId.value,
      ) === 0
    ) {
      if (
        accountStore.getDecimalBalanceTransferable(
          incogniteeChainAssetId.value,
        ) > 0
      ) {
        console.log("account has funds on incognitee. selecting private tab");
        selectTab("private");
      }
    }
    faucetUrl.value = chainConfigs[shieldingTarget.value].faucetUrl?.replace(
      "ADDRESS",
      accountStore.getAddress,
    );
    props.updateNotes();
  },
});
const submitSendForm = () => {
  if (systemHealth.getSidechainSystemHealth.overall() !== Health.Healthy) {
    alert(
      "Sidechain health currently can't be assessed. Please wait for a green health indicator and try again",
    );
    return;
  }
  openStatusOverlay();
  closePrivateSendOverlay();
  sendPrivately();
};
const submitShieldForm = async () => {
  // double check input values here
  // fixme: why is this necessary? it seems computed max will not be enforced otherwise
  if (
    shieldAmount.value > computedShieldingMax.value ||
    shieldAmount.value < minShieldingAmount(asset.value)
  ) {
    return;
  }
  if (systemHealth.getSidechainSystemHealth.overall() !== Health.Healthy) {
    alert(
      "Sidechain health currently can't be assessed. Please wait for a green health indicator and try again",
    );
    return;
  }
  openStatusOverlay();
  closeShieldOverlay();
  await shield();
};
const submitUnshieldForm = async () => {
  if (systemHealth.getSidechainSystemHealth.overall() !== Health.Healthy) {
    alert(
      "Sidechain health currently can't be assessed. Please wait for a green health indicator and try again",
    );
    return;
  }
  openStatusOverlay();
  closeUnshieldOverlay();
  await unshield();
};
const submitGuessForm = async () => {
  if (systemHealth.getSidechainSystemHealth.overall() !== Health.Healthy) {
    alert(
      "Sidechain health currently can't be assessed. Please wait for a green health indicator and try again",
    );
    return;
  }
  openStatusOverlay();
  closeGuessTheNumberOverlay();
  await submitGuess();
};

const setRecipientAddressToSelf = () => {
  recipientAddress.value = accountStore.getAddress;
};

const setUnshieldingRecipientAddressToSelf = () => {
  unshieldingRecipientAddress.value = accountStore.getAddress;
};
const txResHandlerShieldingTarget = ({ events = [], status, txHash }) => {
  status.isFinalized
    ? (txStatus.value = `😀 Finalized. You should see your Incognitee balance increase in seconds. Please move to the private balance tab.`)
    : (txStatus.value = `⌛ Current transaction status: ${status.type}. Please be patient a few more seconds. You should see your L1 balance going down.`);
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
        const error = props.api.registry.findMetaError(
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
      txStatus.value = `😞 Transaction failed! ${section}.${method}::${errorInfo}.`;
    } else if (section + ":" + method === "system:ExtrinsicSuccess") {
      console.log(
        `✅ Transaction successful with status: ${status} hash: ${txHash}`,
      );
    }
  });
};

const txErrHandlerShieldingTarget = (err) =>
  (txStatus.value = `😞 Transaction failed: ${err.toString()}.`);

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
      //update history to see successful action immediately
      props.updateNotes();
      return;
    }
    if (result.status.isInvalid) {
      txStatus.value = "😞 Invalid (unspecified reason).";
      return;
    }
  }
  console.error(`unknown result: ${result}`);
  txStatus.value = "😞 Unknown result.";
};

const handleTopError = (err) => {
  console.error(`error: ${err}`);
  txStatus.value = `😞 Submission failed: ${err}.`;
};

const shield = async () => {
  console.log("shielding .....");
  if (isSignerBusy.value) {
    // fixme! this is a hack. don't know why extension pops up twice without this
    console.log("signer busy. aborting repeated attempt...");
    return;
  }
  isSignerBusy.value = true;
  txStatus.value = "⌛ Awaiting signature and connection...";
  console.log("local api ready: " + props.api?.isReady);
  if (incogniteeStore.vault && props.api?.isReady) {
    const amount = accountStore.decimalAmountToBigInt(
      shieldAmount.value,
      shieldingTargetChainAssetId.value,
    );
    console.log(
      `sending ${amount} ${asset.value ? asset.value : "native"}  to vault: ${incogniteeStore.vault}`,
    );

    if (asset.value) {
      const [module, assetIdStr] = assetHubRoute[unifyAssetId(asset.value)];
      const assetId = JSON.parse(assetIdStr);
      console.log("shield AssetId:", assetId);
      const feeAssetLocation = isNumber(assetId)
        ? props.api.createType("MultiLocation", {
            parents: 0,
            interior: {
              X2: [
                { PalletInstance: 50 },
                { GeneralIndex: assetId }, // local Asset ID (e.g., USDT asset ID)
              ],
            },
          })
        : null; // we don't use foreignAssets yet to pay fees as the ones we're interested in are not sufficient for account creation anyway
      console.log(
        "asset instance: ",
        module,
        " AssetId: ",
        assetId,
        " fee AssetId: ",
        feeAssetLocation,
      );
      await props.api.tx[module]
        .transferKeepAlive(assetId, incogniteeStore.vault, amount)
        .signAsync(accountStore.account, {
          assetId: feeAssetLocation,
          signer: accountStore.injector?.signer,
        })
        .then((tx) => tx.send(txResHandlerShieldingTarget))
        .catch(txErrHandlerShieldingTarget);
    } else {
      await props.api.tx.balances
        .transferKeepAlive(incogniteeStore.vault, amount)
        .signAsync(accountStore.account, {
          signer: accountStore.injector?.signer,
        })
        .then((tx) => tx.send(txResHandlerShieldingTarget))
        .catch(txErrHandlerShieldingTarget);
    }
  }
};

const unshield = async () => {
  console.log("will unshield 30% of your private funds to same account on L1");
  txStatus.value = "⌛ Will unshield to L1.";
  const amount = accountStore.decimalAmountToBigInt(
    unshieldAmount.value,
    incogniteeChainAssetId.value,
  );
  const account = accountStore.getCurrentAccount;
  const nonce = new u32(
    new TypeRegistry(),
    accountStore.nonce[incogniteeSidechain.value],
  );
  console.log(
    `sending ${unshieldAmount.value} ${accountStore.getSymbol(asset.value)} from ${accountStore.getAddress} publicly (nonce:${nonce}) to ${unshieldingRecipientAddress.value} on L1 (shard: ${incogniteeStore.shard})`,
  );
  if (asset.value) {
    await incogniteeStore
      .getWorker()
      .assetUnshieldFunds(
        account,
        incogniteeStore.shard,
        incogniteeStore.fingerprint,
        accountStore.getAddress,
        unshieldingRecipientAddress.value,
        amount,
        asset.value,
        {
          signer: accountStore.injector?.signer,
          delegate: accountStore.sessionProxyForRole(SessionProxyRole.Any),
          nonce: nonce,
        },
      )
      .then((result) =>
        handleTopResult(
          result,
          "😀 Successfully triggered unshielding process. You should see the unshielded funds appear on L1 in seconds",
        ),
      )
      .catch((err) => handleTopError(err));
  } else {
    await incogniteeStore
      .getWorker()
      .balanceUnshieldFunds(
        account,
        incogniteeStore.shard,
        incogniteeStore.fingerprint,
        accountStore.getAddress,
        unshieldingRecipientAddress.value,
        amount,
        {
          signer: accountStore.injector?.signer,
          delegate: accountStore.sessionProxyForRole(SessionProxyRole.Any),
          nonce: nonce,
        },
      )
      .then((result) =>
        handleTopResult(
          result,
          "😀 Successfully triggered unshielding process. You should see the unshielded funds appear on L1 in seconds",
        ),
      )
      .catch((err) => handleTopError(err));
  }
  //todo: manually inc nonce locally avoiding clashes with fetchIncogniteeBalance
};

const sendPrivately = async () => {
  console.log("sending funds on incognitee");
  txStatus.value = "⌛ Sending funds privately on Incognitee.";
  if (!sendAmount.value) {
    alert("Please enter an amount to send.");
    return;
  }

  const amount = accountStore.decimalAmountToBigInt(
    sendAmount.value!,
    incogniteeChainAssetId.value,
  );
  const account = accountStore.getCurrentAccount;

  const encoder = new TextEncoder();
  const byteLength = encoder.encode(sendPrivateNote.value).length;
  // fixme: https://github.com/encointer/encointer-js/issues/123
  if (byteLength > 161) {
    alert(
      "Note is too long when encoded to UTF-8. Please keep it under 162 bytes.",
    );
    return;
  }
  const note = sendPrivateNote.value.length > 0 ? sendPrivateNote.value : null;
  const nonce = new u32(
    new TypeRegistry(),
    accountStore.nonce[incogniteeSidechain.value],
  );
  console.log(
    `sending ${sendAmount.value} ${accountStore.getSymbol(asset.value)} from ${account.address} privately to ${recipientAddress.value} with nonce ${nonce} and note: ${note}`,
  );

  if (asset.value) {
    await incogniteeStore
      .getWorker()
      .trustedAssetTransfer(
        account,
        incogniteeStore.shard,
        incogniteeStore.fingerprint,
        accountStore.getAddress,
        recipientAddress.value,
        amount,
        asset.value,
        note,
        {
          signer: accountStore.injector?.signer,
          delegate: accountStore.sessionProxyForRole(SessionProxyRole.Any),
          nonce: nonce,
        },
      )
      .then((result) =>
        handleTopResult(result, "😀 Balance transfer successful"),
      )
      .catch((err) => handleTopError(err));
  } else {
    await incogniteeStore
      .getWorker()
      .trustedBalanceTransfer(
        account,
        incogniteeStore.shard,
        incogniteeStore.fingerprint,
        accountStore.getAddress,
        recipientAddress.value,
        amount,
        note,
        {
          signer: accountStore.injector?.signer,
          delegate: accountStore.sessionProxyForRole(SessionProxyRole.Any),
          nonce: nonce,
        },
      )
      .then((result) =>
        handleTopResult(result, "😀 Balance transfer successful"),
      )
      .catch((err) => handleTopError(err));
  }
  //todo: manually inc nonce locally avoiding clashes with fetchIncogniteeBalance
};
const submitGuess = async () => {
  if (!guess.value) {
    alert("Please enter a guess");
    return;
  }

  console.log("submit guess: ", guess.value);
  txStatus.value = "⌛ Privately submitting your guess to Incognitee.";
  const account = accountStore.getCurrentAccount;
  const nonce = new u32(
    new TypeRegistry(),
    accountStore.nonce[incogniteeSidechain.value],
  );
  console.log(
    `sending guess ${guess.value} from ${account} privately to incognitee`,
  );

  await incogniteeStore
    .getWorker()
    .guessTheNumber(
      account,
      incogniteeStore.shard,
      incogniteeStore.fingerprint,
      guess.value,
      {
        signer: accountStore.injector?.signer,
        delegate: accountStore.sessionProxyForRole(
          SessionProxyRole.NonTransfer,
        ),
        nonce: nonce,
      },
    )
    .then((result) => handleTopResult(result, "😀 Guess submission successful"))
    .catch((err) => handleTopError(err));
  //todo: manually inc nonce locally avoiding clashes with fetchIncogniteeBalance
};
const fetchGuessTheNumberInfo = async () => {
  if (!incogniteeStore.apiReady) return;
  console.log("fetch guess the number info");
  const getter = incogniteeStore
    .getWorker()
    .guessTheNumberInfoGetter(incogniteeStore.shard);
  await getter.send().then((info) => {
    console.log(`guess the number info: ${info}`);
    guessTheNumberInfo.value = info;
  });
};

const gtnWinners = computed(() => {
  if (guessTheNumberInfo.value) {
    const winners = [];
    for (const winner of guessTheNumberInfo.value.last_winners) {
      winners.push(
        encodeAddress(winner, accountStore.getSs58Format).slice(0, 8) + "...",
      );
    }
    return winners.join("<br>");
  }
  return "no one";
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

const computedShieldingMax = computed(() => {
  return Math.max(
    0,
    Math.min(
      shieldingLimit.value -
        accountStore.getDecimalBalanceFree(incogniteeChainAssetId.value),
      accountStore.getDecimalBalanceTransferable(
        shieldingTargetChainAssetId.value,
      ) -
        accountStore.getDecimalExistentialDeposit(
          shieldingTargetChainAssetId.value,
        ),
    ),
  );
});

const computedUnshieldingSuggestions = computed(() => {
  const highest = Math.pow(10, Math.floor(Math.log10(shieldingLimit.value)));
  return [highest / 10, highest];
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

const showObtainTokenOverlay = ref(false);
const openObtainTokenOverlay = () => {
  if (!props?.enableActions) {
    console.error("network not live");
    return;
  }
  showObtainTokenOverlay.value = true;
};
const closeObtainTokenOverlay = () => {
  showObtainTokenOverlay.value = false;
};

const showShieldOverlay = ref(false);
const openShieldOverlay = () => {
  if (!props?.enableActions) {
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
  if (!props?.enableActions) {
    console.error("network not live");
    return;
  }
  showFaucetOverlay.value = true;
};
const closeFaucetOverlay = () => {
  showFaucetOverlay.value = false;
};

const showUnshieldOverlay = ref(false);
const openUnshieldOverlay = () => {
  if (!props?.enableActions) {
    console.error("network not live");
    return;
  }
  unshieldAmount.value = Math.floor(
    Math.min(
      10,
      accountStore.getDecimalBalanceFree(incogniteeChainAssetId.value),
    ),
  );
  showUnshieldOverlay.value = true;
};
const closeUnshieldOverlay = () => {
  showUnshieldOverlay.value = false;
};
const showReceiveOverlay = ref(false);
const openReceiveOverlay = () => {
  if (!props?.enableActions) {
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
  if (!props?.enableActions) {
    console.error("network not live");
    return;
  }
  console.debug(
    `openPrivateSendOverlay (scanoverlay=${showScanOverlay.value})`,
  );
  sendAmount.value = Math.floor(
    Math.min(
      sendAmount.value!,
      accountStore.getDecimalBalanceFree(incogniteeChainAssetId.value) -
        txFeeBase(asset.value),
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
  if (!props?.enableActions) {
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

const scanResult = ref("No QR code data yet");
const onDecode = (decodeResult) => {
  console.log("QR scan decoded: " + decodeResult[0].rawValue);
  scanResult.value = decodeResult[0].rawValue;
  if (showPrivateSendOverlay.value) {
    recipientAddress.value = decodeResult[0].rawValue;
  } else if (showUnshieldOverlay.value) {
    unshieldingRecipientAddress.value = decodeResult[0].rawValue;
  }
  closeScanOverlay();
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

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  isProd: {
    type: Boolean,
    required: true,
  },
  isMobile: {
    type: Boolean,
    required: true,
  },
  isFetchingShieldingTargetBalance: {
    type: Boolean,
    required: true,
  },
  isFetchingIncogniteeBalance: {
    type: Boolean,
    required: true,
  },
  disableGetter: {
    type: Boolean,
    required: true,
  },
  api: {
    type: Object,
    required: false,
    default: null,
    validator: (value) => value === null || value instanceof ApiPromise,
  },
  updateNotes: {
    type: Function,
    required: true,
  },
  fetchOlderBucket: {
    type: Function,
    required: true,
  },
  eventHorizon: {
    type: Number,
    required: true,
  },
  bucketsCount: { type: Number, required: true },
  unfetchedBucketsCount: { type: Number, required: true },
  isUpdatingNotes: {
    type: Boolean,
    required: true,
  },
  enableActions: {
    type: Boolean,
    required: true,
  },
});
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
