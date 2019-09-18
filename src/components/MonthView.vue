<template>
    <article class="month-view">
        <h2>september</h2>
        <ol
            v-masonry transition-duration="0.3s" item-selector=".item"
            horizontal-order="true"
            column-width=1
            fit-width="true"
                        gutter=4

        >
            <li 
                class="month-container item"
                v-for="picture in pictures" 
                v-bind:key="picture.key"
                        v-masonry-tile  

            >   
                    <p 
                        class="month-number"
                        :id="'month' + picture.day"
                        v-bind:value="picture.day"
                        
                    >
                        {{picture.day}}
                    </p>
                <router-link exact :to="'/detail/' + picture.key" class="link">
                    <img 
                        class="month-picture month-item "
                        v-if="picture.pic"
                        v-bind:src="picture.pic" 
                        

                    />
                    <iframe 
                        class="month-video month-item "
                        v-if="picture.vid"
                        controls
                        height="278px"
                        width="278px"
                        v-bind:src="picture.vid" 

                    />
                    
                </router-link>
            </li>
            <li
                class="month-container item"
                        v-masonry-tile  

                v-for="empty in empties" 
                v-bind:key="empty.key"
            >
                <div
                    class="empty"
                    v-bind="empty.value"
                >
                    <p class="month-number empty-number">
                        {{empty.value}}
                    </p>
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
    
    for (let i = 1; i <= this.day; i++) {
        var picture = await this.getPicture(`${this.year}-${this.month}-${i}`);
        picture.media_type === 'video' ? this.pictures.push({day: i, vid: picture.url, key: picture.date}) 
        : this.pictures.push({day: i, pic: picture.hdurl, key: picture.date})
    }
    this.makeEmpties(this);

    // this.pictures = picturesData;

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
        var numberOfDays = self.getNumberOfDaysInMonth(self.month, self.year);
        var tomorrow = parseInt(self.day) + 1;
        for (let i = tomorrow; i <= numberOfDays; i++) {
            console.log('ay', i)
            self.empties.push({value: i, key: i});
        }
    }
  }
};

</script>

<style scoped>

h2 {
    text-align: center;
}

.item {
    margin: 1px 2px;
}

.month-container {
    width: 278px;
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    
}

.month-number {
    color: white;
    font-size: 10vh;
    top: 3%;
    right: 9%;
    margin: 0;
    opacity: 0;
    position: absolute; 
    vertical-align: middle;
    z-index: 2;
}

ol {
    list-style: none;
    margin: 0 auto;
    padding: 0;
}

.month-item {
    margin: 0;
    width: 278px;
}

.month-item:hover {
    cursor: pointer;
    filter: brightness(50%);
}

.link {
    margin: 0 ;
}

.item:hover .month-number {
    cursor: pointer;
    opacity: 1;
}

iframe {
    pointer-events: none;
}

.empty {
    background-color: gray;
    height: 278px;
    width: 278px;
}

.empty-number {
    opacity: 1;
}

</style>