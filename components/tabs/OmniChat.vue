<template>
<!-- Desktop Version -->
<!-- Chat History Sidebar - Now outside main container for better layering -->
<aside
  v-if="!isMobile"
  :class="[
    'fixed bg-incognitee-blue flex flex-col shadow-xl transition-all duration-300 ease-in-out',
    ' w-[280px] h-[calc(100%-50px)] border border-gray-800 rounded-lg ',
    isHistorySidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none transform -translate-x-[50px]',
    //'z-50', 
    'aside-desktop' 
  ]"
  :style="{
    left: isMediumScreen ? '10px' : '280px'
  }"
>
  <!-- Header with title and close button -->
  <div class="flex justify-between items-center px-4 py-3 border-b border-gray-700">
    <h3 class="text-sm font-medium text-white">Chat History</h3>
    <button
      @click="toggleChatHistory"
      class="text-gray-400 hover:text-white p-1.5 rounded-md hover:bg-gray-700 transition-colors focus:outline-none"
      aria-label="Close Chat history"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  <!-- Chat History List -->
  <div class="overflow-y-auto flex-1 p-4 space-y-5 sidebar-scroll">
    <!-- Chat List Component -->
    <template
      v-for="section in ['today', 'last30Days'] as const"
      :key="section"
    >
      <div v-if="props.groupedChats[section].length > 0">
        <h3 class="font-semibold mb-2 text-base-content/70">
          {{ section === "today" ? "Today" : "Last 30 Days" }}
        </h3>
        <ul class="space-y-2 px-1">
          <li
            v-for="chat in props.groupedChats[section]"
            :key="chat.id"
            :data-chat-id="chat.id"
            class="rounded-md overflow-hidden group transition-all duration-200"
          >
            <div
              class="flex items-center w-full rounded-md py-2.5 px-3 text-gray-300 cursor-pointer transition-all duration-200"
              :class="[
                'bg-opacity-80 hover:bg-gray-700',
                props.selectedChatId === chat.id || chat.id === props.currentChatId
                  ? 'bg-gradient-to-r from-[#24ad7c]/20 to-[#1845b9]/20 border-l-2 border-l-incognitee-green'
                  : 'bg-gray-800/60 hover:border-l-2 hover:border-l-gray-500',
              ]"
              @click="emit('selectChat', chat.id)"
            >
              <!-- Chat Icon -->
              <div
                class="flex items-center"
                @dblclick.stop="startRename(chat)"
              >
                <div class="text-incognitee-green p-1 bg-gray-700 rounded-full flex items-center justify-center mr-2">
                  <font-awesome-icon
                    :icon="['fas', 'comments']"
                    class="w-3 h-3"
                  />
                </div>
              </div>
              <!-- Chat Title -->
              <input
                v-if="editingChatId === chat.id"
                ref="renameInput"
                v-model="editingTitle"
                @blur="finishRename"
                @keyup.enter="finishRename"
                @keyup.esc="cancelRename"
                class="bg-transparent border-none outline-none focus:outline-none w-full max-w-[200px] text-sm text-gray-300 py-1 px-2 bg-gray-700 rounded"
                :placeholder="chat.title || 'New Chat'"
                @click.stop
              />
              <span v-else class="truncate text-sm font-medium">{{ 
                chat.title || "New Chat"
              }}</span>
              
              <!-- Action Buttons - Visible on hover/active -->
              <div class="ml-auto flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <!-- Rename Button -->
                <button
                  @click.stop="startRename(chat)"
                  class="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-gray-700 transition-colors"
                  title="Rename"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                    <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                  </svg>
                </button>
                
                <!-- More Options Button -->
                <button
                  @click.stop="openMorePopup(chat.id, $event)"
                  class="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-gray-700 transition-colors"
                  title="More"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                    <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </div>
</aside>

