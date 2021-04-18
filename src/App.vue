<template>
  <div class="bg-gray-900 h-screen py-12">
    <panel class="mx-auto rounded-lg"/>
    <game-container class="mx-auto"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Panel from './components/Panel.vue'
import GameContainer from './components/GameContainer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Panel: Panel,
    GameContainer: GameContainer
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>