<template>
  <div id="app">
    <Header />
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
        const res = await fetch(`${process.env.VUE_APP_ROOT_URL}date=${date}&key=${process.env.VUE_APP_API_KEY}`);
        const picture = await res.json();
        console.log(picture)
      } catch (error) {
        throw new Error ('Error fetching pictures:', error)
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
