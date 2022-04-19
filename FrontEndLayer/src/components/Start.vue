<template>
    <div :style="{'background-image':'url(https://img.freepik.com/vrije-photo/digitale-cyberspace-met-deeltjes-en-digitale-datanetwerkverbindingen-snelle-verbinding-data-analyse-toekomstig-achtergrondconcept_24070-1164.jpg?w=2000)'}">
       

        <div>
            <b-container fluid class="p-5">
                <b-row>
                    <b-col>
                        <a href="#">
                            <img fluid src="./OverviewBtn.png" alt="Overview" class="home-btn" />
                        </a>
                    </b-col>
                    <b-col>
                        <a href="#">
                            <img fluid src="./ImportBtn.png" alt="Import" class="home-btn" />
                        </a>
                    </b-col>
                    <b-col>
                        <a href="#">
                            <img fluid src="./Export.png" alt="Export" class="home-btn" />
                        </a>
                    </b-col>
                    <b-col>
                        <a href="#">
                            <img fluid src="./Stats.png" alt="Stats" class="home-btn" />
                        </a>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { BootstrapVue } from 'bootstrap-vue'
    Vue.use(BootstrapVue)
    export default {
        name: 'Start'
    }
</script>

<style>
    .home-btn{
        max-height: 100px;
        margin-top: 250px;
    }
</style>