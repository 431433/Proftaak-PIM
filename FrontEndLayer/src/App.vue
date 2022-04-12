<template>
    <div id="app">
        <Home msg="Hello world!"/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Home from './components/Home.vue';
    import SideNav from './components/SideNav.vue';
    import Partners from './components/Partners.vue';
    import List from './components/List.vue';

    @Component({
        components: {
            Home,
            SideNav,
            Partners,
            List
        }
    })
    export default class App extends Vue { }
</script>

<style>
    template {
        background-color: whitesmoke;
    }
</style>
