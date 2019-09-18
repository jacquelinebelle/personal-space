<template>
  <div id="app">
    <Header />
    <router-view :getPicture="getPictures" :key="$route.fullPath">
      <DayView />
      <MonthView  />
    </router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import DayView from './components/DayView.vue'
import MonthView from './components/MonthView.vue'

export default {
  name: 'app',
  components: {
    Header,
    DayView,
    MonthView
  }, methods: {
    getPictures: async (date = '') => {
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
  background-color: #ece5db;
  color: #35312D;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  overflow: hidden;
  padding: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
