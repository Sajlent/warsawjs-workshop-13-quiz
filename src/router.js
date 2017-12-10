import Vue from 'vue'
import Router from 'vue-router'
import NarrowLayout from './components/NarrowLayout.vue'
import IntroView from './components/IntroView.vue'
import RulesView from './components/RulesView.vue'
import PlayView from './components/PlayView.vue'
import WonView from './components/WonView.vue'
import LostView from './components/LostView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IntroView,
      name: 'intro'
    },
    {
      path: '/',
      component: NarrowLayout,
      children: [
        {
          path: '/rules',
          component: RulesView,
          name: 'rules'
        },
        {
          path: '/won',
          component: WonView,
          name: 'won'
        },
        {
          path: '/lost',
          component: LostView,
          name: 'lost'
        }
      ]
    },
    {
      path: '/play',
      component: PlayView,
      name: 'play'
    }
  ]
})
