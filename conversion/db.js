import {db} from "./firebase-init";
import {lowDb, setLastUpadtedToNow} from "./main";

export async function upload(translations) {

  lowDb.set('terms', translations).write()
  setLastUpadtedToNow();

  db.collection("data").doc("terms").set({
    terms: JSON.stringify(translations)
  }).then(() => console.log("Success"));
}

export function getTerms() {
  return new Promise((resolve, reject) => {

    db.collection("data").doc("terms").get().then(doc => {

      let translations = JSON.parse(doc.data().terms);

      console.log(translations);

      resolve(translations);

    }).catch((e) => {
      reject(e);
    })

  });
}
