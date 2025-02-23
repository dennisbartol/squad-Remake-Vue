import { createApp } from "vue"; 
import App from "./App.vue";
import AudioMixin from "@/mixins/audioMixin"; 
import './styles/globalstyles.css';

const app = createApp(App);
app.mixin(audioMixin); 
app.mount("#app");
