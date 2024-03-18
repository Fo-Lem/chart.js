import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    meta: {
      requiredAuth: false,
    },
    redirect: { name: 'Dashboard' },
    children: [
      {
        path: '/login',
        name: 'Login',
        meta: {
          layout: 'Empty',
          requiredAuth: false,
          title: 'Вход',
        },
        component: () => import('../views/Login.vue'),
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
          layout: 'Default',
          requiredAuth: false,
          title: 'Главная',
        },
        component: () => import('../views/Dashboard.vue'),
      },
      {
        path: '/about',
        name: 'About',
        meta: {
          layout: 'Default',
          requiredAuth: false,
          title: 'О проекте',
        },
        component: () => import('../views/About.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes,
});

router.beforeEach(
  (
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: Function,
  ) => {
    // make a title for a pages
    if (window.matchMedia('(display-mode: minimal-ui)').matches) {
      document.title = <string>to.meta.title;
    } else {
      document.title = to.meta.title + ' | ' + import.meta.env.VITE_APP_TITLE;
    }
    next();
  },
);

export default router;
