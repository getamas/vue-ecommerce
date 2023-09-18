import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    totalPrice(state) {
      const total = state.cartItems.reduce((accumulator, item) => {
        return accumulator + item.price * item.totalAmount
      }, 0)

      return total.toFixed(2)
    },
    totalItems(state) {
      return state.cartItems.length
    },
  },
  actions: {
    addCartItem(product) {
      const cartItem = this.cartItems.find(item => item.id === product.id)

      if (cartItem) {
        cartItem.totalAmount += product.totalAmount
      } else {
        this.cartItems.push(product)
      }
    },
  },
})
