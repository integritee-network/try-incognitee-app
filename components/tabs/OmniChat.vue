<template>
  <div class="flex flex-1 overflow-hidden">
    <!-- Stripe Checkout Overlay -->
    <StripeCheckoutOverlay v-if="showStripeCheckoutOverlay" @close="showStripeCheckoutOverlay = false" />
    <!-- Chat History Sidebar -->
    <aside class="w-[260px] bg-gray-800 flex flex-col shadow-lg rounded-md h-[calc(100vh-6rem)]">
      <div class="border-b border-base-300 p-4">
        <button class="btn btn_gradient inline-flex w-full justify-center rounded-md text-sm font-semibold text-white shadow-sm h-8 min-h-0 py-0" @click="$emit('createNewChat')">
          New Chat
        </button>
      </div>

      <!-- Chat History List -->
      <div class="overflow-y-auto flex-1 p-4 space-y-4 sidebar-scroll">
        <!-- Chat List Component -->
        <template v-for="section in ['today', 'last30Days'] as const" :key="section">
          <div v-if="props.groupedChats[section].length > 0">
            <h3 class="font-semibold mb-2 text-base-content/70">
              {{ section === 'today' ? 'Today' : 'Last 30 Days' }}
            </h3>
            <ul class="space-y-1 px-0.5">
              <li v-for="chat in props.groupedChats[section]" 
                  :key="chat.id" 
                  :data-chat-id="chat.id"
                  class="rounded-lg overflow-hidden">
                <div class="flex items-center w-full rounded-md border border-gray-800 bg-gray-800 py-1.5 px-3 text-gray-400 hover:border-incognitee-green hover:bg-gray-700 focus-within:border-incognitee-green cursor-pointer my-1 text-[14px]"
                     :class="[
                       props.selectedChatId === chat.id ? 'ring-1 border border-blue-500' : '',
                       chat.id === props.currentChatId ? 'ring-1 border border-blue-500' : ''
                     ]"
                     @click="emit('selectChat', chat.id)">
                  <!-- Chat Icon -->
                  <div class="flex items-center" @dblclick.stop="startRename(chat)">
                    <div>
                      <font-awesome-icon :icon="['fas', 'comments']" class="w-[14px] h-[14px] mr-2" />
                    </div>
                  </div>
                  <!-- Chat Title -->
                  <input v-if="editingChatId === chat.id"
                         ref="renameInput"
                         v-model="editingTitle"
                         @blur="finishRename"
                         @keyup.enter="finishRename"
                         @keyup.esc="cancelRename"
                         class="bg-transparent border-none outline-none focus:outline-none w-full max-w-[200px] text-xs text-gray-400"
                         :placeholder="chat.title || 'New Chat'"
                         @click.stop
                  />
                  <span v-else class="truncate">{{ chat.title || 'New Chat' }}</span>
                  <!-- Dropdown Arrow / More Button -->
                  <button @click.stop="openMorePopup(chat.id, $event)" 
                          class="ml-auto text-gray-500 hover:text-incognitee-green" 
                          title="More">
                          <font-awesome-icon :icon="['fas', 'ellipsis']" class="w-3 h-3" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </template>

        <!-- Older Chats By Month -->
        <template v-for="(monthGroup, month) in props.groupedChats.byMonth" :key="month">
          <div class="space-y-2">
            <div class="text-xs font-medium text-base-content/70 px-2">{{ month }}</div>
            <div v-for="chat in monthGroup" 
                 :key="chat.id"
                 @click="emit('selectChat', chat.id)"
                 class="group relative cursor-pointer"
                 :class="[
                   'w-full text-left p-3 rounded-lg text-sm hover:bg-base-300 transition-colors',
                   chat.id === props.currentChatId
                     ? 'bg-primary/10 border border-primary/20'
                     : 'bg-base-100'
                 ]">
              <div class="flex justify-between items-start gap-2">
                <div class="flex flex-col gap-1 flex-1 min-w-0">
                  <div class="truncate font-medium">
                    {{ chat.title || 'New Chat' }}
                  </div>
                  <div class="text-xs text-base-content/60">
                    {{ formatDateFull(chat.lastInteraction) }}
                  </div>
                </div>
                <div class="opacity-0 group-hover:opacity-100 flex items-center space-x-1 shrink-0">
                  <button @click.stop="emit('shareChat', chat.id)" 
                          class="p-1 hover:text-primary" 
                          title="Share Chat">
                    <i class="fas fa-share-alt text-xs"></i>
                  </button>
                  <button @click.stop="emit('archiveChat', chat.id)" 
                          class="p-1 hover:text-warning" 
                          title="Archive Chat">
                    <i class="fas fa-archive text-xs"></i>
                  </button>
                  <button @click.stop="emit('deleteChat', chat.id)" 
                          class="p-1 hover:text-error" 
                          title="Delete Chat">
                    <i class="fas fa-trash text-xs"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </aside>

      

    <!-- Main Content Area -->
    <main class="flex-1 h-[calc(100vh-6rem)] flex flex-col overflow-hidden pr-0 pb-0">
      <!-- Chat Messages -->
      <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 pr-0 space-y-4 chat-container">
        <div v-for="message in props.messages" :key="message.content" 
             class="flex flex-col">
          <div :class="[
            'chat max-w-[80%] w-fit',
            message.role === 'assistant' ? 'chat-start' : 'chat-end ml-auto'
          ]">
            <div class="chat-bubble text-white break-words" 
               :class="{
                '!bg-[#1845b9]': message.role === 'user',
                '!bg-[#24ad7c]': message.role === 'assistant'
              }">
              <div class="whitespace-pre-wrap break-words">{{ message.content }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Area - Fixed at bottom -->
      <div class="p-4 pb-0 pr-0 mt-auto " >
        <div class="w-[100%] max-w-2xl p-2 bg-transparent rounded-2xl flex flex-col border border-gray-800 shadow-sm">

          <div class="space-y-0">
            <textarea v-model="userInput" 
                      @keydown.enter.exact.prevent="sendMessage"
                      @keydown.enter.shift.exact="newLine"
                      class="textarea w-full text-xs input-no-focus text-gray-200" 
                      placeholder="Type your message..."
                      rows="1"></textarea>
          
            <div class="flex justify-between items-center m-0">
              
              <!-- Provider Selection -->
              <div class="form-control min-w-[100px]">
                <select v-model="props.selectedProvider"
                        @change="$emit('update:selectedProvider', $event.target.value)"
                        class="select w-full text-xs input-no-focus">
                  <option value="openai">OpenAI</option>
                  <option value="gemini">Gemini</option>
                  <option value="anthropic">Anthropic</option>
                </select>
              </div>

               <!-- Show Credit Balance -->
               <div class="form-control min-w-[100px]">
                <span class="text-xs">
                  Remaining Credits: {{ formatCreditBalance() }}
                </span>
              </div>

              <div class="flex space-x-2">
                <!-- Buy Incognitee Credits Button -->
                <button @click="showStripeCheckoutOverlay = true" 
                        class="btn btn-sm btn-outline btn-accent"
                        title="Buy Credits">
                        <font-awesome-icon :icon="['fas', 'coins']" class="mr-1" />
                        <span class="text-xs">Buy Credits</span>
                </button>
                
                <button @click="clearChat" 
                        class="btn btn-sm bg-transparent hover:bg-transparent hover:text-primary clear-chat-btn"
                        title="Clear Chat">
                        <font-awesome-icon :icon="['fa', 'trash-can']" />
                </button>

                <button @click="sendMessage" 
                        :disabled="!userInput.trim()" 
                        class="btn btn-sm btn-primary">
                        <font-awesome-icon :icon="['fa', 'paper-plane']" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  
  <!-- More Options Popup -->
  <teleport to="body">
    <div v-if="showMorePopup && selectedChatForMore" 
         id="more-popup"
         class="fixed bg-gray-800 shadow-xl rounded-lg p-2 z-50 border border-gray-700 flex flex-col gap-1 text-base-content/70"
         :style="{ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` }">

    <button @click.stop="() => {
                const chat = props.groupedChats.today.find(c => c.id === selectedChatForMore) || 
                           props.groupedChats.last30Days.find(c => c.id === selectedChatForMore) || 
                           Object.values(props.groupedChats.byMonth).flat().find(c => c.id === selectedChatForMore);
                if (chat) {
                  startRename(chat);
                  closeMorePopup();
                }
              }" 
            class="btn btn-ghost btn-sm justify-start" 
            title="Rename Chat">
      <font-awesome-icon :icon="['fas', 'pen']" class="mr-2" />
      Rename
    </button>
    <button @click.stop="emit('shareChat', selectedChatForMore); closeMorePopup()" 
            class="btn btn-ghost btn-sm justify-start" 
            title="Share Chat">
      <font-awesome-icon :icon="['fas', 'share']" class="mr-2" />
      Share
    </button>
    <button @click.stop="emit('archiveChat', selectedChatForMore); closeMorePopup()" 
            class="btn btn-ghost btn-sm justify-start" 
            title="Archive Chat">
      <font-awesome-icon :icon="['fas', 'box-archive']" class="mr-2" />
      Archive
    </button>
    <button @click.stop="emit('deleteChat', selectedChatForMore); closeMorePopup()" 
            class="btn btn-ghost btn-sm justify-start text-error" 
            title="Delete Chat">
      <font-awesome-icon :icon="['fas', 'trash-can']" class="mr-2" />
      Delete
    </button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import StripeCheckoutOverlay from '@/components/overlays/StripeCheckoutOverlay.vue';
