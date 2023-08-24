import { useReducer } from "react";
import shoppingCartReducer from "./shoppingCartReducer";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}
const items: Product[] = [
  {
    id: 0,
    name: "apple",
    price: 0.39,
    quantity: 0,
    subtotal: 0,
  },
  {
    id: 1,
    name: "banana",
    price: 0.79,
    quantity: 0,
    subtotal: 0,
  },
  {
    id: 2,
    name: "cherry tomatoes",
    price: 3.99,
    quantity: 0,
    subtotal: 0,
  },
];

export type Action = {
  type: string;
  payload: {
    name: string;
    price: number;
    quantity?: number;
  };
};

interface Props {
  handleAdd: () => void;
}

const ShoppingCart: React.FC<Props> = () => {
  const cartItems: Product[] = [];
  let [results, dispatch] = useReducer(shoppingCartReducer, cartItems);
  let acc: number = 0;
  let total = Number(
    results.reduce((acc, item) => acc + item.subtotal, 0).toFixed(2)
  );

  function handleAdd(name: string, price: number, quantity: number) {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        name,
        price,
        quantity,
      },
    });
  }

  function handleRemove(name: string, price: number) {
    dispatch({
      type: "REMOVE",
      payload: {
        name,
        price,
      },
    });
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="items">
          <h2>Items</h2>
          {items.map((item) => (
            <div key={"items-" + item.id} id={"items-" + item.id}>
              <h3 data-testid="h3">{item.name}</h3>
              <p data-testid="p">${item.price}</p>
              <button
                data-testid="handleAdd"
                onClick={() => handleAdd(item.name, item.price, item.quantity)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {results.map((item: Product) => (
            <div key={"cart-" + item.id} className={"cart-" + item.id}>
              <h3>{item.name}</h3>
              <p>
                <button
                  data-testid="handleRemove"
                  onClick={() => {
                    handleRemove(item.name, item.price);
                  }}
                >
                  -
                </button>
                {item.quantity}
                <button
                  data-testid="handleAdd"
                  onClick={() =>
                    handleAdd(item.name, item.price, item.quantity)
                  }
                >
                  +
                </button>
              </p>
              <p>Subtotal: ${item.subtotal}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        <h2>Total: ${total}</h2>
      </div>
    </div>
  );
};

export default ShoppingCart;
