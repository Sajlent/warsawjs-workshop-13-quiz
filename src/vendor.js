import Vue from 'vue'
import NewGame from './components/NewGame.vue'

Vue.filter('currency', value => '$ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '))

Vue.component('new-game', NewGame)
