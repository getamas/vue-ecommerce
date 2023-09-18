describe('Product Page', () => {
  beforeEach(() => {
    cy.visit('/products')
    cy.get('.product-list-item').first().as('product')
  })

  it('adding less than the min order amount should not be possible', () => {
    cy.get('@product').find('input[type="number"]').type('5')
    cy.get('@product').find('.btn-primary').should('be.disabled')
  })

  it('adding more than the total amount should not be possible.', () => {
    cy.get('@product').find('input[type="number"]').type('10000')
    cy.get('@product').contains('Order amount exceeds in stock items.')
    cy.get('@product').find('.btn-primary').should('be.disabled')
  })

  it('should allow adding a product to the cart', () => {
    cy.get('@product').find('input[type="number"]').type('100')
    cy.get('@product').find('.btn-primary').click()
    cy.get('@product').find('.product-list-item-text').should('contain', 'In Stock: 900')
    cy.get('.cart').should('contain', '1')
  })
})
