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
      expect(response.body.produtos[4].nome).to.equal('IMac Vermelho')
      expect(response.body).to.have.property('produtos')
      expect(response.duration).to.be.lessThan(20)
    })
  })

  it('Cadastrar produtos válido', () => {
    //var produto = faker.vehicle.vehicle() //---> cadastrndo produtos diferentes com dados faker
    var produto = `Produto EBAC ${Math.floor(Math.random() * 1000)}` //---> cadastrndo produtos diferentes com número randômico

    cy.request({
      method: 'POST',
      url: 'Produtos',
      body: {
        "nome": produto, //---> cadastrndo produtos diferentes com dados faker e com número randômico
        "preco": 150,
        "descricao": "Telefone fixo",
        "quantidade": 300
      },
      headers: { authorization: token }
    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body.message).to.equal('Cadastro realizado com sucesso')
    })
  })

  it('Deve cadastrar produto inválido (com nome existente)', () => {
    cy.request({
      method: 'POST',
      url: 'Produtos',
      body: {
        "nome": "IMac Verde",
        "preco": 150,
        "descricao": "Descktop",
        "quantidade": 300
      },
      headers: { authorization: token },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(400)
      expect(response.body.message).to.equal('Já existe produto com esse nome')
    })

  });

})