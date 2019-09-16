<template>
  <article class="day-view">
      <h2>
          {{ title }}
      </h2>
      <p>i'm here</p>
  </article>
</template>

<script>
export default {
  name: "DayView",
  props: {
      getPicture: { type: Function }
  },
  data() {
    return {
        date: '',
        title: '',
        pictureUrl: '',
        explanation: ''
    }
  },
  async mounted() {
    const dataObject = await this.getPicture();
    this.date = dataObject.date;
    this.title = dataObject.title;
    this.pictureUrl = dataObject.hdurl;
    this.explanation = dataObject.explanation;
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