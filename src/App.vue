<template>
  <div id="app">
    <Header />
    <button v-on:click="getPictures('2019-09-15')" >click</button>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }, methods: {
    getPictures: async (date) => {
      try {
        const res = await fetch(`${process.env.VUE_APP_ROOT_URL}date=${date}&api_key=${process.env.VUE_APP_API_KEY}`);
        const picture = await res.json();
        return picture;
      } catch (error) {
        throw new Error ('Error fetching pictures:', error.message)
      }
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
