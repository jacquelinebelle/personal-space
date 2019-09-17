<template>
    <article class="month-view">
        <h2>september</h2>
       
    </article>
</template>

<script>

export default {
  name: "MonthView",
  props: {
      getPicture: { type: Function }
  },
  data() {
    return {
        day: '',
        month: '',
        year: '',
        pictures: []
    }
  },
  async mounted() {
    this.getDate(this);
    var numberOfDays = this.getNumberOfDaysInMonth(this.month, this.year);
    for (let i = this.day; i > 0; i--) {
        var picture = await this.getPicture(`${this.year}-${this.month}-${i}`);
        picture.media_type === 'video' ? this.pictures.unshift(picture.url) : this.pictures.unshift(picture.hdurl)
    }
    console.log(this.pictures)

  },
  methods: {
    getDate: (self) => {
        var today = new Date().toJSON().split('-');
        var year = today[0];
        var month = today[1]
        var day = today[2].substring(0, 2);

        self.day = day;
        self.month = month;
        self.year = year;
    },

    getNumberOfDaysInMonth: (month, year) => {
        if (month.charAt(0) === '0') {
            month = parseInt(month.charAt(1))
        }

        return new Date(year, month, 0).getDate()
    },

    getPictures: () => {

    }
  }
};

</script>

<style scoped>


</style>