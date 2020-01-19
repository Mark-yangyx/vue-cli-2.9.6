<template lang="pug">
	h1(@click="checkout()") 喝喝 {{checkoutStatus}} {{cartTotalPrice}}
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
	data() {
		return {

		}
	},
	computed: {
		...mapState({
			checkoutStatus: state => state.cart.checkoutStatus
		}),
		...mapGetters('cart', {
			cartTotalPrice: 'cartTotalPrice'
		})
	},
	methods: {
		checkout (products) {
			this.$store.dispatch('cart/checkout', 'products');
			this.$store.commit('loading/showLoading', true);
    }
	},
}
</script>

<style lang="stylus" scoped>
@import './index'
</style>