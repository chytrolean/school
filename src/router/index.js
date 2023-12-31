import { createRouter, createRouterMatcher, createWebHistory } from "vue-router";
import Home from '../views/home.vue';
import Aktuality from '../views/aktuality.vue';
import skola from '../views/skola.vue';
import bakalari from '../views/bakalari.vue';
import partners from '../views/partners.vue';
import Studium from '../views/studium.vue';
import provoz from '../views/obory/provoz.vue';
import ekonomika from '../views/obory/ekonomika.vue';
import it from '../views/obory/it.vue';
import mechanik from '../views/obory/mechanik.vue';
import kuchar from '../views/obory/kuchar.vue';
import prodavac from '../views/obory/prodavac.vue';
import elektrikar from '../views/obory/elektrikar.vue';
import zednik from '../views/obory/zednik.vue';
import klempir from '../views/obory/klempir.vue';
import nastrojar from '../views/obory/nastrojar.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, 
    {
        path: '/studium',
        name: 'Studium',
        component: Studium
    },
    {
        path: '/Aktuality',
        name: 'Aktuality',
        component: Aktuality
    },
    {
        path: '/skola',
        name: 'skola',
        component: skola
    },
    {
        path: '/bakalari',
        name: 'bakalari',
        component: bakalari
    },
    {
        path: '/partners',
        name: 'partners',
        component: partners
    },
    {
        path: '/provoz-ekonomika-dopravy',
        name: 'provoz',
        component: provoz
    },
    {
        path: '/ekonomika-podnikani',
        name: 'ekonomika',
        component: ekonomika
    },
    {
        path: '/it',
        name: 'it',
        component: it
    },
    {
        path: '/mechanik-stroju-a-zarizeni',
        name: 'mechanik',
        component: mechanik
    },
    {
        path: '/kuchar-cisnik',
        name: 'kuchar',
        component: kuchar
    },
    {
        path: '/prodavac',
        name: 'prodavac',
        component: prodavac
    },
    {
        path: '/elektrikar-silnoproud',
        name: 'elektrikar',
        component: elektrikar
    },
    {
        path: '/zednik',
        name: 'zednik',
        component: zednik
    },
    {
        path: '/klempir',
        name: 'klempir',
        component: klempir
    },
    {
        path: '/nastrojar',
        name: 'nastrojar',
        component: nastrojar
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;