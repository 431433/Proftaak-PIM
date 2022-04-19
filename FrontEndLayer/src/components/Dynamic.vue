<template>
    <div>
        <div id="app">
            <p>
                <router-link to="/">Go to Home</router-link>
                <hr />
                <router-link to="/Start">Go to start</router-link>
            </p>
            <router-view></router-view>
        </div>
    </div>
    

</template>

<script>
    export default {
    }
</script>
