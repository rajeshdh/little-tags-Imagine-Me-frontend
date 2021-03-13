describe('Authentication [FEAT]', () => {
    it('Login should work', () => {
        cy.visit(Cypress.config().baseUrl)
        cy.contains('login').click()
        cy.url().should('include',Cypress.config().baseUrl+'/login')
        cy.get('input[name="email"]').type('prince@test.com')
        cy.get('input[name="password"]').type('password')
        cy.get('button[type="submit"]').click()
        cy.url().should('equal',Cypress.config().baseUrl)
    });
})