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

    cy.novoUsuario(usuario, senha)

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

    cy.preCadastro(firstName, lastName, email, senha, novaSenha)

    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  });
  
});