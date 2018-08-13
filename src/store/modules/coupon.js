const state = {
	list: [{
        id: 1,
        name: '新人礼-卢克券',
        start_at: '1489104000',
        end_at: 1514592000,
        value: 150,
        denominations: 150,
        origin_condition: 0
    }, {
        id: 2,
        name: '老人礼-卢克券',
        start_at: '1489104000',
        end_at: 1514592000,
        value: 250,
        denominations: 250,
        origin_condition: 0
    }]
}

const getters = {
}

const mutations = {
    getCoupon (state, data) {
        state.list = data
    }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}