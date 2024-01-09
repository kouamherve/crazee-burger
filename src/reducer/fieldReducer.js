const DEFAULT_PRODUCT = {
  id: "",
  title: "",
  image: "",
  price: 0,
};

export const fieldReducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.field]: action.value };
    case "reset": {
      return DEFAULT_PRODUCT;
    }
    default:
      return state;
  }
};
