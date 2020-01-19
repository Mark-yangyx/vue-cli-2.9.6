<template lang="pug">
	div#app
		Loading(v-show="Loading")
		keep-alive
			router-view(v-if="$route.meta.keepAlive")
		router-view
</template>

<script>
import debugDev from '../static/js/dev-debug';
import Loading from './components/C-loading';
import { mapState } from 'vuex';
export default {
	name: 'App',
	data() {
		return {

		}
	},
	mounted(){
		if (process.env.NODE_ENV === 'development') {
			debugDev('https://cdn.jsdelivr.net/npm/eruda@1.5.4/eruda.min.js', () => {
				window.eruda.init();
			})
		}
	},
	computed: {
		...mapState({
			Loading: state => state.loading.loading
		})
	},
	components: {
		Loading
	}
}
</script>

<style lang="stylus">

</style>
