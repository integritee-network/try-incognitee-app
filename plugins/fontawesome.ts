import { defineNuxtPlugin } from "nuxt/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTrashCan,
  faComments,
  faPen,
  faShare,
  faBoxArchive,
  faTrash,
  faPaperPlane,
  faEllipsis,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

// Add the specific icons we need
library.add(
  faTrashCan,
  faComments,
  faPen,
  faShare,
  faBoxArchive,
  faTrash,
  faPaperPlane,
  faEllipsis,
  faCoins,
);

export default defineNuxtPlugin((nuxtApp) => {
  // Register the component globally
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
