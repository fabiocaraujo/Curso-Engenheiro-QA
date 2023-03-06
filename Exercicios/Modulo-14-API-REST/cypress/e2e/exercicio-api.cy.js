/// <reference types="cypress" />

import contrato from '../contratos/usuarios.contrato'
import { faker } from '@faker-js/faker';

describe('Testes da Funcionalidade Usuários', () => {

     var token

     before(() => {
          var email = 'rodrigo01.fera@ebac.br'
          var password = 'rodrigo.teste'

          cy.loginToken(email, password).then(tkn => { token = tkn })
     });

     it('Deve validar contrato de usuários', () => {
          cy.request('usuarios').then(response => {
               return contrato.validateAsync(response.body)
          })
     });

     it('Deve listar usuários cadastrados', () => {
          cy.request({
               method: 'GET',
               url: 'usuarios',
          }).then((response) => {
               expect(response.status).to.equal(200)
          })
     });

     it('Deve cadastrar um usuário com sucesso', () => {
          var nome = faker.internet.userName()
          var email = faker.internet.email()
          var senha = faker.internet.password()

          cy.cadUsuario(nome, email, senha)
     });

     it('Deve validar um usuário com email inválido', () => {
          cy.request({
               method: 'POST',
               url: 'usuarios',
               failOnStatusCode: false, // linha de comando para validar um teste de erro (cenário negativo)
               body: {
                    "nome": 'Rodrigo Fera Megane',
                    "email": 'rodrigo01.fera@ebac.br',
                    "password": 'rodrigo.teste',
                    "administrador": "true"
               }
          }).then((response) => {
               expect(response.status).to.equal(400)
               expect(response.body.message).to.equal('Este email já está sendo usado')
          })
     });

     it('Deve editar um usuário previamente cadastrado', () => {
          var nome = faker.internet.userName()
          var email = faker.internet.email()
          var senha = faker.internet.password()

          cy.cadUsuario(nome, email, senha)
          .then(response => {
               var id = response.body._id

               cy.request({
                    method: 'PUT',
                    url: `usuarios/${id}`,
                     body: {
                         "nome": nome + ' - Nome alterado',
                         "email": email,
                         "password": "teste",
                         "administrador": "true"
                    }
               }).then((response) => {
                    expect(response.status).to.equal(200)
                    expect(response.body.message).to.equal('Registro alterado com sucesso')
               })
          })
     });

     it('Deve deletar um usuário previamente cadastrado', () => {
          var nome = faker.internet.userName()
          var email = faker.internet.email()
          var senha = faker.internet.password()

          cy.cadUsuario(nome, email, senha)
          .then(response => {
               var id = response.body._id

               cy.request({
                    method: 'DELETE',
                    url: `usuarios/${id}`,
                    
               }).then((response) => {
                    expect(response.status).to.equal(200)
                    expect(response.body.message).to.equal('Registro excluído com sucesso')
               })
          })
     });
});
