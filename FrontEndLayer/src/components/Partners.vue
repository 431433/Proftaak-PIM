<template>
    <div>
        <div class="partners">
            <a href="#partnerName1">
                <b-container class="center rows" style="max-width: 1200px">
                    <b-row>
                        <b-col><img class="logo" src="./logo-ah.png" alt="" /></b-col>
                        <b-col>Albert Heijn</b-col>
                        <b-col cols="4"> <b-progress :max="max"><b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`" show-progress></b-progress-bar></b-progress></b-col>
                        <b-col>Last export: 23/03/2022</b-col>
                        <b-col>9733 products</b-col>
                    </b-row>
                </b-container>
            </a>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { BootstrapVue } from 'bootstrap-vue'
    Vue.use(BootstrapVue)
    export default {
        name: 'Partners',
        data() {
            return {
                value: 80,
                max: 100,
            }
        }
    }
</script>

<style>
    .center {
        margin: auto;
        width: 70%;
        padding: 4px;
    }

    .rows{
        border-color: black;
        background-color: white;
        border-bottom-width: thin;
        border-bottom: solid;
        border-color: black;
    }
    template {
        background-color: whitesmoke;
    }
    .partners{
        margin-bottom: 10px;
    }

    .logo{
        max-height: 40px;
    }
</style>