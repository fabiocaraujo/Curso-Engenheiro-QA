describe('Testes API produtos Serverest', () => {

  it('Deve fazer login com sucesso', () => {
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

  it.only('Cadastrar produtos', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/Produtos',
      body: {
        "nome": "Telefone Intelbras_01",
        "preco": 150,
        "descricao": "Telefone fixo",
        "quantidade": 300
      },
      headers: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZHJpZ28wMS5mZXJhQGViYWMuYnIiLCJwYXNzd29yZCI6InJvZHJpZ28udGVzdGUiLCJpYXQiOjE2Nzc4MTExMzEsImV4cCI6MTY3NzgxMTczMX0.SzV3URHJixmnIvXYGtzjsMNMTT9zfHLOp_33IO3eZc4'}
    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body.message).to.equal('Cadastro realizado com sucesso')
    })
  })

})