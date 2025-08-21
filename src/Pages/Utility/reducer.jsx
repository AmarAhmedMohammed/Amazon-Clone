import { Type } from "./action.type";

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {

  switch (action.type) {
    case Type.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => { item.id === action.id});
      let newBasket = [...state.basket];

      if (true) {
        newBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};
