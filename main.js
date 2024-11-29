import { createApp } from "vue"; 
import App from "./App.vue";
import AudioMixin from "@/mixins/audioMixin"; 

const app = createApp(App);
app.mixin(audioMixin); 
app.mount("#app");
