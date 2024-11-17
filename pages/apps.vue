<template>
 <CampaignBanner v-if="enableActions" :onClick="openGuessTheNumberOverlay" :isMobile="isMobile"
    textMobile="Guess-The-Number" textDesktop="Join the Guess-The-Number Campaign and win some juicy prizes." />

  <InfoBanner v-if="!enableActions" :isMobile="isMobile" textMobile="This page is not yet live for mainnet"
    textDesktop="This page is not yet live for mainnet. please visit <a href='https://try.incognitee.io'>try.incognitee.io</a> for the latest version of our paseo testnet wallet" />

  <InfoBanner v-if="!enableActions" :isMobile="isMobile" textMobile="Looking for <a href='/teerdays'>TEERdays</a>?"
    textDesktop="If you are looking for our TEERDAYS page, please follow <a href='/teerdays'>this link</a>" />

  <div class="mt-4"></div>

  <NetworkSelector :openAssetsInfo="openAssetsInfo" :selectedNetwork="shieldingTarget" />

  
  <div class="my-10">
    <div class="flex justify-between items-center mb-5">
    <div>
    <span
            class="title text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            Dapps
  </span>
</div>

                    <div class="relative flex items-center rounded-lg mr-1">
                        <input id="recipientAddress" v-model="recipientAddress" type="text" required
  class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-transparent hover:border-incognitee-green focus:border-incognitee-blue truncate-input pr-12"
  placeholder="Search" />
                        <div class="absolute right-3 flex space-x-2">
                            <div class="cursor-pointer">
                              <svg fill="none" viewBox="0 0 30 30" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

                            </div>
                        </div>
                    </div>
              
                </div>
  <div class="divide-y divide-gray-700 overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-3 sm:gap-3 sm:divide-y-0">
     <!-- TEERdays App -->
  <div class="group relative rounded-tl-lg rounded-tr-lg bg-[#2A2A31] p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-incognitee-green sm:rounded-tr-none">
    <div>
      <span class="inline-flex rounded-lg bg-incognitee-brightblue p-3">
        <TEERdays class="w-6 h-6" />
      </span>
    </div>
    <div class="mt-8"><span class="mb-2 inline-flex items-center rounded-md bg-green-500/10 pr-2 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Incognitee</span> <span class="mb-2 inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20">Governance</span>
      <h3 class="text-base font-semibold text-gray-100">
        <a href="#" >
          <span class="absolute inset-0" aria-hidden="true"></span>
          TEERdays
        </a>
      </h3>
      <div class="ribbon green"><span>Live</span></div>
      <p class="mt-2 text-sm text-gray-400">Boost your revenue share & voting power for Incognitee’s launch on Polkadot- bond TEER now!​
      </p>
    </div>
    <span class="pointer-events-none absolute right-6 top-6 text-gray-500 group-hover:text-gray-400" aria-hidden="true">
      <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
      </svg>
    </span>
  </div>
   <!-- Messages App -->
  <div class="group relative rounded-tl-lg rounded-tr-lg bg-[#2A2A31] p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-incognitee-green sm:rounded-tr-none">
    <div>
      <span class="inline-flex rounded-lg bg-incognitee-brightblue p-3">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6 mx-auto">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                      </svg>
      </span>
    </div>
    <div class="mt-8"><span class="mb-2 inline-flex items-center rounded-md bg-green-500/10 pr-2 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Incognitee</span> <span class="mb-2 inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">Tool</span>
      <h3 class="text-base font-semibold text-gray-100">
        <a href="#" >
          <span class="absolute inset-0" aria-hidden="true"></span>
          Messages
        </a>
      </h3>
      <div class="ribbon green"><span>Live</span></div>
      <p class="mt-2 text-sm text-gray-400">You want to contact a wallet owner? Send messages confidentially from wallet to wallet.</p>
    </div>
    <span class="pointer-events-none absolute right-6 top-6 text-gray-500 group-hover:text-gray-400" aria-hidden="true">
      <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
      </svg>
    </span>
  </div>
  <!-- Guess The Number​ App -->
  <div class="group relative rounded-tl-lg rounded-tr-lg bg-[#2A2A31] p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-incognitee-green sm:rounded-tr-none">
    <div>
      <span class="inline-flex rounded-lg bg-incognitee-brightblue p-3">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>

      </span>
    </div>
    <div class="mt-8"><span class="mb-2 inline-flex items-center rounded-md bg-green-500/10 pr-2 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Incognitee</span> <span class="mb-2 inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-400/30">Game</span>
      <h3 class="text-base font-semibold text-gray-100">
        <a href="#" >
          <span class="absolute inset-0" aria-hidden="true"></span>
          Guess The Number​
        </a>
      </h3>
      <div class="ribbon green"><span>Live</span></div>
      <p class="mt-2 text-sm text-gray-400">Play and Earn. Guess the number right and earn some juicy prices with Incognitee.​
      </p>
    </div>
    <span class="pointer-events-none absolute right-6 top-6 text-gray-500 group-hover:text-gray-400" aria-hidden="true">
      <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
      </svg>
    </span>
  </div>
   <!-- Integritee Network​ App -->
   <div class="group relative rounded-tl-lg rounded-tr-lg bg-[#2A2A31] p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-incognitee-green sm:rounded-tr-none">
    <div>
      <span class="inline-flex rounded-lg bg-incognitee-brightblue p-3">
        <TEER class="w-[24px] h-[24px]" />

      </span>
    </div>
    <div class="mt-8"><span class="mb-2 inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30">Integritee</span> <span class="mb-2 inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">Network</span>
      <h3 class="text-base font-semibold text-gray-100">
        <a href="#" >
          <span class="absolute inset-0" aria-hidden="true"></span>
          Integritee Network
        </a>
      </h3>
      <div class="ribbon green"><span>Live</span></div>
      <p class="mt-2 text-sm text-gray-400">Checkout the backbone of Incognitee and explore the possibilities of building your own dapp. 
      </p>
    </div>
    <span class="pointer-events-none absolute right-6 top-6 text-gray-500 group-hover:text-gray-400" aria-hidden="true">
      <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
      </svg>
    </span>
  </div>
   <!-- Incognitee Roadmap​ App -->
   <div class="group relative rounded-tl-lg rounded-tr-lg bg-[#2A2A31] p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-incognitee-green sm:rounded-tr-none">
    <div>
      <span class="inline-flex rounded-lg bg-incognitee-brightblue p-3">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>

      </span>
    </div>
    <div class="mt-8"><span class="mb-2 inline-flex items-center rounded-md bg-green-500/10 pr-2 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Incognitee</span> <span class="mb-2 inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-400/20">Info</span>
      <h3 class="text-base font-semibold text-gray-100">
        <a href="#" >
          <span class="absolute inset-0" aria-hidden="true"></span>
          Incognitee Roadmap
        </a>
      </h3>
      <div class="ribbon green"><span>Live</span></div>
      <p class="mt-2 text-sm text-gray-400">Visit the roadmap, submit your feedback or request a feature and shape the future of Incognitee.
      </p>
    </div>
    <span class="pointer-events-none absolute right-6 top-6 text-gray-500 group-hover:text-gray-400" aria-hidden="true">
      <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
      </svg>
    </span>
  </div>
  <!-- Vouchers App -->
  <div class="group relative rounded-tl-lg rounded-tr-lg bg-[#2A2A31] p-6 sm:rounded-tr-none">
    <div>
      <span class="inline-flex rounded-lg bg-gray-700 p-3">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" />
