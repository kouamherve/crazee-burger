export const menuReducer = (menu, action) => {
  switch (action.type) {
    case "added": {
      return [
        {
          id: action.id,
          title: action.title,
          imageSource: action.image,
          price: action.price,
        },
        ...menu,
      ];
    }
    case "deleted": {
      return menu.filter((p) => p.id !== action.id);
    }
    default: {
      throw Error("Action inconnue : " + action.type);
    }
  }
};
