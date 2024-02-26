import { doc, setDoc } from "firebase/firestore";
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