import { ref, watch, nextTick, computed } from 'vue';
import { useAccount } from '@/store/account';
import { formatDecimalBalance, divideBigIntToFloat } from '@/helpers/numbers';
import { shieldingTargetChainAssetId } from '@/lib/environmentConfig';


interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatHistoryItem {
  id: string
  title: string
  messages: ChatMessage[]
  provider: string
  createdAt: Date
  lastInteraction: Date
  archived?: boolean
}

// Props
const props = defineProps<{
  messages: ChatMessage[]
  chatHistory: ChatHistoryItem[]
  currentChatId: string | null
  selectedProvider: string
  showSettings: boolean
  groupedChats: {
    today: ChatHistoryItem[]
    last30Days: ChatHistoryItem[]
    byMonth: Record<string, ChatHistoryItem[]>
  }
}>()

// Emits
const emit = defineEmits<{
  'update:selectedProvider': [value: string]
  'update:showSettings': [value: boolean]
  'update:temperature': [value: number]
  'send': [message: string]
  'createNewChat': []
  'deleteChat': [chatId: string]
  'archiveChat': [chatId: string]
  'shareChat': [chatId: string]
  'renameChat': [chatId: string, newTitle: string]
  'selectChat': [chatId: string]
  'clear': []
}>()

// Initialize account store
const accountStore = useAccount()

