import Vue from 'vue';
import Router from 'vue-router';
import HW from './components/HelloWorld';
import Adoption from './components/adoption';
import Aide from './components/dons';
import Pathologie from './components/pathologie';
import Guide from './components/guide';
import Sauvage from './components/sauvage';
import Sterilisation from './components/sterilisation';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HW
        },
        {
            path: '/adoption',
            name: 'adoption',
            component: Adoption
        },
        {
            path: '/aide',
            name: 'Aide',
            component: Aide
        },
        {
            path: '/pathologie',
            name: 'Pathologie',
            component: Pathologie
        },
        {
            path: '/guide',
            name: 'Guide',
            component: Guide
        },
        {
            path: '/sauvage',
            name: 'Sauvage',
            component: Sauvage
        },
        {
            path: '/sterilisation',
            name: 'Sterilisation',
            component: Sterilisation
        }
    ]
});