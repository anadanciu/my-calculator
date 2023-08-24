import { Product, Action } from "./ShoppingCart";

export default function shoppingCartReducer(state: Product[], action: Action) {
  let newState: Product[] = [...state];

  switch (action.type) {
    case "ADD_ITEM": {
      let itemAlreadyInCart: Product | undefined = newState.find(
        (item) => item.name === action.payload.name
      );

      let newItem: Product = {
        id: Date.now(),
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity || 1,
        subtotal: (action.payload.quantity || 1) * action.payload.price,
      };

      if (itemAlreadyInCart) {
        // update quantity and subtotal
        itemAlreadyInCart.quantity += 1;
        itemAlreadyInCart.subtotal = Number(
          (itemAlreadyInCart.quantity * itemAlreadyInCart.price).toFixed(2)
        );
      } else {
        newState.push(newItem);
      }
      return newState;
    }
    case "REMOVE": {
      let accArr: Product[] = [];
      newState.reduce((accArr, item) => {
        if (item.name === action.payload.name) {
          item.quantity -= 1;
          item.subtotal = Number((item.quantity * item.price).toFixed(2));
        }
        if (item.quantity > 0) {
          accArr.push(item);
        }

        return accArr;
      }, accArr);
      return accArr;
    }
  }
  return state;
}