<!-- Desktop container with border, taking up full width except sidebar, shifts when chat history is visible -->
<div v-if="!isMobile" :class="[
  'absolute rounded-xl shadow-xl border border-gray-800 flex flex-col ',
  'h-[calc(100%-100px)]transition-all duration-300 ease-in-out','chatcontainer-desktop' 
  //'z-40' // Lower than chat history sidebar (z-50) but higher than main sidebar
]" :style="{ 
  left: isMediumScreen ? (isHistorySidebarOpen ? '290px' : '0px') : (isHistorySidebarOpen ? '290px' : '0px'),
  right: isMediumScreen ? '10px' : '5px',
  width: isMediumScreen ? (isHistorySidebarOpen ? 'calc(100% - 290px)' : 'calc(100% - 0px)') : (isHistorySidebarOpen ? 'calc(100% - 310px)' : 'calc(100% - 20px)')
}">


       <!-- Header - Always visible -->
       <div          
          class="px-4 py-3 flex justify-between items-center border-b border-gray-700"
        >
   <!-- Button for Chat History -->
            <button
              v-if="!isHistorySidebarOpen"
              @click="toggleChatHistory()"
              class="text-white p-1.5 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center"
              id="chat-history-toggle"
              aria-label="Toggle Chat History"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          <h2 class="text-sm font-bold">
            {{
              recipientValid(conversationAddress)
                ?  +
                  " " +
                  (isMobile
                    ? conversationAddress.slice(0, 10) + "..." // Mobile: Abgekürzt
                    : conversationAddress) // Desktop: Vollständige Adresse
                : "Omnichat"
            }}
          </h2>
          <button
            @click="createNewChatWithNotification"
            class="text-gray-400 rounded hover:text-white transition-colors flex items-center gap-1"
            id="conversations-new"
            aria-label="Create new chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="size-6"
            >
              <!-- Custom chat bubble shape with plus -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 20.5c4.97 0 9-3.13 9-7s-4.03-7-9-7-9 3.13-9 7c0 1.32.47 2.54 1.27 3.59L3 20.5l3.64-2.15A11.1 11.1 0 0012 20.5z"
              />
              <!-- Cleaner plus sign centered inside -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 10v6M9 13h6"
                stroke-width="1.7"
              />
            </svg>
            <span class="sr-only md:not-sr-only md:text-sm md:font-medium">New chat</span>
          </button>
        </div>
        
  <div class="flex flex-col md:flex-row flex-1 relative">
    <!-- Notification Toast -->
    <div 
      v-if="showNotification" 
      class="fixed top-4 right-4 bg-gray-800 text-gray-200 px-4 py-3 rounded-md shadow-lg flex items-center z-50 animate-fade-in-out transition-opacity duration-300 border border-gray-700"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
      {{ notificationMessage }}
    </div>
    
    <!-- Stripe Checkout Overlay -->
    <StripeCheckoutOverlay
      v-if="showStripeCheckoutOverlay"
      @close="showStripeCheckoutOverlay = false"
    />
  
    <!-- Main Content Area -->
    <main
      class=" flex-1 h-[calc(100vh-100px)] flex flex-col  pb-0 w-full overflow-scroll"
      :class="{'pr-0 md:pr-0': true}"
    >
      <!-- Chat Messages -->
      <div
        ref="chatContainer"
        class="w-[70%] max-w-full mx-auto p-2 flex-1 overflow-y-auto px-4 py-6 space-y-6 chat-container overflow-scroll"
      >
        <div
          v-for="message in props.messages"
          :key="message.content"
          class="grid mb-4" style="grid-template-columns: 1fr auto;"
        >
          <div
            :class="[
              'chat max-w-[90%] md:max-w-[95%] flex flex-col',
              message.role === 'assistant' ? 'chat-start col-start-1 items-start text-left' : 'chat-end justify-self-end col-start-2 items-end text-right',
            ]"
          >
            <!-- Role indicator -->
            <div 
              class="mb-1 px-0 text-xs opacity-75 w-full" 
              :class="message.role === 'assistant' ? 'text-emerald-400 text-left self-start' : 'text-blue-400 text-right self-end'"
            >
              {{ message.role === 'assistant' ? props.selectedProvider : 'You' }}
            </div>
            
            <div
              class="chat-bubble text-left break-words shadow-md rounded-2xl px-4 py-3 overflow-hidden min-w-[160px] max-w-full"
              :class="{
                '!message-box shadow-md bg-blue-500 text-white': message.role === 'user',
                '!message-box shadow-md bg-white text-black': message.role === 'assistant',
              }"
            >
              <div class="whitespace-pre-line break-words leading-relaxed text-base md:text-lg" style="word-break: break-all; overflow-wrap: break-word;">
                {{ message.content.replace(/\n{3,}/g, '\n\n') }}
              </div>
            </div>
            
            <!-- Date placeholder with conditional alignment -->
            <div 
              class="chat-footer text-xs text-gray-500 mt-1 w-full whitespace-nowrap"
              :class="message.role === 'assistant' ? 'text-left' : 'text-right'"
            >
              {{ "Datum Placeholder"}}
            </div>
          </div>
        
        </div>
        
        
        <!-- Empty state when no messages -->
        <div v-if="props.messages.length === 0" class="flex flex-col items-center justify-center h-full opacity-70 -mt-12">
          <div class="text-gray-400 text-center max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <h3 class="font-medium text-lg mb-2">Start a conversation</h3>
            <p class="text-sm">Type a message below to begin chatting with Incognitee</p>
          </div>
        </div>

        
      </div>
      

         

      <!-- Input Area - Positioned higher -->
      <div class="p-2 md:p-3 pb-2 mt-auto bg-opacity-50 mb-4 -mt-2">
        <div
          class="w-[70%] max-w-full mx-auto p-2 bg-gray-800 bg-opacity-60 rounded-xl flex flex-col border border-gray-700 shadow-lg hover:border-gray-600 transition-colors duration-200"
        >
          <div class="relative w-full">
            <div class="relative border border-gray-700 rounded-xl bg-gray-800 shadow-sm overflow-hidden">
              <textarea
                v-model="userInput"
                @keydown.enter.exact.prevent="sendMessage"
                @keydown.enter.shift.exact="newLine"
                class="textarea w-full text-sm input-no-focus text-gray-200 min-h-[42px] py-2.5 pl-4 pr-10 bg-transparent resize-none focus:outline-none transition-all duration-200"
                placeholder="Message Incognitee..."
                rows="1"
                :style="{ height: Math.min(120, Math.max(42, 18 * (userInput.split('\n').length + 1))) + 'px' }"
                ref="messageInput"
              ></textarea>
              
              <!-- Character limit indicator (only shows when approaching limit) -->
              <div 
                v-show="userInput.length > 1500" 
                class="absolute bottom-2 right-12 text-xs text-gray-400 opacity-80"
              >
                {{ userInput.length }}/2000
              </div>
            </div>

            <div class="flex flex-row justify-between items-center pt-1 space-x-2">
              <!-- Left side - Credits and Buy Credits -->
              <div class="flex items-center space-x-2">
                <!-- Show Credit Balance -->
                <div class="flex items-center">
                  <span class="text-xs whitespace-nowrap flex items-center">
                    <span class="w-4 h-4 mr-1 text-white inline-flex items-center justify-center opacity-80">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
                        <circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8"/><path d="M12 18V6"/>
                      </svg>
                    </span>
                    <span class="opacity-80">{{ formatCreditBalance() }}</span>
                  </span>
                </div>
                
                <!-- Buy Credits Button (MOVED to left side, after credits) -->
                <button
                  @click="showStripeCheckoutOverlay = true"
                  class="text-white hover:text-accent transition-all duration-200"
                  title="Buy Credits"
                >
                  <!-- Different icon based on device -->
                  <span class="inline-flex items-center text-xs">
                    <span class="mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3">
                        <circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/>
                      </svg>
                    </span>
                    <span>Buy</span>
                  </span>
                </button>
              </div>

              <!-- Right side buttons -->
              <div class="flex items-center space-x-2">
                <!-- Provider Selection Dropdown as Icon -->
                <div class="relative">
                  <button 
                    @click="toggleProviderMenu"
                    class="text-white hover:text-blue-400 transition-colors flex items-center justify-center"
                    :title="`Current AI: ${getProviderDisplayName()}`"
                    data-provider-button
                    :class="{
                      'hover:text-blue-400': props.selectedProvider === 'openai', 
                      'hover:text-amber-400': props.selectedProvider === 'anthropic', 
                      'hover:text-teal-400': props.selectedProvider === 'gemini'
                    }"
                  >
                    <!-- Provider icon - different for desktop vs mobile -->
                    <span v-if="!isMobile" class="hidden md:inline-flex items-center text-xs space-x-1">
                      <span class="mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
                          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/>
                        </svg>
                      </span>
                      <span>{{ getProviderDisplayName() }}</span>
                    </span>
                    <span v-else class="inline-flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
                        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/>
                      </svg>
                    </span>
                  </button>
                  
                  <!-- Provider Dropdown Menu -->
                  <div 
                    v-show="showProviderMenu" 
                    class="absolute bottom-full right-0 mb-1 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-1 z-50 w-36 provider-dropdown"
                  >
                    <button 
                      v-for="provider in providers" 
                      :key="provider.value"
                      @click="selectProvider(provider.value)"
                      class="flex items-center w-full px-3 py-1.5 text-left text-sm hover:bg-gray-700 transition-colors"
                      :class="{'bg-gray-700/50': props.selectedProvider === provider.value}"
                    >
                      <!-- Simple text icon for each provider -->
                      <span 
                        class="w-3 h-3 mr-2 inline-flex items-center justify-center" 
                        :class="provider.iconClass"
                      >
                        {{ provider.value === 'openai' ? 'O' : 
                           provider.value === 'anthropic' ? 'A' : 
                           provider.value === 'gemini' ? 'G' : 'AI' }}
                      </span>
                      {{ provider.label }}
                    </button>
                  </div>
                </div>

                <!-- Clear Chat Button - different icon based on device -->
                <button
                  @click="clearChat"
                  class="text-white hover:text-error transition-colors"
                  title="Clear Chat"
                >
                  <span v-if="!isMobile" class="hidden md:inline-flex items-center text-xs">
                    <span class="mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
                        <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>
                      </svg>
                    </span>
                    Clear
                  </span>
                  <span v-else class="inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
                      <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </span>
                </button>

                <!-- Send Button - consistent across devices -->
                <button
                  @click="sendMessage"
                  :disabled="!userInput.trim()"
                  class="text-white hover:text-incognitee-green transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
  <!-- More Options Popup -->
  <teleport to="body">
    <div
      v-if="showMorePopup && selectedChatForMore"
      id="more-popup"
      class="fixed bg-gray-800 shadow-xl rounded-lg p-2 z-50 border border-gray-700 flex flex-col gap-1 text-base-content/70"
      :style="{
        top: `${popupPosition.top}px`,
        left: `${popupPosition.left}px`,
      }"
    >
      <button
        @click.stop="
          () => {
            const chat =
              props.groupedChats.today.find(
                (c) => c.id === selectedChatForMore,
              ) ||
              props.groupedChats.last30Days.find(
                (c) => c.id === selectedChatForMore,
              ) ||
              Object.values(props.groupedChats.byMonth)
                .flat()
                .find((c) => c.id === selectedChatForMore);
            if (chat) {
              startRename(chat);
              closeMorePopup();
            }
          }
        "
        class="btn btn-ghost btn-sm justify-start"
        title="Rename Chat"
      >
        <font-awesome-icon :icon="['fa', 'pen']" class="mr-2" />
        Rename
      </button>
      <button
        @click.stop="
          emit('shareChat', selectedChatForMore);
          closeMorePopup();
        "
        class="btn btn-ghost btn-sm justify-start"
        title="Share Chat"
      >
        <font-awesome-icon :icon="['fa', 'share']" class="mr-2" />
        Share
      </button>
      <button
        @click.stop="
          emit('archiveChat', selectedChatForMore);
          closeMorePopup();
        "
        class="btn btn-ghost btn-sm justify-start"
        title="Archive Chat"
      >
        <font-awesome-icon :icon="['fa', 'box-archive']" class="mr-2" />
        Archive
      </button>
      <button
        @click.stop="
          emit('deleteChat', selectedChatForMore);
          closeMorePopup();
        "
        class="btn btn-ghost btn-sm justify-start text-error"
        title="Delete Chat"
      >
        <font-awesome-icon :icon="['fa', 'trash-can']" class="mr-2" />
        Delete
      </button>
    </div>
  </teleport>
  
