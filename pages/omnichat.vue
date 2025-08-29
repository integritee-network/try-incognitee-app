<template>
  <div class="h-screen flex flex-col overflow-hidden">
    
     

    <OmniChat
      :selectedProvider="selectedProvider"
      :apiKey="apiKey"
      :showSettings="showSettings"
      :messages="messages"
      :chatHistory="chatHistory"
      :currentChatId="currentChatId"
      :groupedChats="groupedChats"
      @update:selectedProvider="(value) => (selectedProvider = value)"
      @send="handleMessage"
      @createNewChat="createNewChat"
      @deleteChat="handleChatDelete"
      @archiveChat="handleChatArchive"
      @shareChat="handleChatShare"
      @renameChat="handleChatRename"
      @selectChat="selectChat"
      @clear="clearChat"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useLocalStorage } from "@vueuse/core";
import CryptoJS from "crypto-js";
import OmniChat from "~/components/tabs/OmniChat.vue";

type Provider = "openai" | "gemini" | "anthropic" | string;

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

// State
const messages = ref<ChatMessage[]>([]);
const chatHistory = useLocalStorage<ChatHistoryItem[]>("omnichat_history", []);
const currentChatId = ref<string | null>(null);
const selectedProvider = useLocalStorage<Provider>(
  "omnichat-provider",
  "openai",
);
const showSettings = ref(false);
const temperature = ref(0.7);

// Application-provided API key
const apiKey = ref<string>(process.env.OPENAI_API_KEY || ""); // Get API key from environment variable

// Computed state for chat grouping
const groupedChats = computed(() => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const thirtyDaysAgo = new Date(today);
  thirtyDaysAgo.setDate(today.getDate() - 30);

  const nonArchivedChats = chatHistory.value.filter((chat) => !chat.archived);

  return {
    today: nonArchivedChats.filter(
      (chat) => new Date(chat.lastInteraction).getTime() >= today.getTime(),
    ),
    last30Days: nonArchivedChats.filter((chat) => {
      const date = new Date(chat.lastInteraction);
      return (
        date.getTime() < today.getTime() &&
        date.getTime() >= thirtyDaysAgo.getTime()
      );
    }),
    byMonth: nonArchivedChats
      .filter(
        (chat) =>
          new Date(chat.lastInteraction).getTime() < thirtyDaysAgo.getTime(),
      )
      .reduce(
        (acc, chat) => {
          const date = new Date(chat.lastInteraction);
          const monthYear = date.toLocaleString("default", {
            month: "long",
            year: "numeric",
          });
          if (!acc[monthYear]) acc[monthYear] = [];
          acc[monthYear].push(chat);
          return acc;
        },
        {} as Record<string, ChatHistoryItem[]>,
      ),
  };
});

// API key encryption/decryption
const encryptData = (data: string) => {
  try {
    return CryptoJS.AES.encrypt(data, "omnichat-secret-key").toString();
  } catch (error) {
    console.error("Failed to encrypt:", error);
    return "";
  }
};

const decryptData = (data: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(data, "omnichat-secret-key");
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    if (!decrypted) throw new Error("Failed to decrypt");
    return decrypted;
  } catch (error) {
    console.error("Failed to decrypt:", error);
    return "";
  }
};

// Chat management
// Keep track of chat counter
const chatCounter = ref(1);

// Initialize counter based on existing chats
onMounted(() => {
  const existingChats = chatHistory.value.filter((chat) =>
    chat.title.startsWith("Chat "),
  );
  if (existingChats.length > 0) {
    const numbers = existingChats
      .map((chat) => parseInt(chat.title.split(" ")[1]))
      .filter((num) => !isNaN(num));
    if (numbers.length > 0) {
      chatCounter.value = Math.max(...numbers) + 1;
    }
  }
});

