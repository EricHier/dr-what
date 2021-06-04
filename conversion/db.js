import { db } from "./firebase-init";

export function getTerms() {
  return new Promise((resolve, reject) => {

    db.collection("data").doc("terms").get().then(doc => {

      let translations = JSON.parse(doc.data().terms);

      resolve(translations);

    }).catch((e) => {
      reject(e);
    })

  });
}