// Local state (only UI-related)
const userInput = ref('')
const chatContainer = ref<HTMLDivElement | null>(null)
const editingChatId = ref<string | null>(null)
const editingTitle = ref('')
const renameInput = ref<HTMLInputElement | null>(null)
const showMorePopup = ref(false)
const selectedChatForMore = ref<string | null>(null)
const popupPosition = ref({ top: 0, left: 0 })
const showStripeCheckoutOverlay = ref(false)

// Format utilities
const formatDate = (date: Date) => {
  return new Date(date).toLocaleTimeString('default', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatDateFull = (date: Date) => {
  return new Date(date).toLocaleDateString('default', {
    month: 'short',
    day: 'numeric'
  })
}

// UI Methods
const sendMessage = () => {
  if (!userInput.value.trim()) return
  emit('send', userInput.value.trim())
  userInput.value = ''
}

const clearChat = () => emit('clear')
const newLine = () => userInput.value += '\n'

// Format credit balance from account store
const formatCreditBalance = () => {
  // Use the account store's getDecimalBalanceTransferable method with the proper ChainAssetId object
  const balance = accountStore.getDecimalBalanceTransferable(shieldingTargetChainAssetId.value)
  
  // Round to integer (no decimals)
  return Math.floor(balance).toString()
}

// More popup methods
const openMorePopup = (chatId: string, event: MouseEvent) => {
  selectedChatForMore.value = chatId
  showMorePopup.value = true
  
  // Position the popup near the clicked button
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  
  // Use fixed positioning relative to viewport
  popupPosition.value = {
    top: rect.top,
    left: rect.right + 5 // Position to the right with small gap
  }
  
  // Close popup when clicking outside and update position when scrolling
  nextTick(() => {
    document.addEventListener('click', closeMorePopupOnClickOutside)
    
    // Add scroll event listener to the scrollable container
    const scrollContainer = document.querySelector('.sidebar-scroll')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updatePopupPosition)
      console.log('Added scroll listener to sidebar-scroll')
    }
    
    // Also listen for window scroll/resize for better positioning
    window.addEventListener('scroll', updatePopupPosition, true)
    window.addEventListener('resize', updatePopupPosition)
    
    // Initial position update
    updatePopupPosition()
  })
}