const createNewChat = () => {
  const now = new Date();
  const newChat: ChatHistoryItem = {
    id: now.getTime().toString(),
    title: `New Chat #${chatCounter.value}`,
    messages: [],
    provider: selectedProvider.value,
    createdAt: now,
    lastInteraction: now,
  };
  chatHistory.value.unshift(newChat);
  currentChatId.value = newChat.id;
  messages.value = [];
  chatCounter.value++;
  saveChatHistory();
};

const saveChatHistory = () => {
  localStorage.setItem("omnichat_history", JSON.stringify(chatHistory.value));
};

const loadChat = (id: string) => {
  const chat = chatHistory.value.find((c) => c.id === id);
  if (chat) {
    currentChatId.value = id;
    messages.value = chat.messages;
    selectedProvider.value = chat.provider;
  }
};

const handleChatDelete = (id: string) => {
  chatHistory.value = chatHistory.value.filter((c) => c.id !== id);
  if (currentChatId.value === id) {
    currentChatId.value = chatHistory.value[0]?.id || null;
    messages.value = chatHistory.value[0]?.messages || [];
  }
};

const handleChatArchive = (id: string) => {
  const chat = chatHistory.value.find((c) => c.id === id);
  if (chat) {
    chat.archived = true;
  }
};

const handleChatShare = (id: string) => {
  const chat = chatHistory.value.find((c) => c.id === id);
  if (chat) {
    const shareableContent = chat.messages
      .map((m) => `${m.role}: ${m.content}`)
      .join("\n\n");

    navigator.clipboard
      .writeText(shareableContent)
      .then(() => {
        console.log("Chat copied to clipboard");
      })
      .catch((err: Error) => {
        console.error("Failed to copy chat:", err);
      });
  }
};

// Handle chat selection
const selectChat = (chatId: string) => {
  loadChat(chatId);
};

const handleChatRename = (chatId: string, newTitle: string) => {
  const chat = chatHistory.value.find((c) => c.id === chatId);
  if (chat) {
    chat.title = newTitle;
  }
};

// Message handling
const handleOpenAIMessage = async (message: string): Promise<string> => {
  // TODO: Implement OpenAI API call
  return `OpenAI Echo: ${message}`;
};

const handleGeminiMessage = async (message: string): Promise<string> => {
  // TODO: Implement Gemini API call
  return `Gemini Echo: ${message}`;
};

const handleAnthropicMessage = async (message: string): Promise<string> => {
  // TODO: Implement Anthropic API call
  return `Anthropic Echo: ${message}`;
};

const handleMessage = async (message: string) => {
  if (!currentChatId.value) {
    createNewChat();
  }

  const userMessage: ChatMessage = { role: "user", content: message };
  messages.value.push(userMessage);

  const chat = chatHistory.value.find((c) => c.id === currentChatId.value);
  if (chat) {
    chat.messages = messages.value;
    chat.lastInteraction = new Date();
    if (!chat.title) {
      chat.title = message.slice(0, 30) + (message.length > 30 ? "..." : "");
    }
  }

  try {
    let response = "";
    switch (selectedProvider.value) {
      case "openai":
        response = await handleOpenAIMessage(message);
        break;
      case "gemini":
        response = await handleGeminiMessage(message);
        break;
      case "anthropic":
        response = await handleAnthropicMessage(message);
        break;
      default:
        throw new Error(`Unknown provider: ${selectedProvider.value}`);
    }

    const assistantMessage: ChatMessage = {
      role: "assistant",
      content: response,
    };
    messages.value.push(assistantMessage);

    if (chat) {
      chat.messages = messages.value;
      chat.lastInteraction = new Date();
    }
  } catch (error) {
    console.error("Error:", error);
    const errorMessage: ChatMessage = {
      role: "assistant",
      content: "Sorry, there was an error processing your request.",
    };
    messages.value.push(errorMessage);

    if (chat) {
      chat.messages = messages.value;
      chat.lastInteraction = new Date();
    }
  }
};

const clearChat = () => {
  messages.value = [];
  if (currentChatId.value) {
    const chat = chatHistory.value.find((c) => c.id === currentChatId.value);
    if (chat) {
      chat.messages = [];
    }
  }
};
</script>
