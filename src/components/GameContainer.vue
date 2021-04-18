<template>
  <div class="w-2/3 bg-gray-700 text-gray-100">
    <h1 class="text-2xl font-light text-radicalred p-12 text-shadow-neon_violet">Chess Board</h1>
    <div class="h-64 w-64 block" ref="boardContainer"></div>
    <chess-board class="mx-auto"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import ChessBoard from './ChessBoard.vue'

export default defineComponent({
	name: 'GameContainer',
	components: {
		ChessBoard: ChessBoard,
	},
	mounted() {
		this.initBoard()
	},
	methods: {
		initBoard: function () {
			console.log(chessboard)
		}
	}
})
</script>