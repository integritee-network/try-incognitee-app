import mitt from "mitt";

type Events = {
  toggleSidebar: void;
};

export const eventBus = mitt<Events>();
