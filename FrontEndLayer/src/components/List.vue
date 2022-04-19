<template>
    <div>
        <div id="app">
            {{ Totalproducts }}
        </div>

        <!-- <div class="partners">
         <a href="#partnerName1">
             <b-container class="center rows" style="max-width: 1200px">
                 <b-row>
                     <b-col><img class="logo" src="./logo-ah.png" alt="" /></b-col>
                     <b-col>Albert Heijn</b-col>{{brands.Name}}
                     <b-col cols="4"> <b-progress :max="max"><b-progress-bar :value="AHValue" :label="`${((AHValue / max) * 100).toFixed(2)}%`" show-progress></b-progress-bar></b-progress></b-col>
                     <b-col>Last export: 23/03/2022</b-col>
                     <b-col>9733 products</b-col>
                 </b-row>
             </b-container>
         </a>
     </div>
     /*-->
    </div>

</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';
    Vue.prototype.$http = axios;

    export default {
        data() {
            return {
                Totalproducts: null
            };
        },

        mounted() {
            axios
                .get('https://i437675.luna.fhict.nl/home/basic')
                .then(response => (this.Totalproducts = response))
        }
    };
</script>