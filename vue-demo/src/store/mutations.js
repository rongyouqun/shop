import getters from './getters.js'

const state = {
	header:true,
	nav :true,
	loading:false
};
const  mutations = {
	showHeader(state){
                state.header = true
	},
	hideHeader(state){
                state.header = false
	},
	showNav(state){
                state.nav = true
	},
	hideNav(state){
                state.nav = false
	},
	showLoading(state){
                state.nav = true
	},
	hideLoading(state){
                state.nav = false
	}
}
export default {
	state,
	mutations,
	getters
}