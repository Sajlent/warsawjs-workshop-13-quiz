<template>
  <button @click="startNewGame" class="button">
    <span v-if="!loading">New Game</span>
    <span v-else>Loading...</span>
  </button>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      startNewGame() {
        this.loading = true
        this.$store.dispatch('initGame').then(() => {
          this.loading = false
          this.$router.push({name: 'play'})
        })
      }
    }
  }
</script>
