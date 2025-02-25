import { createRouter, createWebHistory } from 'vue-router'; 
// import  from '@components/.vue';
import chat from '@components/chat.vue';
import contact  from '@components/contact.vue';
import dod from '@components/dod.vue';
import  from '@components/.vue';
import  from '@components/.vue';
import  from '@components/.vue';


const routes = [ 
  { path: '/', component: target }, // target, home
  // { path: '/', component: }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes, 
});

export default router; 
