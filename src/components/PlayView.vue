<template>
  <play-layout>
    <div slot="title" class="has-text-centered">
      <h1 class="title">Currently won: <strong>{{ cash | currency }} </strong></h1>
      <h2 class="subtitle">Round {{ currentRound + 1 }} of {{ maxRounds }}</h2>
    </div>
    <transition name="flip" mode="out-in" slot="content">
      <game v-if="currentQuestion" :question="currentQuestion" @answered="answerQuestion" :key="currentRound" class="box"></game>
    </transition>
      <questions-bar slot="sidebar" :questions="questions.slice().reverse()"></questions-bar>
  </play-layout>
</template>

<script>
  import QuestionsBar from './QuestionsBar.vue'
  import Game from './Game.vue'
  import PlayLayout from './PlayLayout.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'PlayView',
    data: () => {
      return {}
    },
    components: { QuestionsBar, Game, PlayLayout },
    computed: {
      ...mapGetters({
        questions: 'questions',
        cash: 'cash',
        currentRound: 'currentRound',
        status: 'status',
        currentQuestion: 'currentQuestion',
        maxRounds: 'maxRounds'
      })
    },
    methods: {
      answerQuestion (index) {
        this.$store.commit('submitAnswer', index)
        if (this.currentRound === this.maxRounds) {
          this.$router.push({name: 'won'})
        } else {
          // this.$router.push({name: 'won'})
        }
      }
    }
  }
</script>

