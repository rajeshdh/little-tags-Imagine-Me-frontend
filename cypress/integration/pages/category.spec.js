describe('Category [PAGE]', () => {
    it('Clicking category carousel should take to category page', () => {
        cy.visit('http://localhost:3000')
        cy.get('a[href="/category/shoe"]').first().click({force: true})
        cy.url().should('equal','http://localhost:3000/category/shoe')
    });
    it('should show filter drawer when clicking it', () => {
        cy.visit('http://localhost:3000/category/shoe')
        cy.get('[test-id="filter-button"]').click({force: true})
    });
})