import {db} from "./firebase-init";
import {store} from "./main";

export async function upload(translations) {

  store.commit("terms/set", translations);

  db.collection("data").doc("terms").set({
    terms: JSON.stringify(translations)
  }).then(() => console.log("Success"));
}

export function getTerms() {
  return new Promise((resolve, reject) => {

    db.collection("data").doc("terms").get().then(doc => {

      let translations = JSON.parse(doc.data().terms);

      translations.forEach((translation) => {
        translation.regex = translation.regex.replace(/\//g, "")//.replace(/\s/g, "\\s");
      })

      translations.sort((a, b) => {
        if (a.regex.length < b.regex.length)
          return -1;
        else
          return 1;
      })

      console.log(translations);

      resolve(translations);

    }).catch((e) => {
      reject(e);
    })

  });
}
