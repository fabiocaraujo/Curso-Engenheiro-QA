var dados = require ('../fixtures/dados.json')

describe('Funcionalidade endereço - Faturamento e Entrega', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
    cy.login(dados.usuario_01, dados.senha_01)
  });

  it('Deve preeencher endereco de faturamento com sucesso', () => {
    
    
  });
  
});