<!-- Mobile Version -->
<!-- Mobile Chat History Sidebar - Shows when isHistorySidebarOpen is true -->
<aside
  v-if="isMobile"
  :class="[
    'fixed bg-incognitee-blue flex flex-col shadow-xl transition-all duration-300 ease-in-out',
    'left-0 right-0 bottom-0 h-[80vh] rounded-t-xl border-t border-gray-800 ',
    isHistorySidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none transform translate-y-full',
    'z-50', 
    'history-sidebar'
  ]"
>
  <!-- Pull indicator for better UX -->
  <div class="flex justify-center items-center pt-2 pb-1">
    <div class="w-12 h-1 bg-gray-600 rounded-full"></div>
  </div>
  
  <!-- Header with title and close button -->
  <div class="flex justify-between items-center px-4 py-3 border-b border-gray-700">
    <h3 class="text-sm font-medium text-white">Chat History</h3>
    <!-- Close Button -->
    <button
      @click="toggleChatHistory()"
      class="text-gray-400 hover:text-white p-1.5 rounded-md hover:bg-gray-700 transition-colors focus:outline-none"
      aria-label="Close Chat History"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  <!-- Chat History List -->
  <div class="overflow-y-auto flex-1 p-4 space-y-5 sidebar-scroll">
    <!-- Chat List Component -->
    <template
      v-for="section in ['today', 'last30Days'] as const"
      :key="section"
    >
      <div v-if="props.groupedChats[section].length > 0">
        <h3 class="font-semibold mb-2 text-base-content/70">
          {{ section === "today" ? "Today" : "Last 30 Days" }}
        </h3>
        <ul class="space-y-2 px-1">
          <li
            v-for="chat in props.groupedChats[section]"
            :key="chat.id"
            :data-chat-id="chat.id"
            class="rounded-md overflow-hidden group transition-all duration-200"
          >
            <div
              class="flex items-center w-full rounded-md py-2.5 px-3 text-gray-300 cursor-pointer transition-all duration-200"
              :class="[
                'bg-opacity-80 hover:bg-gray-700',
                props.selectedChatId === chat.id || chat.id === props.currentChatId
                  ? 'bg-gradient-to-r from-[#24ad7c]/20 to-[#1845b9]/20 border-l-2 border-l-incognitee-green'
                  : 'bg-gray-800/60 hover:border-l-2 hover:border-l-gray-500',
              ]"
              @click="emit('selectChat', chat.id)"
            >
              <!-- Chat Icon -->
              <div
                class="flex items-center"
                @dblclick.stop="startRename(chat)"
              >
                <div class="text-incognitee-green p-1 bg-gray-700 rounded-full flex items-center justify-center mr-2">
                  <font-awesome-icon
                    :icon="['fas', 'comments']"
                    class="w-3 h-3"
                  />
                </div>
              </div>
              <!-- Chat Title -->
              <input
                v-if="editingChatId === chat.id"
                ref="renameInput"
                v-model="editingTitle"
                @blur="finishRename"
                @keyup.enter="finishRename"
                @keyup.esc="cancelRename"
                class="bg-transparent border-none outline-none focus:outline-none w-full max-w-[200px] text-sm text-gray-300 py-1 px-2 bg-gray-700 rounded"
                :placeholder="chat.title || 'New Chat'"
                @click.stop
              />
              <span v-else class="truncate text-sm font-medium">{{ 
                chat.title || "New Chat"
              }}</span>
              
              <!-- Action Buttons - Visible on hover/active -->
              <div class="ml-auto flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <!-- Rename Button -->
                <button
                  @click.stop="startRename(chat)"
                  class="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-gray-700 transition-colors"
                  title="Rename"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                    <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                  </svg>
                </button>
                
                <!-- More Options Button -->
                <button
                  @click.stop="openMorePopup(chat.id, $event)"
                  class="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-gray-700 transition-colors"
                  title="More"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                    <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </div>
