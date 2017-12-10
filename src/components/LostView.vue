<template>
  <div class="has-text-centered box">
    <h1 class="title">Incorrect answer, you lost!</h1>
    <h2 class="subtitle">
      Correct answer: {{ currentQuestion.correctAnswer }}
    </h2>
    <hr>
    <div class="columns">
      <div class="column">
        <button class="button is-fullwidth">
          Try again
        </button>
      </div>
      <div class="column">
        <button class="button is-fullwidth">
          Main menu
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'LostView',
    data: () => {
      return {}
    },
    computed: {
      ...mapGetters({
        currentQuestion: 'currentQuestion'
      })
    }
  }
</script>
