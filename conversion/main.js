import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import {getTerms} from "./db";
const adapter = new LocalStorage('db')
export const lowDb = low(adapter)

lowDb.defaults({ terms: [], lastUpdated: 0 }).write()

let terms = lowDb.get("terms").value();
let lastUpdated = lowDb.get("lastUpdated").value();
export {lastUpdated};

export function setLastUpadtedToNow() {
    lastUpdated = Date.now();
    lowDb.set("lastUpdated", lastUpdated).write();
}

export function updateTerms() {

    getTerms().then(newTerms => {
        terms = newTerms;
        lowDb.set('terms', terms).write()
    }).catch((e) => {
        console.log("Firebase Error", e);
    })
}

/*export function translate (input) {

    let inputArr = input.split(" ");

    for (let index = 0; index < inputArr.length; index++) {
        let word = inputArr[index];

        for (let item of terms) {

            let dynamicRegExp = new RegExp(`${item.term.replace(".", "\\.")}`, "gisu");

            word = word.replace(dynamicRegExp, item.replaceString);
            inputArr[index] = word;

        }
    }

    return inputArr.join(" ");
}*/

export function translate (input) {
    input = " " + input;

    for (let item of terms) {

        let dynamicRegExp = new RegExp(`[\.\s]${item.term.replace(".", "\\.")}[\.\s]`, "gisu");

        if (item.regex !== "")
            dynamicRegExp = new RegExp(`${item.regex}`, "gsu");

        input = input.replace(dynamicRegExp, item.replaceString);
    }

    return input;
}
