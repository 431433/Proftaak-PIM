<template>
    <div>
        <SideNav/>


        <div class="main">
            <h1 class="title">Welcome</h1><br />
                <div class="row center" style="max-width: 1200px">
                    <b-card-group class="">
                        <b-card header="Created products" class="text-center" title="420" header-bg-variant="primary" header-text-variant="white">
                        <b-card-text style="margin-left:100px">total</b-card-text></b-card>
                        <b-card header="Enriched fields" class="text-center" title="1500" header-bg-variant="primary" header-text-variant="white">
                            <b-card-text style="margin-left:100px">total</b-card-text></b-card>
                        <b-card header="Partners" class="text-center" title="23" header-bg-variant="primary" header-text-variant="white">
                            <b-card-text style="margin-left:100px">total</b-card-text></b-card>
                    </b-card-group>
                </div><br />

            <Partners/>

        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { BootstrapVue } from 'bootstrap-vue'
    Vue.use(BootstrapVue)
    import SideNav from './SideNav.vue'
    import Partners from './Partners.vue'
    export default {
        name: 'Home',
        components: {
            SideNav,
            Partners,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .margin-left{
        margin-left: 200px;
    }

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .column {
        float: left;
        width: 250px;
        background-color: lightgray;
        border: solid;
        border-width: 1px;
        border-color: black;
        margin: 20px;
        height: 175px;
    }

    /* Clear floats after the columns */
    .row:after {
        align-content: center;
        content: "";
        display: table;
        clear: both;
    }

    .title {
        text-align: left;
        margin: 30px;
    }

    .center {
        margin: auto;
        width: 70%;
        padding: 4px;
    }

    .inline {
        display: inline-block;
        clear: none;
        float: left;
        margin: 3px;
    } 

    /* Style page content */
    .main {
        margin-left: 160px; /* Same as the width of the sidebar */
        padding: 0px 10px;
    }  

    template {
        background-color: whitesmoke;
    }
</style>
