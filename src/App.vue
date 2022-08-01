<template>
    <router-view></router-view>
    <button @click="increment">count</button>
    <h2>{{ count }}</h2>
</template>

<script>

export default {
    name: 'App',
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        increment() {
            this.$store.state.count++
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
