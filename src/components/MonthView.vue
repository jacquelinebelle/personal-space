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
                v-for="picture in pictures" 
                v-bind:key="picture.key"
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
            <li
                v-for="empty in empties" 
                v-bind:key="empty.key"
            >
                <div
                    class="empty month-item item"
                    v-bind="empty.value"
                >
                    {{empty.value}}
                </div>
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
        empties: []
    }
  },
  async mounted() {
    this.getDate(this);
    
    // for (let i = 1; i <= this.day; i++) {
    //     var picture = await this.getPicture(`${this.year}-${this.month}-${i}`);
    //     picture.media_type === 'video' ? this.pictures.push({vid: picture.url, key: picture.date}) 
    //     : this.pictures.push({pic: picture.hdurl, key: picture.date})
    // }
    this.makeEmpties(this);

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

    makeEmpties: (self) => {
        console.log('me')
        var numberOfDays = self.getNumberOfDaysInMonth(self.month, self.year);
        
        for (let i = self.day; i <= numberOfDays; i++) {
            self.empties.push({value: i, key: i});
        }
        console.log(self.empties)
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

.empty {
    background-color: gray;
    color: white;
    font-size: 32px;
    height: 278px;
    line-height: 278px;
    text-align: center;
    vertical-align: middle;
}


</style>