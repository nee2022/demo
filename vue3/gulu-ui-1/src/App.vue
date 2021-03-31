<template>
    <div>
        <router-link to="/">gebng</router-link>
        <router-link to="/xxx">xx</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
    },
};
</script>
