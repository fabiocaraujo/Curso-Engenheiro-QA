/*  Como cliente 
       Quero acessar a Loja EBAC 
       Para fazer um pedido de 4 produtos 
       Fazendo a escolha dos produtos
       Adicionando ao carrinho
       Preenchendo todas opções no checkout
       E validando minha compra ao final */

var dadosSensiveis = require('../fixtures/dadosSensiveis.json')
import dadosCheckout from '../support/Pageobjects/dadosCheckout';
var checkout = require('../fixtures/dadoschekout.json')

describe('TESTE E2E EBACSHOP - COMPRA DE PRODUTOS ', () => {

  beforeEach(() => {
    cy.visit('produtos')
    cy.login(dadosSensiveis.usuario, dadosSensiveis.senha)
    cy.get('#primary-menu > .menu-item-629 > a').click()
  });

  it('Deve selecionar produto 01/04 e adicionar ao carrinho', () => {
    var produto = 'Abominable Hoodie'
    var tamanho = 'M'
    var cor = 'Blue'
    var quantidade = '4'

    cy.get(':nth-child(1) > .page-numbers').click()

    cy.selProduto(produto, tamanho, cor, quantidade)
    cy.get('.product-name > a').should('contain', produto)
  });

  it('Deve selecionar produto 02/04 e adicionar ao carrinho', () => {
    var produto = 'Ajax Full-Zip Sweatshirt'
    var tamanho = 'XL'
    var cor = 'Blue'
    var quantidade = '2'

    cy.get(':nth-child(1) > .page-numbers').click()

    cy.selProduto(produto, tamanho, cor, quantidade)
    cy.get('.product-name > a').should('contain', produto)
  });

  it('Deve selecionar produto 03/04 e adicionar ao carrinho', () => {
    var produto = 'Arcadio Gym Short'
    var tamanho = '33'
    var cor = 'Red'
    var quantidade = '1'

    cy.get(':nth-child(1) > .page-numbers').click()

    cy.selProduto(produto, tamanho, cor, quantidade)
    cy.get('.product-name > a').should('contain', produto)
  });

  it('Deve selecionar produto 04/04 e adicionar ao carrinho', () => {
    var produto = 'Autumn Pullie'
    var tamanho = 'M'
    var cor = 'Green'
    var quantidade = '2'

    cy.get(':nth-child(2) > .page-numbers').click()

    cy.selProduto(produto, tamanho, cor, quantidade)
    cy.get('.product-name > a').should('contain', produto)
  });


  it('Deve conferir produto e ir para checkout', () => {
    cy.checkout()
    cy.get('.page-title').should('contain', 'Checkout')
  });

  it('Deve preencher o chekout e finalizar a compra', () => {
    dadosCheckout.preencherCheckout(
      checkout[1].nome,
      checkout[1].sobrenome,
      checkout[1].empresa,
      checkout[1].pais,
      checkout[1].endereco,
      checkout[1].numero,
      checkout[1].cidade,
      checkout[1].estado,
      checkout[1].cep,
      checkout[1].telefone,
      checkout[1].email,
    )
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
  });

})

