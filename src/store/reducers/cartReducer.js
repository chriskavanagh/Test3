import {initialState as data} from '../data';

const initialState = {
  items: data.items,
  cart: [],
  subTotal: +(0).toFixed(2),
  total: +(0).toFixed(2),
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      // find item in menu
      let addedItem = state.items.find((item) => item.id === action.payload.id);

      // check if item is already in cart
      let existed_item = state.cart.find(
        (item) => action.payload.id === item.id,
      );
      if (existed_item) {
        console.log(`Existing ${JSON.stringify(existed_item)}`);
        //existed_item.quantity += 1;
        let tax = state.subTotal * 0.093;
        let sub = state.subTotal + existed_item.price;
        let final = sub + tax;
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === existed_item.id
              ? {...existed_item, quantity: existed_item.quantity + 1}
              : item,
          ),
          // subTotal: state.subTotal + addedItem.price,
          subTotal: state.subTotal + existed_item.price,
          total: final,
        };
      } else {
        addedItem.quantity = action.payload.quantity;
        addedItem.notes = action.payload.notes;
        let newTotal =
          state.subTotal + addedItem.price * action.payload.quantity;
        //let tax = newTotal * 0.093; // this works

        return {
          ...state,
          cart: [...state.cart, addedItem],
          //subTotal: newTotal + tax, // this works
          subTotal: newTotal,
          total: (newTotal += newTotal * 0.093),
        };
      }
    case 'ADD_QUANTITY':
      let add_cart_item = state.cart.find(
        (item) => action.payload.id === item.id,
      );
      let tax = (state.subTotal + add_cart_item.price) * 0.093;
      let sub = state.subTotal + add_cart_item.price;
      let final = tax + sub;
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
        subTotal: state.subTotal + add_cart_item.price,
        total: final,
      };
    case 'REMOVE_ITEM':
      let inCart = state.cart.find((item) => action.payload.id === item.id);
      let itemTotal = inCart.quantity * inCart.price.toFixed(2);
      //let tax = (state.subTotal - inCart.price) * 0.093;
      let RIsub = state.subTotal - itemTotal;
      let RItax = RIsub * 0.093;
      let RIfinal = RIsub + RItax;

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        subTotal: state.subTotal - itemTotal,
        total: RIfinal,
      };
    case 'REMOVE_QUANTITY':
      let sub_cart_item = state.cart.find(
        (item) => action.payload.id === item.id,
      );
      let Rtax = (state.subTotal - sub_cart_item.price) * 0.093;
      let Rsub = state.subTotal - sub_cart_item.price;
      let Rfinal = Rtax + Rsub;
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity:
                  item.quantity <= 1 ? item.quantity - 0 : item.quantity - 1,
              }
            : item,
        ),
        subTotal: state.subTotal - sub_cart_item.price,
        total: Rfinal,
      };

    default:
      return state;
  }
}

export default cartReducer;
