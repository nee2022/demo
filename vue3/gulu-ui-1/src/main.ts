import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createWebHashHistory, createRouter } from 'vue-router';
import Zhang from './components/Zhang.vue';
import xxx from './components/xxx.vue';

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Zhang,
        },
        {
            path: '/xxx',
            component: xxx,
        },
    ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
// createApp(App).mount('#app');
