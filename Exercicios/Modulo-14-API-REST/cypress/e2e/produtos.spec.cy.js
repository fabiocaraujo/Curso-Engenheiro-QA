import { faker } from '@faker-js/faker';

describe('Testes API produtos Serverest', () => {

  var token

  before(() => {
    var email = 'rodrigo01.fera@ebac.br'
    var password = 'rodrigo.teste'

    cy.loginToken(email, password).then(tkn => { token = tkn })
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

  it.only('Cadastrar produtos válido', () => {
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

  it.only('Deve cadastrar produto inválido (com nome existente)', () => {
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

})