import Vue from 'vue'
import Router from 'vue-router'
import DayView from '@/components/DayView'
import MonthView from '@/components/MonthView'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DayView',
      component: DayView
    },
    {
      path: '/month',
      name: 'MonthView',
      component: MonthView
    }
  ]
})