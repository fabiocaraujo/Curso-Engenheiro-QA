var dados = require ('../fixtures/dados.json')

describe('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
  });

  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type(dados.usuario_01)
    cy.get('#password').type(dados.senha_01, {log:false})
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
  });

  it('Usuário inválido - deve exibir mensagem de erro', () => {
    cy.get('#username').type('alunoxx01_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
  });

  it('Senha inválida - deve exibir mensagem de erro', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste01@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')
  });
  
});