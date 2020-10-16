import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBabyCarriage,
  faBalanceScaleLeft,
  faCalendarDay,
  faClock,
  faRuler,
  faVenusMars,
  faWeightHanging
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faRuler,
  faVenusMars,
  faWeightHanging,
  faBalanceScaleLeft,
  faCalendarDay,
  faClock,
  faBabyCarriage
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
