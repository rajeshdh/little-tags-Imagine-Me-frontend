

describe('Category [PAGE]', () => {
    it('Clicking category carousel should take to category page', () => {
        cy.visit(Cypress.config().baseUrl)
        cy.get('a[href="/category/shoe"]').first().click({ force: true })
        cy.url().should('equal', `${Cypress.config().baseUrl}/category/shoe`)
    });
    it('should show filter drawer when clicking it', () => {
        cy.visit(Cypress.config().baseUrl+'/category/shoe')
        cy.get('[test-id="filter-button"]').click({ force: true })
    });
})