import { faker } from '@faker-js/faker';

describe('Cadastrar usuário', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('Cadastrar usuario com sucesso', () => {
    var usuario = faker.internet.email()
    var senha = faker.internet.password()

    cy.get('#reg_email').type(usuario)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')
  });
  
});