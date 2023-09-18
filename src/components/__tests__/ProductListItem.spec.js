import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { render, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom/vitest'

import ProductListItem from '@/components/ProductListItem.vue'
import { useCartStore } from '@/stores/cart'

describe('ProductListItem.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders product info and handles adding to cart', async () => {
    const product = {
      id: 1,
      name: 'Sample Product',
      price: 10,
      availableAmount: 30,
      minOrderAmount: 5,
    }

    const { getByText, getByTestId, getByLabelText } = render(ProductListItem, {
      props: {
        product,
      },
      global: {
        plugins: [createTestingPinia()],
      },
    })

    const cartStore = useCartStore()

    expect(getByText('Sample Product')).toBeInTheDocument()
    expect(getByText(`$${product.price}`)).toBeInTheDocument()
    expect(getByText(`In Stock: ${product.availableAmount}`)).toBeInTheDocument()
    expect(getByText(`Min order amount: ${product.minOrderAmount}`)).toBeInTheDocument()

    const inputElement = getByLabelText('Order amount')
    const addToCartButton = getByTestId('add-to-cart-button')

    await fireEvent.update(inputElement, '10')
    await fireEvent.click(addToCartButton)

    const cartItem = {
      ...product,
      totalAmount: 10,
    }

    expect(cartStore.addCartItem).toHaveBeenCalledWith(cartItem)
  })
})
