import { faker } from '@faker-js/faker';

describe('Funcionalidadae pré-cadastro', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
  });

  it('Preencher o pré-cadastro com sucesso', () => {
    var usuario = faker.internet.email()
    var senha = faker.internet.password()
    var firstName = faker.name.firstName()
    var lastName = faker.name.firstName()
    var email = faker.internet.email(firstName)
    var novaSenha = faker.internet.password()

    cy.get('#reg_email').type(usuario)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(firstName)
    cy.get('#account_last_name').type(lastName)
    cy.get('#account_display_name').clear().type(firstName + lastName)
    cy.get('#account_email').clear().type(email)
    cy.get('#password_current').type(senha)
    cy.get('#password_1').type(novaSenha)
    cy.get('#password_2').type(novaSenha)
    cy.get('.woocommerce-Button').click()

    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  });
  
});