</svg>

      </span>
    </div>
    <div class="mt-8"><span class="mb-2 inline-flex items-center rounded-md bg-green-500/10 pr-2 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Incognitee</span> <span class="mb-2 inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">Tool</span>
      <h3 class="text-base font-semibold text-gray-100">
        <a href="#" >
          <span class="absolute inset-0" aria-hidden="true"></span>
          Vouchers
        </a>
      </h3>
      <div class="ribbon gray"><span>Soon</span></div>
      <p class="mt-2 text-sm text-gray-400">Share tokens with friends instantly by creating new vouchers-no existing wallet needed for your friend!​
      </p>
    </div>
    <span class="pointer-events-none absolute right-6 top-6 text-gray-500 group-hover:text-gray-400" aria-hidden="true">
      <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
      </svg>
    </span>
  </div>
    <!-- Incognitee Stats​ App -->
    <div class="group relative rounded-tl-lg rounded-tr-lg bg-[#2A2A31] p-6 sm:rounded-tr-none">
    <div>
      <span class="inline-flex rounded-lg bg-gray-700 p-3">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
</svg>
      </span>
    </div>
    <div class="mt-8"><span class="mb-2 inline-flex items-center rounded-md bg-green-500/10 pr-2 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Incognitee</span> <span class="mb-2 inline-flex items-center rounded-md bg-rose-500/10 px-2 py-1 text-xs font-medium text-rose-500 ring-1 ring-inset ring-rose-500/20">Data</span>
      <h3 class="text-base font-semibold text-gray-100">
        <a href="#" >
          <span class="absolute inset-0" aria-hidden="true"></span>
          Incognitee Stats​
        </a>
      </h3>
      <div class="ribbon gray"><span>Soon</span></div>
      <p class="mt-2 text-sm text-gray-400">Boost your revenue share & voting power for Incognitee’s launch on Polkadot- bond TEER now!
      </p>
    </div>
    <span class="pointer-events-none absolute right-6 top-6 text-gray-500 group-hover:text-gray-400" aria-hidden="true">
      <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
      </svg>
    </span>
  </div>
  <!-- Voting​ App -->
    <div class="group relative rounded-tl-lg rounded-tr-lg bg-[#2A2A31] p-6 sm:rounded-tr-none">
    <div>
      <span class="inline-flex rounded-lg bg-gray-700 p-3">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