</aside>

<!-- Mobile container that takes full width of screen with improved safe areas -->
<div v-if="isMobile" :class="[
  'fixed inset-0 flex flex-col bg-incognitee-blu',
  'transition-all duration-300 ease-in-out pt-safe pb-safe'
]">

       <!-- Header - Always visible -->
       <div          
          class="px-1 pt-[50px] pb-[20px] flex justify-between items-center border-b border-gray-700"
        >
          <div class="flex items-center space-x-3">
            <!-- Button for Chat History -->
            <button
              
              @click="toggleChatHistory()"
              class="text-white p-0 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center"
              id="chat-history-toggle"
              aria-label="Toggle Chat History"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>

    

          <h2 class="text-sm font-bold">
            {{
              recipientValid(conversationAddress)
                ?  +
                  " " +
                  (isMobile
                    ? conversationAddress.slice(0, 10) + "..." // Mobile: Abgekürzt
                    : conversationAddress) // Desktop: Vollständige Adresse
                : "Omnichat"
            }}
          </h2>
          <button
            @click="createNewChatWithNotification"
            class="text-gray-400 rounded hover:text-white transition-colors flex items-center gap-1"
            id="conversations-new"
            aria-label="Create new chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="size-6"
            >
              <!-- Custom chat bubble shape with plus -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 20.5c4.97 0 9-3.13 9-7s-4.03-7-9-7-9 3.13-9 7c0 1.32.47 2.54 1.27 3.59L3 20.5l3.64-2.15A11.1 11.1 0 0012 20.5z"
              />
              <!-- Cleaner plus sign centered inside -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 10v6M9 13h6"
                stroke-width="1.7"
              />
            </svg>
            <span class="sr-only md:not-sr-only md:text-sm md:font-medium">New chat</span>
          </button>
        </div>
        
  <div class="flex flex-col md:flex-row flex-1 overflow-hidden relative">
    <!-- Notification Toast -->
    <div 
      v-if="showNotification" 
      class="fixed top-4 right-4 bg-gray-800 text-gray-200 px-4 py-3 rounded-md shadow-lg flex items-center z-50 animate-fade-in-out transition-opacity duration-300 border border-gray-700"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
      {{ notificationMessage }}
    </div>
    
    <!-- Stripe Checkout Overlay -->
    <StripeCheckoutOverlay
      v-if="showStripeCheckoutOverlay"
      @close="showStripeCheckoutOverlay = false"
    />
    <!-- Removed horizontal Menu button for mobile since we have a full mobile view -->





    <!-- Main Content Area -->
    <main
      class="flex-1 h-[calc(100vh-6rem)] flex flex-col pb-0 w-full"
      :class="{'pr-0 md:pr-0': true}"
    >
      <!-- Chat Messages -->
      <div
        ref="chatContainer"
        class="flex-1 overflow-y-auto px-4 py-6 space-y-6 chat-container"
      >
        <div
          v-for="message in props.messages"
          :key="message.content"
          class="grid mb-4" style="grid-template-columns: 1fr auto;"
        >
          <div
            :class="[
              'chat max-w-[90%] md:max-w-[95%] flex flex-col',
              message.role === 'assistant' ? 'chat-start col-start-1 items-start text-left' : 'chat-end justify-self-end col-start-2 items-end text-right',
            ]"
          >
            <!-- Role indicator -->
            <div 
              class="mb-1 px-0 text-xs opacity-75 w-full" 
              :class="message.role === 'assistant' ? 'text-emerald-400 text-left self-start' : 'text-blue-400 text-right self-end'"
            >
              {{ message.role === 'assistant' ? props.selectedProvider : 'You' }}
            </div>
            
            <div
              class="chat-bubble  text-left break-words shadow-md rounded-2xl px-4 py-3 overflow-hidden min-w-[160px] max-w-full"
              :class="{
                '!message-box shadow-md bg-blue-500 text-white': message.role === 'user',
                '!message-box shadow-md bg-white text-black': message.role === 'assistant',
              }"
            >
              <div class="whitespace-pre-line break-words leading-relaxed text-base md:text-lg" style="word-break: break-all; overflow-wrap: break-word;">
                {{ message.content.replace(/\n{3,}/g, '\n\n') }}
              </div>
            </div>
            
            <!-- Date placeholder with conditional alignment -->
            <div 
              class="chat-footer text-xs text-gray-500 mt-1 w-full whitespace-nowrap"
              :class="message.role === 'assistant' ? 'text-left' : 'text-right'"
            >
              {{ "Datum Placeholder Mobil"}}
            </div>
          </div>
        </div>
        
        <!-- Empty state when no messages -->
        <div v-if="props.messages.length === 0" class="flex flex-col items-center justify-center h-full opacity-70 -mt-12">
          <div class="text-gray-400 text-center max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <h3 class="font-medium text-lg mb-2">Start a conversation</h3>
            <p class="text-sm">Type a message below to begin chatting with Incognitee</p>
          </div>
        </div>
      </div>

         

      <!-- Input Area - Positioned higher -->
      <div class="p-2 md:p-3 pb-2 mt-auto bg-opacity-50 mb-4 -mt-2">
        <div
          class="w-[100%] max-w-full mx-auto p-2 bg-gray-800 bg-opacity-60 rounded-xl flex flex-col border border-gray-700 shadow-lg hover:border-gray-600 transition-colors duration-200"
        >
          <div class="relative w-full">
            <div class="relative border border-gray-700 rounded-xl bg-gray-800 shadow-sm overflow-hidden">
              <textarea
                v-model="userInput"
                @keydown.enter.exact.prevent="sendMessage"
                @keydown.enter.shift.exact="newLine"
                class="textarea w-full text-sm input-no-focus text-gray-200 min-h-[42px] py-2.5 pl-4 pr-10 bg-transparent resize-none focus:outline-none transition-all duration-200"
                placeholder="Message Incognitee..."
                rows="1"
                :style="{ height: Math.min(120, Math.max(42, 18 * (userInput.split('\n').length + 1))) + 'px' }"
                ref="messageInput"
              ></textarea>
              
              <!-- Character limit indicator (only shows when approaching limit) -->
              <div 
                v-show="userInput.length > 1500" 
                class="absolute bottom-2 right-12 text-xs text-gray-400 opacity-80"
              >
                {{ userInput.length }}/2000
              </div>
            </div>

            <div class="flex flex-row justify-between items-center pt-1 space-x-2">
              <!-- Left side - Credits and Buy Credits -->
              <div class="flex items-center space-x-2">
                <!-- Show Credit Balance -->
                <div class="flex items-center">
                  <span class="text-xs whitespace-nowrap flex items-center">
                    <span class="w-4 h-4 mr-1 text-white inline-flex items-center justify-center opacity-80">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
                        <circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8"/><path d="M12 18V6"/>
                      </svg>
                    </span>
                    <span class="opacity-80">{{ formatCreditBalance() }}</span>
                  </span>
                </div>
                
                <!-- Buy Credits Button (MOVED to left side, after credits) -->
                <button
                  @click="showStripeCheckoutOverlay = true"
                  class="text-white hover:text-accent transition-all duration-200"
                  title="Buy Credits"
                >
                  <!-- Different icon based on device -->
                  <span class="inline-flex items-center text-xs">
                    <span class="mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3">
                        <circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/>
                      </svg>
                    </span>
                    <span>Buy</span>
                  </span>
                </button>
              </div>

              <!-- Right side buttons -->
              <div class="flex items-center space-x-2">
                <!-- Provider Selection Dropdown as Icon -->
                <div class="relative">
                  <button 
                    @click="toggleProviderMenu"
                    class="text-white hover:text-blue-400 transition-colors flex items-center justify-center"
                    :title="`Current AI: ${getProviderDisplayName()}`"
                    data-provider-button
                    :class="{
                      'hover:text-blue-400': props.selectedProvider === 'openai', 
                      'hover:text-amber-400': props.selectedProvider === 'anthropic', 
                      'hover:text-teal-400': props.selectedProvider === 'gemini'
                    }"
                  >
                    <!-- Provider icon - different for desktop vs mobile -->
                    <span v-if="!isMobile" class="hidden md:inline-flex items-center text-xs space-x-1">
                      <span class="mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
                          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/>
                        </svg>
                      </span>
                      <span>{{ getProviderDisplayName() }}</span>
                    </span>
                    <span v-else class="inline-flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
                        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/>
                      </svg>
                    </span>
                  </button>
                  
                  <!-- Provider Dropdown Menu -->
                  <div 
                    v-show="showProviderMenu" 
                    class="absolute bottom-full right-0 mb-1 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-1 z-50 w-36 provider-dropdown"
                  >
                    <button 
                      v-for="provider in providers" 
                      :key="provider.value"
                      @click="selectProvider(provider.value)"
                      class="flex items-center w-full px-3 py-1.5 text-left text-sm hover:bg-gray-700 transition-colors"
                      :class="{'bg-gray-700/50': props.selectedProvider === provider.value}"
                    >
                      <!-- Simple text icon for each provider -->
                      <span 
                        class="w-3 h-3 mr-2 inline-flex items-center justify-center" 
                        :class="provider.iconClass"
                      >
                        {{ provider.value === 'openai' ? 'O' : 
                           provider.value === 'anthropic' ? 'A' : 
                           provider.value === 'gemini' ? 'G' : 'AI' }}
                      </span>
                      {{ provider.label }}
                    </button>
                  </div>
                </div>

                <!-- Clear Chat Button - different icon based on device -->
                <button
                  @click="clearChat"
                  class="text-white hover:text-error transition-colors"
                  title="Clear Chat"
                >
                  <span v-if="!isMobile" class="hidden md:inline-flex items-center text-xs">
                    <span class="mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
                        <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>
                      </svg>
                    </span>
                    Clear
                  </span>
                  <span v-else class="inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
                      <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </span>
                </button>

                <!-- Send Button - consistent across devices -->
                <button
                  @click="sendMessage"
                  :disabled="!userInput.trim()"
                  class="text-white hover:text-incognitee-green transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>

