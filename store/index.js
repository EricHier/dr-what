export const strict = false

export const state = () => ({
  terms: [],
  loading: true,
  shown: false,
  input: null,
  index: -1,
  output: []
})

export const mutations = {
  setTerms: (state, terms) => state.terms = terms,
  setShown: (state, shown) => state.shown = shown,
  setLoading: (state, loading) => state.loading = loading,
  setSelectedIndex: (state, index) => state.index = index,
  setInput: (state, input) => {

    state.output = [];
    state.output = state.terms.map(term => {

      if (!term || term.term.length === 0) return;

      const index = input.indexOf(term.term);

      return index > -1 ? {
        explanation: term.explanation || term.replaceString,
        index,
        term: term.term,
        length: term.term.length
      } : null;

    }).filter(a => !!a).sort((a, b) => (a.index > b.index) ? 1 : ((b.index > a.index) ? -1 : 0));

    state.input = input;
  },
}
