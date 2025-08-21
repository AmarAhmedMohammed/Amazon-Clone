import { Type } from "./action.type";

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      return {
          ...state,
          basket: [...state.basket, action.item]
      }
      break;

      // console.log(state.basket)
      //   existingItem = state.basket.product.find(
      //   (item) => item.id === action.item.id);
      
      //  console.log(existingItem);
      
    //   console.log(state.basket[0])
      // if (!existingItem) {
      //   // console.log("hello state basket")
      //   return {
      //     ...state,
      //     basket: [...state.basket, { ...action.item, amount: 1 }],
      //   };
      // } else {
      //   // console.log("hello updatebasket")
      //   const updatedBasket = state.basket.map((item) => {
      //     return item.id === action.item.id
      //       ? { ...item, amount: item.amount + 1 }
      //       : item;
      //   });

      //   return {
      //     ...state, 
      //     basket: updatedBasket,
      //   };
      // }
      break;
    case Type.REMOVE_FROM_BASKET:
        const index = state.basket.findIndex(item => item.id === action.id)
        let newBasket = [...state.basket]

        if(index >= 0) {
            if(newBasket[index].amount > 1) {
                newBasket[index] = {...newBasket[index], amount:newBasket[index].amount-1}
            }
            else {
                newBasket.slice(index,1)
            }
        }
        return {
            ...state,
            basket: newBasket
        }
    default:
      return state;
  }
};
