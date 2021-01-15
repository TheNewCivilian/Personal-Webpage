import Vue from 'vue';
import VueRouter from 'vue-router';
import users from '@/helpers/users';
import Home from '../views/Home.vue';
import Person from '../views/Person.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/:personId',
    name: 'person',
    component: Person,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === 'person') {
    if (!users[to.params.personId]) {
      next('/');
      return;
    }
  }
  next();
});

export default router;
