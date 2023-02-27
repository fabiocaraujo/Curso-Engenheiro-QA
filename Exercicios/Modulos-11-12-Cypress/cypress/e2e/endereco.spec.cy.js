var dados = require ('../fixtures/dados.json')
import EnderecoPage from '../support/Page-objects/Endereco.page'

describe('Funcionalidade endereço - Faturamento e Entrega', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
    cy.login(dados.usuario_01, dados.senha_01)
  });

  it('Deve preeencher endereco de faturamento com sucesso', () => {
    EnderecoPage.editarEnderecoFaturamento('Rodrigo', 'Fera', 'Goggle', 'Brasil', 'Avenida Higienópolis', 'Número 804', 'Londrina', 'Paraná', '86903-098', '43 999830023', 'rodrigo.fera@ebacshop.com')

    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
  });
  
});