</svg>
      </span>
    </div>
    <div class="mt-8"><span class="mb-2 inline-flex items-center rounded-md bg-pink-400/10 px-2 py-1 text-xs font-medium text-pink-400 ring-1 ring-inset ring-pink-400/20">Polkadot</span> <span class="mb-2 inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20">Governance</span>
      <h3 class="text-base font-semibold text-gray-100">
        <a href="#" >
          <span class="absolute inset-0" aria-hidden="true"></span>
          Voting
        </a>
      </h3>
      <div class="ribbon gray"><span>Soon</span></div>
      <p class="mt-2 text-sm text-gray-400">Start participating in Polkadot Governance without revealing your on-chain identity.​
      </p>
    </div>
    <span class="pointer-events-none absolute right-6 top-6 text-gray-500 group-hover:text-gray-400" aria-hidden="true">
      <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
      </svg>
    </span>
  </div>
   <!-- Validateer​​ App -->
   <div class="group relative rounded-tl-lg rounded-tr-lg bg-[#2A2A31] p-6 sm:rounded-tr-none">
    <div>
      <span class="inline-flex rounded-lg bg-gray-700 p-3">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
</svg>
      </span>
    </div>
    <div class="mt-8"><span class="mb-2 inline-flex items-center rounded-md bg-green-500/10 pr-2 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Incognitee</span> <span class="mb-2 inline-flex items-center rounded-md bg-lime-500/10 px-2 py-1 text-xs font-medium text-lime-400 ring-1 ring-inset ring-lime-500/20">Tech</span>
      <h3 class="text-base font-semibold text-gray-100">
        <a href="#" >
          <span class="absolute inset-0" aria-hidden="true"></span>
          Validateer 
        </a>
      </h3>
      <div class="ribbon gray"><span>Soon</span></div>
      <p class="mt-2 text-sm text-gray-400">Become a Validator and help securing the network. Checkout the tutorial and get started today.</p>
    </div>
    <span class="pointer-events-none absolute right-6 top-6 text-gray-500 group-hover:text-gray-400" aria-hidden="true">
      <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
      </svg>
    </span>
  </div>
<!-- Nomination App -->
  <div class="group relative rounded-tl-lg rounded-tr-lg bg-[#2A2A31] p-6 sm:rounded-tr-none">
    <div>
      <span class="inline-flex rounded-lg bg-gray-700 p-3">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>
      </span>
    </div>
    <div class="mt-8"><span class="mb-2 inline-flex items-center rounded-md bg-green-500/10 pr-2 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Incognitee</span> <span class="mb-2 inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20">Governance</span>
      <h3 class="text-base font-semibold text-gray-100">
        <a href="#" >
          <span class="absolute inset-0" aria-hidden="true"></span>
          Nomination
        </a>
      </h3>
      <div class="ribbon gray"><span>Soon</span></div>
      <p class="mt-2 text-sm text-gray-400">Join as a Nominator to secure the network and participate in the revenue share of Incognitee. ​</p>
    </div>
    <span class="pointer-events-none absolute right-6 top-6 text-gray-500 group-hover:text-gray-400" aria-hidden="true">
      <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
      </svg>
    </span>
  </div>
  <!-- Swap App -->
  <div class="group relative rounded-tl-lg rounded-tr-lg bg-[#2A2A31] p-6 sm:rounded-tr-none">
    <div>
      <span class="inline-flex rounded-lg bg-gray-700 p-3">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>
      </span>
    </div>
    <div class="mt-8"><span class="mb-2 inline-flex items-center rounded-md bg-green-500/10 pr-2 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Incognitee</span> <span class="mb-2 inline-flex items-center rounded-md bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-400 ring-1 ring-inset ring-cyan-500/20">DeFi</span>
      <h3 class="text-base font-semibold text-gray-100">
        <a href="#" >
          <span class="absolute inset-0" aria-hidden="true"></span>
          Swap
        </a>
      </h3>
      <div class="ribbon gray"><span>Soon</span></div>
      <p class="mt-2 text-sm text-gray-400">Swap your favorite tokens confidentially away from the the crowds' eyes.  ​</p>
    </div>
    <span class="pointer-events-none absolute right-6 top-6 text-gray-500 group-hover:text-gray-400" aria-hidden="true">
      <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
      </svg>
    </span>
  </div>
   <!-- TBD App -->
   <div class="group relative rounded-tl-lg rounded-tr-lg bg-[#2A2A31] p-6 sm:rounded-tr-none">
    <div>
      <span class="inline-flex rounded-lg bg-gray-700 p-3">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>
      </span>
    </div>
    <div class="mt-8">
      <h3 class="text-base font-semibold text-gray-100">
        <a href="#" >
          <span class="absolute inset-0" aria-hidden="true"></span>
          tbd
        </a>
      </h3>
      <div class="ribbon gray"><span>Soon</span></div>
      <p class="mt-2 text-sm text-gray-400"> ​</p>
    </div>
    <span class="pointer-events-none absolute right-6 top-6 text-gray-500 group-hover:text-gray-400" aria-hidden="true">
      <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
      </svg>
    </span>
  </div>
