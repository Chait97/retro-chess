<template>
  <div class="w-2/3 bg-gray-700 text-gray-100">
    <table class="border-collapse border border-turquoise">
      <tr v-for="row in 8" :key="row">
        <td v-for="col in 8" :key="col ">
          <div class="h-16 w-16 p-0" :class="colorMe(row, col)">
            {{row}}, {{col}} 
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChessBoard',
  components: {
  },
  methods: {
    colorMe: function(i:number, j:number) {
      if (i % 2 == 0 && j % 2 == 1) {
        return {"bg-mango": true}
      }
      if (i % 2 == 1 && j % 2 == 0) {
        return {"bg-mango": true}
      }
      return {"bg-violet-b": true}
    }
  }
})
</script>