</template>

<script setup lang="ts">

import StripeCheckoutOverlay from "@/components/overlays/StripeCheckoutOverlay.vue";
import {  nextTick} from "vue";
import { shieldingTargetChainAssetId } from "@/lib/environmentConfig";
import { eventBus } from "@/helpers/eventBus";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useAccount } from "~/store/account";
import { useIncognitee } from "~/store/incognitee";
import OverlayDialog from "~/components/overlays/OverlayDialog.vue";
import { QrcodeStream } from "vue-qrcode-reader";
import { useInterval } from "@vueuse/core";
import { decodeAddress, encodeAddress } from "@polkadot/util-crypto";
import { useResponsive } from '@/helpers/useResponsive';

const { isMobile, isMediumScreen, isSidebarOpen } = useResponsive()

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  
}

interface ChatHistoryItem {
  id: string;
  title: string;
  messages: ChatMessage[];
  provider: string;
  createdAt: Date;
  lastInteraction: Date;
  archived?: boolean;
}

// Props
const props = defineProps<{
  messages: ChatMessage[];
  chatHistory: ChatHistoryItem[];
  currentChatId: string | null;
  selectedChatId?: string | null;
  selectedProvider: string;
  showSettings: boolean;
  groupedChats: {
    today: ChatHistoryItem[];
    last30Days: ChatHistoryItem[];
    byMonth: Record<string, ChatHistoryItem[]>;
  };
}>();

