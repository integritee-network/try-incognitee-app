import mitt from "mitt";

type Events = {
  toggleSidebar: void;
  toggleChatHistory: void;
};

export const eventBus = mitt<Events>();
