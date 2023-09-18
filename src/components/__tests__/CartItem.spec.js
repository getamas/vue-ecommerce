import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom/vitest'

import CartItem from '@/components/CartItem.vue'

describe('CartItem.vue', () => {
  it('renders cart item with the correct info', () => {
    const item = {
      id: 1,
      name: 'Sample Product',
      price: 10,
      totalAmount: 5,
    }

    const { getByText, getByAltText } = render(CartItem, {
      props: {
        item,
      },
    })

    expect(getByAltText('Sample Product')).toBeInTheDocument()
    expect(getByText('Sample Product')).toBeInTheDocument()
    expect(getByText(`Order amount: ${item.totalAmount}`)).toBeInTheDocument()
    expect(getByText(`$${item.price * item.totalAmount}`)).toBeInTheDocument()
  })
})
