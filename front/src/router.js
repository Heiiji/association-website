import Vue from 'vue';
import Router from 'vue-router';
import HW from './components/HelloWorld';
import Adoption from './components/adoption';
import Aide from './components/dons';

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
        }
    ]
});