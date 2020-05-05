context('Basic e2e testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should complete the appliation form', () => {
    cy.get('input[name="name"]').focus().type('Test Person')
    cy.get('input[name="role"]').focus().type('QA Engineer')
    cy.get('input[name="email"]').focus().type('my@email.com')
    cy.get('input[name="password"]').focus().type('ABCabc1234')
    cy.get('#details-submit').click().wait(100)

    cy.get('#product-update-checkbox').click()
    cy.get('#other-comms-checkbox').click()
    cy.get('#checkbox-submit').click().wait(100)

    cy.get('#success-message').should('be.visible')
  })
})