import { createRouter, createRouterMatcher, createWebHistory } from "vue-router";
import Home from '../views/home.vue';
import Aktuality from '../views/aktuality.vue';
import aktualitaDetail from '../views/akDetail.vue'
import skola from '../views/skola.vue';
import bakalari from '../views/bakalari.vue';
import partners from '../views/partners.vue';
import Studium from '../views/studium.vue';
import ucebniPlan from '../views/ucebni-plan.vue';
import prijimacky from '../views/prijimacky.vue';
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
import onas from '../views/onas.vue';
import domov from '../views/domov-mladeze.vue';
import kuchyne from '../views/kuchyne.vue';
import kontakt from '../views/kontakt.vue';

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
        path: '/aktuality',
        name: 'Aktuality',
        component: Aktuality
    },
    {
        path: '/aktuality/:slug',
        name: 'aktualitaDetail',
        component: aktualitaDetail,
        props: true
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
        path: '/prijimacky',
        name: 'prijimacky',
        component: prijimacky
    },
    {
        path: '/ucebni-plan',
        name: 'ucebniPlan',
        component: ucebniPlan
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
    {
        path: '/onas',
        name: 'onas',
        component: onas
    },
    {
        path: '/domov-mladeze',
        name: 'domov',
        component: domov
    },
    {
        path: '/skolni-kuchyne',
        name: 'kuchyne',
        component: kuchyne
    },
    {
        path: '/kontakt',
        name: 'kontakt',
        component: kontakt
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;