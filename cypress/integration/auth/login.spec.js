describe('Authentication [FEAT]', () => {
  it('Login should work', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('login').click();
    cy.url().should('include', 'http://localhost:3000/login');
    cy.get('input[name="email"]').type('prince@test.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('equal', 'http://localhost:3000/');
  });
});
