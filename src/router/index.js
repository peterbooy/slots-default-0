import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: {
            name: 'home'
        }
    },
    {
        path: '/home',
        name: 'home',
        redirect: {
            name: 'news'
        },
    },
    {
        path: '/news',
        name: 'news',
        component: () => import(/* webpackChunkName: "News" */ '../views/News')
    },
    {
        path: '/concept',
        name: 'concept',
        component: () => import(/* webpackChunkName: "Concept" */ '../views/Concept')
    },
    {
        path: '/product',
        name: 'product',
        component: () => import(/* webpackChunkName: "Product" */ '../views/Product')
    },
    {
        path: '/online-store',
        name: 'online-store',
        component: () => import(/* webpackChunkName: "OnlineStore" */ '../views/OnlineStore')
    },

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;



