import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { serviceAccount } from "../serviceAccount.js";

initializeApp({//connecting to our our api project specified in service account file
    credential: cert(serviceAccount),
})

export const db = getFirestore()//connects to the db in this project