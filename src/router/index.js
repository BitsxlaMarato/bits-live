import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Activities from '@/views/Activities.vue';
import Challenges from '@/views/Challenges.vue';
import Schedule from '@/views/Schedule.vue';
import Live from '@/views/Live.vue';
import Rules from '@/views/Rules.vue';
import FullScreen from '@/views/FullScreen.vue';
import Maps from '@/views/Maps.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/maps',
    name: 'Maps',
    component: Maps,
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities,
  },
  {
    path: '/challenges',
    name: 'challenges',
    component: Challenges,
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule,
  },
  {
    path: '/live',
    name: 'Live',
    component: Live,
  },
  {
    path: '/fullscreen',
    name: 'FullScreen',
    component: FullScreen,
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
