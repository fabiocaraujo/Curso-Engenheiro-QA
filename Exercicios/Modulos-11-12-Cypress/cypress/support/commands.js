// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('novoUsuario', (usuario, senha) => {
    cy.get('#reg_email').type(usuario)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
})

Cypress.Commands.add('preCadastro', (firstName, lastName, email, senha, novaSenha) => {
    cy.get('#account_first_name').type(firstName)
    cy.get('#account_last_name').type(lastName)
    cy.get('#account_display_name').clear().type(firstName + ' ' + lastName)
    cy.get('#account_email').clear().type(email)
    cy.get('#password_current').type(senha)
    cy.get('#password_1').type(novaSenha)
    cy.get('#password_2').type(novaSenha)
    cy.get('.woocommerce-Button').click()
})

Cypress.Commands.add('selecionarProduto', (produto) => {
    cy.get('.product-block')
    //.first().click()
    //.last().click()
    //.eq(5).click()
    .contains(produto).click()
})

Cypress.Commands.add('addProdutos', (quantidade, tamanho, cor) => {
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
})





