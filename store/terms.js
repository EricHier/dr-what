export const state = () => ({
  terms: [{}]
})

export const mutations = {
  set (state, terms) {
    state.terms = terms;
  }
}

export const getters = {
  get (state) {
    return state.terms
  }
}
