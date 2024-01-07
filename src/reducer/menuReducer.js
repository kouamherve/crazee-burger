import { fakeMenu } from "../fakeData/fakeMenu";

export const menuReducer = (state, action) => {
  switch (action.type) {
    case "added": {
      return [
        {
          id: action.id,
          title: action.title,
          imageSource: action.image,
          price: action.price,
        },
        ...state,
      ];
    }
    case "deleted": {
      return state.filter((p) => p.id !== action.id);
    }
    case "reset": {
      return fakeMenu.LARGE;
    }
    default: {
      throw Error("Action inconnue : " + action.type);
    }
  }
};
