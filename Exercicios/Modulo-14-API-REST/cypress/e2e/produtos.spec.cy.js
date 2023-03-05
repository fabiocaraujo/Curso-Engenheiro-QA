import { faker } from '@faker-js/faker';
import contrato from '../contratos/produtos.contratos'

describe('Testes API produtos Serverest', () => {

  var token

  before(() => {
    var email = 'rodrigo01.fera@ebac.br'
    var password = 'rodrigo.teste'

    cy.loginToken(email, password).then(tkn => { token = tkn })
  });

  it.only('Deve validade contrato de produtos', () => {
    cy.request('produtos').then(response => {
      return contrato.validateAsync(response.body)
    })
    
  });

  it('Deve listar produtos cadastrados', () => {
    cy.request({
      method: 'GET',
      url: 'Produtos',
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.produtos[1].nome).to.equal('Produto EBAC 505545')
      expect(response.body).to.have.property('produtos')
      expect(response.duration).to.be.lessThan(20)
    })
  })

  it('Cadastrar produtos válido', () => {
    //var produto = faker.vehicle.vehicle() //---> cadastrndo produtos diferentes com dados faker
    var produto = `Produto EBAC ${Math.floor(Math.random() * 1000)}` //---> cadastrndo produtos diferentes com número randômico
    var preco = '100'
    var descricao = 'Produto personalisado EBAC'
    var quantidade = '300'

    cy.cadProduto(token, produto, preco, descricao, quantidade)
      .then((response) => {
        expect(response.status).to.equal(201)
        expect(response.body.message).to.equal('Cadastro realizado com sucesso')
      })
  })

  it('Deve cadastrar produto inválido (com nome existente)', () => {
    var produto = 'IMac Verde'
    var preco = '150'
    var descricao = 'Descktop'
    var quantidade = '300'

    cy.cadProduto(token, produto, preco, descricao, quantidade)
      .then((response) => {
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Já existe produto com esse nome')
      })

  });

  it('Deve alterar produto com sucesso', () => {
    cy.request({
      method: 'GET',
      url: 'Produtos',
    }).then(response => {
      //cy.log (response.body.produtos[0]._id)
      var id = response.body.produtos[0]._id
      cy.request({
        method: 'PUT',
        url: `produtos/${id}`,
        headers: { authorization: token },
        body: {
          "nome": "Produto EBAC 967",
          "preco": 160,
          "descricao": "Telefone fixo",
          "quantidade": 210
        }
      }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('Registro alterado com sucesso')
      })
    })
  })

  it('Deve alterar produto cadastrado previamente', () => {
    var produto = `Produto EBAC ${Math.floor(Math.random() * 1000)}`
    var preco = '100'
    var descricao = 'Produto personalisado EBAC'
    var quantidade = '300'

    cy.cadProduto(token, produto, preco, descricao, quantidade)
    .then(response => {
      var id = response.body._id

      cy.request({
        method: 'PUT',
        url: `produtos/${id}`,
        headers: { authorization: token },
        body: {
          "nome": produto,
          "preco": 200,
          "descricao": "Telefone fixo",
          "quantidade": 210
        }
      }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('Registro alterado com sucesso')
      })
    })
  });

  it('Deve deletar um produto previamente cadastrado', () => {
    var produto = `Produto EBAC ${Math.floor(Math.random() * 1000)}`
    var preco = '100'
    var descricao = 'Produto personalisado EBAC'
    var quantidade = '300'

    cy.cadProduto(token, produto, preco, descricao, quantidade)
    .then(response => {
      var id = response.body._id

      cy.request({
        method: 'DELETE',
        url: `produtos/${id}`,
        headers: { authorization: token },

      }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('Registro excluído com sucesso')
      })
    })

  });

});
