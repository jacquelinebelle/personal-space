<template>
        <article class="day-view">
            <img 
                class="day-picture"
                v-bind:src="pictureUrl"
                v-bind:alt="title"
                v-bind:title="copyright"
            />
            <div class="picture-info">
                <h2 class="picture-title">
                    {{ title }}
                </h2>
                <p class="picture-explanation">
                    {{ explanation }}
                </p>
                <p class="picture-date">
                    Posted on {{ date }}
                </p>
            </div>
        </article>
</template>

<script>
export default {
  name: "DayView",
  props: {
      getPicture: { type: Function },
  },
  data() {
    return {
        key: '',
        date: '',
        title: '',
        pictureUrl: '',
        explanation: '',
        copyright: ''
    }
  },
  async mounted() {
    if (this.$route.params.key) {
        this.date = this.$route.params.key;
    }
    const dataObject = await this.getPicture(this.date);
    this.date = dataObject.date;
    this.title = dataObject.title;
    this.pictureUrl = dataObject.hdurl;
    this.explanation = dataObject.explanation;
    this.copyright = dataObject.copyright;
  }
};
</script>

<style scoped>

.day-view {
    display: grid;
    grid-column-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
}

.day-picture {
    margin-top: 8px;
    max-width: 50vw;
}

.picture-info {
    font-size: 18px;
    grid-area: 1 / 2 / 2 / 3; 
    position: relative;
    width: 45vw;
}

.picture-title {
    font-size: 24px;
    font-weight: 500;
    margin: 0 0 8px 0;
}

.picture-explanation {
    line-height: 32px;
    margin: 0;
}

.picture-date {
    bottom: 0;
    left: 0;
    margin: 0;
    position: absolute;
}

</style>