import {getTerms} from "./db";

export let store = {};

export function updateTerms(pStore) {

    store = pStore;

    getTerms().then(newTerms => {
        store.commit("terms/set", newTerms);
    }).catch((e) => {
        console.log("Firebase Error", e);
    })
}

export function translate (input) {
    input = " " + input;

    for (let item of store.state.terms.terms) {

        let dynamicRegExp = new RegExp("(?<=[.+ ])" + item.term.replace(".", "\\.") + "(?=[.+ ])", "gis");

        if (item.regex !== "")
            dynamicRegExp = new RegExp(`${item.regex}`, "gsu");

        if (item.term === "Sputum")
            console.log(input.match(dynamicRegExp), dynamicRegExp)

        input = input.replace(dynamicRegExp, item.replaceString);
    }

    return input;
}