const conversationAddress = ref("");

const maybeUsername = (address: string) => {
  const pdotAddress = encodeAddress(address, 0);
  //const entry = identityLut.find((entry) => entry.address === pdotAddress);
  //return entry?.username;
};

const closeChat = () => {
  //showChatDetail.value = false;
};

// Emits
const emit = defineEmits<{
  "update:selectedProvider": [value: string];
  "update:showSettings": [value: boolean];
  "update:temperature": [value: number];
  send: [message: string];
  createNewChat: [];
  deleteChat: [chatId: string];
  archiveChat: [chatId: string];
  shareChat: [chatId: string];
  renameChat: [chatId: string, newTitle: string];
  selectChat: [chatId: string];
  clear: [];
}>();

// Initialize account store
const accountStore = useAccount();

// Local state (only UI-related)
const userInput = ref("");
const chatContainer = ref<HTMLDivElement | null>(null);
const editingChatId = ref<string | null>(null);
const editingTitle = ref("");
const renameInput = ref<HTMLInputElement | null>(null);
const showMorePopup = ref(false);
const selectedChatForMore = ref<string | null>(null);
const popupPosition = ref({ top: 0, left: 0 });
const showStripeCheckoutOverlay = ref(false);
const isHistorySidebarOpen = ref(false); // Always start with history sidebar closed on refresh


const showProviderMenu = ref(false);
const showNotification = ref(false);
const notificationMessage = ref('New chat created!');

// Use lifecycle hooks at the top level per Vue best practices
onMounted(() => {
  
  // Set up event bus listeners
  eventBus.on('toggleChatHistory', toggleChatHistory);

  // Initialize with hash navigation if present
  const hash = window.location.hash;
  if (hash && hash.startsWith('#/c/')) {
    const address = hash.replace('#/c/', '');
    if (address) {
      selectAddress(address);
    }
  }
});

onUnmounted(() => {
  eventBus.off('toggleChatHistory', toggleChatHistory);
});

// Provider options configuration
const providers = [
  { 
    label: "OpenAI", 
    value: "openai", 
    icon: ["fab", "square"], 
    iconClass: "text-blue-400" 
  },
  { 
    label: "Gemini", 
    value: "gemini", 
    icon: ["fab", "google"], 
    iconClass: "text-teal-400" 
  },
  { 
    label: "Anthropic", 
    value: "anthropic", 
    icon: ["fas", "a"], 
    iconClass: "text-amber-400" 
  },
];

// Format utilities
const formatDate = (date: Date) => {
  return new Date(date).toLocaleTimeString("default", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatDateFull = (date: Date) => {
  return new Date(date).toLocaleDateString("default", {
    month: "short",
    day: "numeric",
  });
};

// UI Methods
const sendMessage = () => {
  if (!userInput.value.trim()) return;
  emit("send", userInput.value.trim());
  userInput.value = "";
};

const clearChat = () => emit("clear");
const newLine = () => (userInput.value += "\n");

// Provider selection methods
const toggleProviderMenu = () => {
  // Force toggle the menu visibility
  showProviderMenu.value = !showProviderMenu.value;
  console.log('Provider menu toggled:', showProviderMenu.value); // Debug log
  
  if (showProviderMenu.value) {
    // Add click outside listener after a slight delay to ensure proper event handling
    nextTick(() => {
      // Remove any existing listeners first to avoid duplicates
      document.removeEventListener("click", closeProviderMenuOnClickOutside);
      // Add the listener with a slight delay
      setTimeout(() => {
        document.addEventListener("click", closeProviderMenuOnClickOutside);
      }, 100);
    });
  }
};

const closeProviderMenuOnClickOutside = (event: MouseEvent) => {
  const menu = document.querySelector(".provider-dropdown");
  if (menu && !menu.contains(event.target as Node)) {
    showProviderMenu.value = false;
    document.removeEventListener("click", closeProviderMenuOnClickOutside);
  }
};

const selectProvider = (providerValue: string) => {
  emit("update:selectedProvider", providerValue);
  showProviderMenu.value = false;
  document.removeEventListener("click", closeProviderMenuOnClickOutside);
};

const getProviderDisplayName = () => {
  const provider = providers.find(p => p.value === props.selectedProvider);
  return provider ? provider.label : "OpenAI";
};

const selectAddress = (address: string) => {
  conversationAddress.value = encodeAddress(
    address,
    accountStore.getSs58Format,
  );
  //closeNewRecipientOverlay();
};

const recipientValid = (recipient: string): boolean => {
  try {
    decodeAddress(recipient);
    return true;
  } catch (error) {
    return false;
  }
};

const getProviderIcon = () => {
  switch (props.selectedProvider) {
    case "openai":
      return ["fab", "square"];
    case "gemini":
      return ["fab", "google"];
    case "anthropic":
      return ["fas", "a"];
    default:
      return ["fab", "square"];
  }
};

// Format credit balance from account store
const formatCreditBalance = () => {
  // Use the account store's getDecimalBalanceTransferable method with the proper ChainAssetId object
  const balance = accountStore.getDecimalBalanceTransferable(
    shieldingTargetChainAssetId.value,
  );

  // Round to integer (no decimals)
  return Math.floor(balance).toString();
};

// More popup methods
const openMorePopup = (chatId: string, event: MouseEvent) => {
  selectedChatForMore.value = chatId;
  showMorePopup.value = true;

  // Position the popup near the clicked button
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();

  // Use fixed positioning relative to viewport
  popupPosition.value = {
    top: rect.top,
    left: rect.right + 5, // Position to the right with small gap
  };

  // Close popup when clicking outside and update position when scrolling
  nextTick(() => {
    document.addEventListener("click", closeMorePopupOnClickOutside);

    // Add scroll event listener to the scrollable container
    const scrollContainer = document.querySelector(".sidebar-scroll");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updatePopupPosition);
      console.log("Added scroll listener to sidebar-scroll");
    }

    // Also listen for window scroll/resize for better positioning
    window.addEventListener("scroll", updatePopupPosition, true);
    window.addEventListener("resize", updatePopupPosition);

    // Initial position update
    updatePopupPosition();
  });
};

