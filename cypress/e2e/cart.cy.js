describe('Cart Page', () => {
  beforeEach(() => {
    cy.visit('/products')
    cy.get('.product-list-item').first().as('product')
    cy.get('@product').find('input[type="number"]').type('100')
    cy.get('@product').find('.btn-primary').click()
    cy.get('.cart').click()
  })

  it('displays the products added to the cart with the correct amount', () => {
    cy.get('.cart-item').first().as('cartItem')
    cy.get('@cartItem').should('have.length.greaterThan', 0)
    cy.get('@cartItem').find('.cart-item-amount').should('contain', '100')
  })

  it('displays the total price', () => {
    cy.get('.cart-total-price').should('contain', '$20.00')
  })
})