</div>
</div>


 

<div class="my-20"</div>
</template>

<script lang="ts" setup>
import TEER from "@/assets/img/logo-icon-white.svg";
import NetworkSelector from "@/components/ui/NetworkSelector.vue";
import TEERdays from "@/public/img/index/TEERdays-icon-white.svg";
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
  () => chainConfigs[shieldingTarget.value].faucetUrl === undefined
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
      `Shield amount exceeds the maximum allowed value of ${computedShieldingMax.value}`
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
          ])
        );
        const message = `${error.section}.${error.name}${Array.isArray(error.docs)
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
        `✅ Transaction successful with status: ${status} hash: ${txHash}`
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
    accountStore.nonce[incogniteeSidechain.value]
  );
  console.log(
    `sending ${unshieldAmount.value} from ${accountStore.getAddress} publicly (nonce:${nonce}) to ${recipientAddress.value} on L1 (shard: ${incogniteeStore.shard})`
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
      }
    )
    .then((result) =>
      handleTopResult(
        result,
        "😀 Successfully triggered unshielding process. You should see the unshielded funds appear on L1 in seconds"
      )
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
    accountStore.nonce[incogniteeSidechain.value]
  );
  console.log(
    `sending ${sendAmount.value} from ${account.address} privately to ${recipientAddress.value} with nonce ${nonce}`
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
      }
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
    accountStore.nonce[incogniteeSidechain.value]
  );
  console.log(
    `sending guess ${guess.value} from ${account.address} privately to incognitee`
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
      }
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
      "[fetchIncogniteeBalance] getter disabled. reconnect your account to enable again..."
    );
    return;
  }

  isUpdatingIncogniteeBalance.value = true;

  const injector = accountStore.hasInjector ? accountStore.injector : null;
  try {
    if (!getterMap[accountStore.account]) {
      if (injector) {
        console.debug(
          `fetching incognitee balance&nonce needs signing in extension: ${injector.name}`
        );
      }
      getterMap[accountStore.account] =
        await incogniteeStore.api.accountInfoGetter(
          accountStore.account,
          incogniteeStore.shard,
          { signer: injector?.signer }
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
        `current account info L2: ${accountInfo} on shard ${incogniteeStore.shard}`
      );
      accountStore.setBalanceFree(
        BigInt(accountInfo.data.free),
        incogniteeSidechain.value
      );
      accountStore.setNonce(
        Number(accountInfo.nonce),
        incogniteeSidechain.value
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
    incogniteeStore.shard
  );
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
        encodeAddress(winner, accountStore.getSs58Format).slice(0, 8) + "..."
      );
    }
    return winners.join("<br>");
  }
  return "no one";
});

const fetchNetworkStatus = async () => {
  const promises = [];
  if (api?.isReady) {
    const p = api.rpc.chain.getFinalizedHead().then((head) => {
      api.rpc.chain.getBlock(head).then((block) => {
        console.log(
          `finalized L1 block number, according to L1 api: ${block.block.header.number}`
        );
      });
    });
    promises.push(p);
  }
  if (!incogniteeStore.apiReady) return;
  console.debug("fetch network status info");
  const getter = incogniteeStore.api.parentchainsInfoGetter(
    incogniteeShard.value
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

const pollCounter = useInterval(2000);
watch(pollCounter, async () => {
  await fetchIncogniteeBalance();
  await fetchNetworkStatus();
});

watch(
  () => accountStore.getAddress,
  async () => await subscribeWhatsReady()
);

const subscribeWhatsReady = async () => {
  //todo! only reinitialize if account changes
  if (api?.isReady) {
    //console.log("skipping api init. It seems the ShieldingTarget api is already subscribed to balance changes");
    return;
  }

  const wsProvider = new WsProvider(chainConfigs[shieldingTarget.value].api);
  console.log(
    "trying to init api at " + chainConfigs[shieldingTarget.value].api
  );
  api = await ApiPromise.create({ provider: wsProvider });
  await api.isReady;
  accountStore.setExistentialDeposit(
    BigInt(api.consts.balances.existentialDeposit)
  );
  accountStore.setDecimals(Number(api.registry.chainDecimals));
  accountStore.setSS58Format(Number(api.registry.chainSS58));
  accountStore.setSymbol(String(api.registry.chainTokens));
  console.log(
    "api-reported genesis hash for shielding target: " +
    api.genesisHash.toHex().toString()
  );
  systemHealth.setShieldingTargetApiGenesisHashHex(
    api.genesisHash.toHex().toString()
  );

  // await is quick as we only subscribe
  await api.rpc.chain.subscribeNewHeads((lastHeader) => {
    systemHealth.observeShieldingTargetBlockNumber(
      lastHeader.number.toNumber()
    );
  });
  faucetUrl.value = chainConfigs[shieldingTarget.value].faucetUrl?.replace(
    "ADDRESS",
    accountStore.getAddress
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
  const p1 = api.query.system.account(
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
        currentFrozen
      );
      accountStore.setBalanceFree(BigInt(currentFree), shieldingTarget.value);
      accountStore.setBalanceReserved(
        BigInt(currentReserved),
        shieldingTarget.value
      );
      accountStore.setBalanceFrozen(
        BigInt(currentFrozen),
        shieldingTarget.value
      );
      isFetchingShieldingTargetBalance.value = false;
    }
  );
  promises.push(p1);
  // for quicker responsiveness we dont wait until the next regular poll, but trigger the balance fetch here
  const p2 = fetchIncogniteeBalance().then(() =>
    console.log("fetched incognitee balance")
  );
  promises.push(p2);

  await Promise.all(promises);
};
const copyOwnAddressToClipboard = () => {
  navigator.clipboard
    .writeText(accountStore.getAddress)
    .then(() =>
      alert(
        "copied your account address to clipboard. Please paste it into the address field on the faucet."
      )
    );
};

onMounted(async () => {
  checkIfMobile();
  window.addEventListener("resize", checkIfMobile);
  loadEnv();
  incogniteeStore.initializeApi(
    chainConfigs[incogniteeSidechain.value].api,
    incogniteeShard.value
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
        await injectorForAddress(accountStore.getAddress)
      );
    } catch (e) {
      console.warn("could not load injected account" + e);
      alert(
        "could not find selected address in extensions. Have you enabled your extensions?"
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
      0.1
    )
  );
});

const showMessages = ref(false);
const openMessages = () => {
  showMessages.value = true;
};
const closeMessages = () => {
  showMessages.value = false;
};

const showAssetsInfo = ref(false);
const openAssetsInfo = () => {
  showAssetsInfo.value = true;
};
const closeAssetsInfo = () => {
  showAssetsInfo.value = false;
};

const showViewMore = ref(false);
const openViewMore = () => {
  showViewMore.value = true;
};
const closeViewMore = () => {
  showViewMore.value = false;
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
    Math.min(shieldAmount.value, computedShieldingMax.value)
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
    Math.min(10, accountStore.getDecimalBalanceFree(incogniteeSidechain.value))
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
    `openPrivateSendOverlay (scanoverlay=${showScanOverlay.value})`
  );
  sendAmount.value = Math.floor(
    Math.min(
      sendAmount.value,
      accountStore.getDecimalBalanceFree(incogniteeSidechain.value) - 0.1
    )
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
    `openGuessTheNumberOverlay (scanoverlay=${showScanOverlay.value})`
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

<style>
.ribbon {
  position: absolute;
  top: 0;
  right: 0;
  width: 75px;
  height: 75px;
  overflow: hidden;
  pointer-events: none;
}

.ribbon span {
  position: absolute;
  display: block;
  width: 100px;
  padding: 0px 0;
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  transform: rotate(45deg);
  top: 9px;
  right: -33px;
}

.ribbon.red span {
  background-color: var(--integritee-red);
}

.ribbon.green span {
  background-color: var(--integritee-green);
}

.ribbon.blue span {
  background-color: var(--integritee-blue);
}

.ribbon.gray span {
  background-color: var(--integritee-gray);
}


</style>