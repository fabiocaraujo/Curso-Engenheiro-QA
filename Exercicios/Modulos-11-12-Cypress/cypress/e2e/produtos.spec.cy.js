describe('Funcionalidade página de produtos', () => {

  beforeEach(() => {
    cy.visit('produtos/')
  });

  it('Deve selecionar um produto da lista', () => {
    cy.get('.product-block')
    //.first().click()
    //.last().click()
    //.eq(5).click()
    .contains('Abominable Hoodie').click()
  })

  it.only('Deve adicionar produto ao carrinho', () => {
    var quantidade = 5

    cy.get('.product-block').contains('Abominable Hoodie').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie”')
  });

})