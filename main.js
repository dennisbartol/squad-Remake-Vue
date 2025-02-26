import { createApp } from "vue";
import { createHead } from '@vueuse/head';
import App from "./App.vue";
import router from './router';
import AudioMixin from "@/mixins/audioMixin"; 
import './styles/globalstyles.css';


const app = createApp(App);
const head = createHead();

app.mixin(audioMixin); 
app.use(head);
app.use(router); 
app.mount("#app");
