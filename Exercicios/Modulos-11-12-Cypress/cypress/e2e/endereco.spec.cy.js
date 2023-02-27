var dados = require ('../fixtures/dados.json')

describe('Funcionalidade endereço - Faturamento e Entrega', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
    cy.login(dados.usuario, dados.senha)
  });

  it('Deve preeencher endereco de faturamento com sucesso', () => {
    
    
  });
  
});