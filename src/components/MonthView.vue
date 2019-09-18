<template>
    <article class="month-view">
        <h2>september</h2>
        <ol
            v-masonry transition-duration="0.3s" item-selector=".item"
            horizontal-order="true"
            column-width=1
            fit-width="true"
        >
            <li 
                v-for="picture in pictures" v-bind:key="picture.key"
                
                
            >
                <img 
                    class="month-picture month-item item"
                    v-if="picture.pic"
                    v-bind:src="picture.pic" 
                    v-masonry-tile  

                />
                <iframe 
                    class="month-video month-item item"
                    v-if="picture.vid"
                    controls
                    v-bind:src="picture.vid" 
                    v-masonry-tile  

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

h2 {
    text-align: center;
}

ol {
    list-style: none;
    margin: 0 auto;
    padding: 0;
}

.month-item {
    margin: 2px;
    width: 278px;
}


</style>