import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (username) => {
  const docRef = doc(db, "users", username);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    console.log("userReceived:", userReceived);
    return userReceived;
  }
};

export const setUser = (username) => {
  const docRef = doc(db, "users", username);
  const newUser = {
    username: username,
    menu: fakeMenu.LARGE,
  };

  setDoc(docRef, newUser);
  console.log("New user:", newUser);
};

export const authenticateUser = async (username) => {
  const existingUser = await getUser(username);
  console.log("existingUser:", existingUser);

  if (!existingUser) {
    setUser(username);
  }
};