const closeMorePopup = () => {
  showMorePopup.value = false;
  selectedChatForMore.value = null;
  document.removeEventListener("click", closeMorePopupOnClickOutside);

  // Remove all event listeners
  const scrollContainer = document.querySelector(".sidebar-scroll");
  if (scrollContainer) {
    scrollContainer.removeEventListener("scroll", updatePopupPosition);
  }

  window.removeEventListener("scroll", updatePopupPosition, true);
  window.removeEventListener("resize", updatePopupPosition);
};

const closeMorePopupOnClickOutside = (event: MouseEvent) => {
  const popup = document.getElementById("more-popup");
  if (popup && !popup.contains(event.target as Node)) {
    closeMorePopup();
  }
};

// Update popup position when sidebar scrolls
const updatePopupPosition = () => {
  if (showMorePopup.value && selectedChatForMore.value) {
    // Find the chat item by ID
    const chatItem = document.querySelector(
      `li[data-chat-id="${selectedChatForMore.value}"]`,
    );
    if (!chatItem) return;

    // Find the more button within that chat item
    const moreButton = chatItem.querySelector('button[title="More"]');
    if (!moreButton) return;

    // Get button position
    const rect = moreButton.getBoundingClientRect();

    // Check if button is visible in viewport
    const isVisible = rect.top > 0 && rect.bottom < window.innerHeight;

    if (!isVisible) {
      // If button scrolled out of view, hide popup
      closeMorePopup();
      return;
    }

    // Update popup position to match button position
    popupPosition.value = {
      top: rect.top,
      left: rect.right + 5,
    };

    // Ensure popup stays within viewport
    const popup = document.getElementById("more-popup");
    if (popup) {
      const popupRect = popup.getBoundingClientRect();

      // Adjust if popup would go off-screen
      if (popupRect.right > window.innerWidth) {
        popupPosition.value.left = rect.left - popupRect.width - 5;
      }

      if (popupRect.bottom > window.innerHeight) {
        popupPosition.value.top = window.innerHeight - popupRect.height - 10;
      }
    }
  }
};

// Chat rename methods
const startRename = (chat: ChatHistoryItem) => {
  editingChatId.value = chat.id;
  editingTitle.value = chat.title || "New Chat";
  nextTick(() => {
    if (renameInput.value) {
      renameInput.value.focus();
      renameInput.value.select();
    }
  });
};

const finishRename = () => {
  if (editingChatId.value && editingTitle.value.trim()) {
    emit("renameChat", editingChatId.value, editingTitle.value.trim());
  }
  editingChatId.value = null;
  editingTitle.value = "";
};

const cancelRename = () => {
  editingChatId.value = null;
  editingTitle.value = "";
};

// Auto-scroll chat
watch(
  () => props.messages.length,
  () => {
    nextTick(() => {
      if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
      }
    });
  },
);

// Check for screen size and handle resize events
const checkIfMobile = () => {
  const wasMobile = isMobile.value;
  const wasMedium = isMediumScreen.value;
  
  // Update screen size states
  isMobile.value = window.innerWidth < 768; // md breakpoint
  isMediumScreen.value = window.innerWidth >= 768 && window.innerWidth < 1024; // between md and lg
  
  // When switching between screen sizes, adjust sidebar visibility appropriately
  if (wasMobile && !isMobile.value) {
    // Switched from mobile to larger screen
    if (isMediumScreen.value) {
      // If now in medium screen range, hide main sidebar
      isSidebarOpen.value = false;
    } else {
      // If now in large screen range, show sidebar
      isSidebarOpen.value = true;
    }
  } else if (!wasMobile && isMobile.value) {
    // Switched from larger screen to mobile, initially hide sidebar
    isSidebarOpen.value = false;
  }
  
  // Handle transitions between medium and large screens
  if (!wasMedium && isMediumScreen.value) {
    // Just entered medium screen range
    isSidebarOpen.value = false; // Hide main sidebar on medium screens
  } else if (wasMedium && !isMediumScreen.value && !isMobile.value) {
    // Just left medium screen range to large screen
    isSidebarOpen.value = true; // Show main sidebar on large screens
  }
};

// Toggle for main navigation sidebar (mobile)  
const toggleSidebar = () => {
  // Toggle the main sidebar state
  isSidebarOpen.value = !isSidebarOpen.value;
  
  // If we're opening the main sidebar, close the history sidebar for better UX
  if (isSidebarOpen.value && isHistorySidebarOpen.value) {
    isHistorySidebarOpen.value = false;
  }
  
  console.log('Main sidebar toggled:', isSidebarOpen.value);
};


// Toggle chat history - works for both mobile and desktop
const toggleChatHistory = () => {
    // Toggle history sidebar
    isHistorySidebarOpen.value = !isHistorySidebarOpen.value;

    // If we're opening the history sidebar, close the main sidebar
    if (isHistorySidebarOpen.value && isSidebarOpen.value) {
      isSidebarOpen.value = false;
    }

    // Apply transition effect based on mobile or desktop
    const historySidebar = document.querySelector('aside.aside-desktop') as HTMLElement;
    const mainContainer = document.querySelector('.z-40') as HTMLElement;
    
    if (historySidebar) {
      if (isMobile.value) {
        // For mobile: bottom slide animation
        historySidebar.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
      } else {
        // For desktop: side slide animation
        historySidebar.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
        
        // Ensure proper z-index when sidebar is open/closed
        if (isHistorySidebarOpen.value) {
          // Give time for transition to complete
          setTimeout(() => {
            if (mainContainer) mainContainer.style.zIndex = '30';
          }, 50);
        } else {
          if (mainContainer) mainContainer.style.zIndex = '40';
        }
      }
    }
    
    console.log('History sidebar toggled:', isHistorySidebarOpen.value);
};

