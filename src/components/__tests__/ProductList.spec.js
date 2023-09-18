import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { render } from '@testing-library/vue'
import '@testing-library/jest-dom/vitest'

import ProductList from '@/components/ProductList.vue'

describe('ProductList.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders a list of product items', () => {
    const products = [
      {
        id: 1,
        name: 'Product 1',
        price: 10,
        availableAmount: 20,
        minOrderAmount: 5,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 15,
        availableAmount: 30,
        minOrderAmount: 10,
      },
    ]

    const { getAllByText } = render(ProductList, {
      props: {
        products,
      },
      global: {
        plugins: [createTestingPinia()],
      },
    })

    expect(getAllByText(/Product \d/)).toHaveLength(2)
  })
})
