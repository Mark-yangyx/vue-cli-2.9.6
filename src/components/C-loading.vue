<template lang="pug">
	div.loading-class
		img(src="static/images/commons/loading.gif" alt="loading...")
</template>

<script>
export default {
	data() {
		return {

		}
	}
}
</script>

<style lang="stylus" scoped>
.loading-class
	position fixed
	top 0
	left 0
	z-index 999
	width 100%
	height 100%
	background rgba(0,0,0,0.3)
	display table-cell
	vertical-align middle
	text-align center
.loading-class img
	width crem(200)
	height crem(150)
	position fixed
	left 50%
	top 50%
	margin-left crem(-100)
	margin-top crem(-250)
</style>