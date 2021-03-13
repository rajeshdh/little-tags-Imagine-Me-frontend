
describe('Cart [PAGE]', () => {
    it('should take to cart page ,and remove element', () => {
        cy.visit(`/cart`)
        // cy.url().should('include','/login').then(()=>{
        //     cy.get('input[name="email"]').type('prince@test.com')
        //     cy.get('input[name="password"]').type('password')
        //     cy.get('button[type="submit"]').click()
        //     cy.url().should('equal', `${Cypress.config().baseUrl}/cart`)
        // })
        let currentLength = 0
        cy.get('[test-id="cart-badge"]').then($badge => {
            currentLength = Cypress.$($badge).text()
            cy.get('div[test-id="product-cart-card"] button[test-id="product-cart-card-remove"]').first().click()
            cy.get('div[test-id="product-cart-card"]').should('have.length', currentLength - 1)
        })
    });
})