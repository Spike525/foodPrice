import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

import { PRODUCTS } from "./constants.js";

const firebaseConfig = JSON.parse(process.env.REACT_APP_SECRET)

const firebase = initializeApp(firebaseConfig);

const db = getFirestore(firebase);

export const fetchProductCatalog = async () => {
    const productCatalogList = []
    const productCatalog = await getDocs(collection(db, PRODUCTS))
    productCatalog.forEach(doc => productCatalogList.push(doc.data()))
    return productCatalogList
}
