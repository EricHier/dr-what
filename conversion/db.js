import { db } from "./firebase-init";
import {lowDb, setLastUpadtedToNow} from "./main";

export async function upload(translations) {
    await deleteAll();

    lowDb.set('terms', translations).write()
    setLastUpadtedToNow();

    translations.forEach((item) => {
        db.collection("terms").doc().set(item).then(r => console.log("Success for ", item.term));
    })
}

export async function deleteAll() {
    let snapshot = await db.collection("terms").get();

    snapshot.forEach((doc) => {
        db.collection("terms").doc(doc.id).delete();
    });
}

export function getTerms() {
    return new Promise((resolve, reject) => {

       db.collection("terms").get().then(snapshot => {

           let translations = [];

           for (const doc of snapshot.docs) {
               translations.push(doc.data());
           }

           console.log(JSON.stringify(translations));

           resolve(translations);

       }).catch((e) => {
           reject(e);
       })

    });
}
