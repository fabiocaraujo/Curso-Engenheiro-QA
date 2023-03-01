 /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

var dadosSensiveis = require ('../fixtures/dadosSensiveis.json')

describe('TESTE E2E EBACSHOP - COMPRA DE PRODUTOS ', () => {
   
  beforeEach(() => {
    cy.visit('produtos')
    cy.login(dadosSensiveis.usuario, dadosSensiveis.senha)
  });

  it('Deve selecionar produtos e adicionar ao carrinho', () => {
    var produto = 'Abominable Hoodie'
    var tamanho = 'M'
    var cor = 'Blue'
    var quantidade = '4'
  
    cy.selProduto(produto, tamanho, cor, quantidade)
    cy.get('.product-name > a').should('contain', produto)
  });

  it('Deve conferir produto e ir para checkout', () => {
    cy.checkout()
    cy.get('.page-title').should('contain', 'Checkout')
  });

  it('Deve fazer chekout', () => {
    
  });



})

