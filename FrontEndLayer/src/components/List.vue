<template>
    <div>
        <div id="app">
            {{ Totalproducts }}
        </div>
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