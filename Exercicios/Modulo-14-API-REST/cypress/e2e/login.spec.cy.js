describe('Login da API Serverest', () => {

  it('Deve fazer login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'login',
      body: {
        "email": "rodrigo01.fera@ebac.br",
        "password": "rodrigo.teste"
      }
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.message).to.equal('Login realizado com sucesso')
      cy.log(response.body.authorization)
    })
  })

})