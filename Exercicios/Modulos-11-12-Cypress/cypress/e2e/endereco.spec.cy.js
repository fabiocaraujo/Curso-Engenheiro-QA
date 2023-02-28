var dados = require('../fixtures/dados.json')
import EnderecoPage from '../support/Page-objects/Endereco.page'
var endereco = require('../fixtures/enderecoFaturamento.json')

describe('Funcionalidade endereço - Faturamento e Entrega', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
    cy.login(dados.usuario_01, dados.senha_01)
  });

  it('Deve preeencher endereco de faturamento com sucesso - dados fixtures', () => {
    EnderecoPage.editarEnderecoFaturamento(
      endereco[0].nome,
      endereco[0].sobrenome,
      endereco[0].empresa,
      endereco[0].pais,
      endereco[0].endereco,
      endereco[0].numero,
      endereco[0].cidade,
      endereco[0].estado,
      endereco[0].cep,
      endereco[0].telefone,
      endereco[0].email
    )
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
  });

  it('Deve preeencher endereco de entrega com sucesso - dados fixtures', () => {
    EnderecoPage.editarEnderecoEntrega(
      endereco[1].nome,
      endereco[1].sobrenome,
      endereco[1].empresa,
      endereco[1].pais,
      endereco[1].endereco,
      endereco[1].numero,
      endereco[1].cidade,
      endereco[1].estado,
      endereco[1].cep
    )
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
  });

});