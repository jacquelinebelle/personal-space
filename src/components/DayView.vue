<template>
  <article class="day-view">
  </article>
</template>

<script>
export default {
  name: "DayView",
  props: {

  },
  data() {
    return {
        date: '',
        title: '',
        pictureUrl: '',
        explanation: ''
    }
  },
  mounted() {

  }
};
</script>

<style scoped>
@font-face {
  font-family: "Rhino Sans";
  src: url("../assets/rhinosans.ttf") format("truetype");
} 

.day-view {
    margin: 0 auto;
}

</style>