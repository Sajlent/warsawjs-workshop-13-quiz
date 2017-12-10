<template>
  <div class="box has-text-centered">
    <h1 class="title">Rules</h1>
    <section>
      Answer questions until you win! There will be <strong>{{ questions }}</strong> questions.
      Currently selected difficulty is <strong>{{ difficulty }}</strong>.
    </section>
    <hr>
    <div class="columns">
      <div class="column">
        <new-game></new-game>
      </div>
      <div class="column">
        <button class="button is-fullwidth">
          Settings
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RulesView',
    data: () => {
      return {
        questions: '10',
        difficulty: 'normal'
      }
    }
  }
</script>
