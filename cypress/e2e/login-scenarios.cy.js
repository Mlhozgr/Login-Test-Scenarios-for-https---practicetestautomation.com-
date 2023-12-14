describe('Login Scenarios', () => {

  beforeEach(()=>{
    cy.visit("https://practicetestautomation.com/practice-test-login/")
    // When  "Login Scenarios" scenario run , Cypress will open the page before run everything
  })

  it('Positive Login', () => {

    cy.login("student","Password123")
    //We give to parameters to login command
    cy.url().should("contains","practicetestautomation.com/logged-in-successfully/")
    cy.contains('Congratulations').should('exist')
    cy.get('a:contains("Log out")').should('be.visible')

  })
  it('Negative Username', ()=> {
    cy.login("incorrectUser","Password123")
    cy.get('#error').should('be.visible').contains("Your username is invalid!")
  })
  it('Negative Password', ()=> {
    cy.login("student","incorrectPassword")
    cy.get('#error').should('be.visible').contains("Your password is invalid!")
  })
})