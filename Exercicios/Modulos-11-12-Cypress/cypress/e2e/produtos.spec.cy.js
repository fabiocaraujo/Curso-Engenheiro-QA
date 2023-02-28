describe('Funcionalidade página de produtos', () => {

  beforeEach(() => {
    cy.visit('produtos/')
  });

  it('Deve selecionar um produto e adicionar produto ao carrinho', () => {
    var quantidade = 5
    var produto = 'Abominable Hoodie'
    var tamanho = 'M'
    var cor = 'Green'

    cy.selecionarProduto(produto)

    cy.addProdutos(quantidade, tamanho, cor)

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie”')
  });

})