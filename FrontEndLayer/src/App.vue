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

    @Component({
        components: {
            Home,
            SideNav,
            Partners
        }
    })
    export default class App extends Vue { }
</script>

<style>
    template {
        background-color: whitesmoke;
    }
</style>
