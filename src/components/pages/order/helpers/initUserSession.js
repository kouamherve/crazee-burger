import { getMenu } from "../../../../api/product";
import { getLocalStorage } from "../../../../utils/window";

const initMenu = async (setMenu, username) => {
  const menuReceived = await getMenu(username);
  setMenu(menuReceived);
};

const initBasketMenu = (setBasketMenu, username) => {
  const basketMenuReceived = getLocalStorage(username);
  if (basketMenuReceived) {
    setBasketMenu(basketMenuReceived);
  }
};

export const initUserSession = async (setMenu, setBasketMenu, username) => {
  await initMenu(setMenu, username);
  initBasketMenu(setBasketMenu, username);
};
