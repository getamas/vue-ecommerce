import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),
  getters: {},
  actions: {
    async fetchProducts() {
      if (this.products.length) {
        return
      }

      this.loading = true

      try {
        const response = await fetch(import.meta.env.VITE_API_PRODUCTS_URL)

        if (!response.ok) {
          throw new Error('Error occured while fetching products')
        }

        const data = await response.json()
        this.products = data
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },
    setProductAvailableAmount(product) {
      const storedProduct = this.products.find(item => item.id === product.id)
      storedProduct.availableAmount -= product.totalAmount
    },
  },
})
