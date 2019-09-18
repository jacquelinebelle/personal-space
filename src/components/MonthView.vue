<template>
    <article class="month-view">
        <h2>september</h2>
        <ol>
            <li 
                v-for="picture in pictures" v-bind:key="picture.key"
            >
                <img 
                    class="month-picture"
                    v-if="picture.pic"
                    v-bind:src="picture.pic" 
                />
                <iframe 
                    v-if="picture.vid"
                    width="320" 
                    height="240" 
                    controls
                    v-bind:src="picture.vid" 

                />
            </li>
        </ol>
    </article>
</template>

<script>

import picturesData from './data.js';

export default {
  name: "MonthView",
  props: {
      getPicture: { type: Function }
  },
  components: {
      picturesData
  },
  data() {
    return {
        day: '',
        month: '',
        year: '',
        pictures: [],
    }
  },
  async mounted() {
    this.getDate(this);
    var numberOfDays = this.getNumberOfDaysInMonth(this.month, this.year);
    
    // for (let i = 1; i <= this.day; i++) {
    //     var picture = await this.getPicture(`${this.year}-${this.month}-${i}`);
    //     picture.media_type === 'video' ? this.pictures.push({vid: picture.url, key: picture.date}) 
    //     : this.pictures.push({pic: picture.hdurl, key: picture.date})
    // }
    this.pictures = picturesData;

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

ol {
    list-style: none;
}

.month-picture {
    height: 100px;
}

</style>