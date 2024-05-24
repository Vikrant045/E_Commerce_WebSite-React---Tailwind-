import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartArr: [],
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {                            // add to cart
      let { id,price } = action.payload
      const isItem_Exist = state.cartArr.find((item) => item.id == id);
      if (isItem_Exist) {
        alert("Already in the cart.. please view the cart")
      }
      else {
        state.cartArr = [...state.cartArr, action.payload];

        state.totalPrice += price;
      }

      console.log("state.cartArr", state.cartArr)
    },

    removeItem: (state, action) => {                            // remove item
      const { id, price,quantity } = action.payload;

      console.log("item id ", id);

      state.totalPrice -= price*quantity;

      state.cartArr = state.cartArr.filter((item) => item.id !== id);
      console.log("store  inside",state.cartArr.length==0)
    },

    clearCart: (state,action) => {                                                   // Clear the cart array
      state.cartArr = [];
      state.totalPrice = 0;
    }
      ,
    decreaseQuantity : (state,action)=>{                                            //decrease Quantitiy
         const {id,price}= action.payload;
         const currItem = state.cartArr.find((item) => item.id == id);
        const currQuantity= currItem.quantity-1
         if(currQuantity<=0){
          currItem.quantity=1;
         }
        else{
          currItem.quantity=currQuantity;
          state.totalPrice = state.totalPrice-price
        }


    },
    increaseQuantity:(state,action)=>{                                             //increase Quantity
      const {id,price}= action.payload;
      const currItem = state.cartArr.find((item) => item.id == id);     
      currItem.quantity++;
      state.totalPrice+=price;
    }

  },
})

export const { addToCart, clearCart, removeItem,decreaseQuantity,increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;