const closeMorePopup = () => {
  showMorePopup.value = false
  selectedChatForMore.value = null
  document.removeEventListener('click', closeMorePopupOnClickOutside)
  
  // Remove all event listeners
  const scrollContainer = document.querySelector('.sidebar-scroll')
  if (scrollContainer) {
    scrollContainer.removeEventListener('scroll', updatePopupPosition)
  }
  
  window.removeEventListener('scroll', updatePopupPosition, true)
  window.removeEventListener('resize', updatePopupPosition)
}

const closeMorePopupOnClickOutside = (event: MouseEvent) => {
  const popup = document.getElementById('more-popup')
  if (popup && !popup.contains(event.target as Node)) {
    closeMorePopup()
  }
}

// Update popup position when sidebar scrolls
const updatePopupPosition = () => {
  if (showMorePopup.value && selectedChatForMore.value) {
    // Find the chat item by ID
    const chatItem = document.querySelector(`li[data-chat-id="${selectedChatForMore.value}"]`)
    if (!chatItem) return
    
    // Find the more button within that chat item
    const moreButton = chatItem.querySelector('button[title="More"]')
    if (!moreButton) return
    
    // Get button position
    const rect = moreButton.getBoundingClientRect()
    
    // Check if button is visible in viewport
    const isVisible = rect.top > 0 && rect.bottom < window.innerHeight
    
    if (!isVisible) {
      // If button scrolled out of view, hide popup
      closeMorePopup()
      return
    }
    
    // Update popup position to match button position
    popupPosition.value = {
      top: rect.top,
      left: rect.right + 5
    }
    
    // Ensure popup stays within viewport
    const popup = document.getElementById('more-popup')
    if (popup) {
      const popupRect = popup.getBoundingClientRect()
      
      // Adjust if popup would go off-screen
      if (popupRect.right > window.innerWidth) {
        popupPosition.value.left = rect.left - popupRect.width - 5
      }
      
      if (popupRect.bottom > window.innerHeight) {
        popupPosition.value.top = window.innerHeight - popupRect.height - 10
      }
    }
  }
}

// Chat rename methods
const startRename = (chat: ChatHistoryItem) => {
  editingChatId.value = chat.id
  editingTitle.value = chat.title || 'New Chat'
  nextTick(() => {
    if (renameInput.value) {
      renameInput.value.focus()
      renameInput.value.select()
    }
  })
}

const finishRename = () => {
  if (editingChatId.value && editingTitle.value.trim()) {
    emit('renameChat', editingChatId.value, editingTitle.value.trim())
  }
  editingChatId.value = null
  editingTitle.value = ''
}

const cancelRename = () => {
  editingChatId.value = null
  editingTitle.value = ''
}

// Auto-scroll chat
watch(() => props.messages.length, () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  })
})
</script>

<style scoped>
:root {
  --subtle-gray: rgb(31, 41, 55);
}

/* Global font size for the component */
.flex.flex-1.overflow-hidden {
  font-size: 14px;
}

.input-border {
  border-color: var(--subtle-gray);
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

/* Sidebar scrollbar styling */
.sidebar-scroll {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

.sidebar-scroll:hover {
  scrollbar-color: var(--subtle-gray) transparent;
}

.sidebar-scroll::-webkit-scrollbar {
  width: 4px;
}

.sidebar-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-scroll::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 3px;
}

.sidebar-scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--subtle-gray);
}

/* More popup styling */
#more-popup button {
  font-weight: 400 !important;
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
.input-no-focus:focus {
  outline: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
</style>
