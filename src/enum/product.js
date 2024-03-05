import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../api/firebase-config";

export const DEFAULT_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export const DEFAULT_IMAGE = "/images/coming-soon.png";

export const syncBothMenus = (username, menuUpdated) => {
  const docRef = doc(db, "users", username);
  const user = {
    username: username,
    menu: menuUpdated,
  };
  setDoc(docRef, user);
};

export const getMenu = async (username) => {
  const docRef = doc(db, "users", username);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();
    return menu;
  }
};
