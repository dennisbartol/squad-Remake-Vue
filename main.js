import { createApp } from "vue"; 
import App from "./App.vue";
import router from './router';
import AudioMixin from "@/mixins/audioMixin"; 
import './styles/globalstyles.css';
import { useHead } from '@vueuse/head'

const app = createApp(App);
app.mixin(audioMixin); 
app.use(router); 
app.mount("#app");