// Function to create a new chat with notification
const createNewChatWithNotification = () => {
  // Check if the current chat is empty
  const currentChat = getCurrentChat();
  
  if (!currentChat || hasMessages(currentChat)) {
    // Create new chat only if there's no current chat or current chat has messages
    emit('createNewChat');
    showNotification.value = true;
    notificationMessage.value = 'New chat created!';
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      showNotification.value = false;
    }, 3000);
  } else {
    // Show notification that we're using the existing empty chat
    showNotification.value = true;
    notificationMessage.value = 'Using existing empty chat';
    
    setTimeout(() => {
      showNotification.value = false;
    }, 3000);
  }
};

// Helper function to get the current chat
const getCurrentChat = () => {
  if (!props.currentChatId) return null;
  
  // Look through all chat groups to find the current chat
  return [
    ...props.groupedChats.today,
    ...props.groupedChats.last30Days,
    ...(props.groupedChats.byMonth ? 
      Object.values(props.groupedChats.byMonth).flat() : [])
  ].find(chat => chat.id === props.currentChatId);
};

// Helper function to check if a chat has messages
const hasMessages = (chat: ChatHistoryItem | null) => {
  return chat && chat.messages && chat.messages.length > 0;
};

onMounted(() => {
  // Initialize screen size states
  checkIfMobile();
  // If in medium screen range initially, ensure main sidebar is hidden
  if (isMediumScreen.value) {
    isSidebarOpen.value = false;
  }
  window.addEventListener('resize', checkIfMobile);
  
  // No listener for toggleSidebar to prevent double toggle effect
  
  // Close provider menu when clicking outside
  document.addEventListener('click', (event) => {
    if (showProviderMenu.value) {
      const target = event.target as HTMLElement;
      const menu = document.querySelector('.provider-dropdown');
      const button = document.querySelector('[data-provider-button]');
      if (menu && button && !menu.contains(target) && !button.contains(target)) {
        showProviderMenu.value = false;
      }
    }
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', checkIfMobile);
  document.removeEventListener('click', closeProviderMenuOnClickOutside);
});
</script>

<style scoped>
:root {
  --subtle-gray: rgb(31, 41, 55);
}

.chatcontainer-desktop {
  margin-bottom: 50px;
}

/* Global font size for the component */
.flex.flex-col.md\:flex-row.flex-1.overflow-hidden {
  font-size: 14px;
}

.input-border {
  border-color: var(--subtle-gray);
}

/* Notification animations */
@keyframes fadeInOut {
  0% { opacity: 0; transform: translateY(-10px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-10px); }
}

.animate-fade-in-out {
  animation: fadeInOut 3s ease-in-out;
}

.chat-container {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

.chat-container:hover {
  scrollbar-color: var(--subtle-gray) transparent;
}

.chat-container::-webkit-scrollbar {
  width: 6px;
}

.chat-container::-webkit-scrollbar-track {
  background: transparent;
}

.chat-container::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 3px;
}

.chat-container:hover::-webkit-scrollbar-thumb {
  background-color: var(--subtle-gray);
}

.sidebar-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(113, 128, 150, 0.4) transparent;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  overscroll-behavior-y: contain; /* Prevents scroll chaining */
}

.sidebar-scroll::-webkit-scrollbar {
  width: 4px;
}

.sidebar-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(113, 128, 150, 0.4);
  border-radius: 20px;
  border: transparent;
}

.sidebar-scroll::-webkit-scrollbar-thumb:hover {
  background-color: rgba(113, 128, 150, 0.6);
}

.chat-start .chat-bubble {
  border-top-left-radius: 0;
}

.chat-end .chat-bubble {
  border-top-right-radius: 0;
}

/* Added styles from MessagingTab */
.chat-header {
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  opacity: 0.75;
}

.message-box {
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

.chat-footer {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #6b7280;
  opacity: 0.75;
}

.dropdown-content {
  z-index: 1000;
}

.clear-chat-btn {
  min-height: 0;
}

.input-no-focus {
  --tw-ring-shadow: 0 0 #000 !important;
  outline: none;
  border: none;
  border-radius: 0;
  box-shadow: none !important;
  background-color: transparent;
  color: white;
}

.btn_gradient {
  background: linear-gradient(90deg, #1845b9 -0.35%, #24ad7c 99.97%);
  border: 0px;
}

/* Add smooth transition for all interactive elements */
button, a, input, select, textarea {
  transition: all 0.2s ease;
}

/* Prevent content jumping when scrollbars appear/disappear */
html {
  scrollbar-gutter: stable;
}

@media (max-width: 640px) {
  /* Improve touch targets on mobile */
  button, a, input, select {
    min-height: 44px;
  }
  
  /* Optimize spacing for mobile */
  .chat-container {
    padding-bottom: 16px;
  }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .chat-bubble {
    max-width: 85% !important;
    padding: 0.75rem !important;
  }

  textarea.textarea {
    min-height: 2.5rem;
  }

  /* Ensure popups stay within viewport */
  #more-popup {
    max-width: 90vw;
    transform: translateX(-50%);
    left: 50% !important;
  }
}

/* Clear chat button hover gradient effect */
.clear-chat-wrapper {
  display: inline-block;
}

.clear-chat-btn:hover .clear-chat-wrapper {
  background: linear-gradient(84.58deg, #24ad7c 0%, #1845b9 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.clear-chat-btn:hover .clear-chat-wrapper svg {
  color: transparent;
}

/* Remove focus border from textarea */
.input-no-focus {
  outline: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
}

/* Chat message styling matching MessagingTab */
.chat-header {
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  opacity: 0.75;
}

.message-box {
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

/* Modified chat bubbles */
.mb-1.px-0.text-xs.opacity-75.w-full {
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .chat-container {
    padding: 0.75rem !important;
  }
  
  .chat-bubble {
    padding: 0.75rem !important;
    max-width: 95% !important;
  }
  
  /* Improved touch targets */
  button {
    min-height: 40px;
    min-width: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Safe area insets */
  .pt-safe {
    padding-top: env(safe-area-inset-top, 0);
  }
  
  .pb-safe {
    padding-bottom: env(safe-area-inset-bottom, 0);
  }
}


</style>
