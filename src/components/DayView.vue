<template>
  <article class="day-view">
    <h2>
        {{ title }}
    </h2>
    <img 
        class="day-picture"
        v-bind:src="pictureUrl"
        v-bind:alt="title"
        v-bind:title="copyright"
    />
    <div class="picture-info">
        <p class="picture-date">
            Posted on {{ date }}
        </p>
        <p class="picture-explanation">
            {{ explanation }}
        </p>
    </div>
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
        explanation: '',
        copyright: ''
    }
  },
  async mounted() {
    const dataObject = await this.getPicture();
    this.date = dataObject.date;
    this.title = dataObject.title;
    this.pictureUrl = dataObject.hdurl;
    this.explanation = dataObject.explanation;
    this.copyright = dataObject.copyright;
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