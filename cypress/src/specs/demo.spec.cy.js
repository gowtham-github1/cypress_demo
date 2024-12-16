
it('should visit the homepage and check the title', () => {
    cy.visit('https://example.com'); // Visiting the website
    cy.title().should('include', 'Example Domain'); // Asserting the page title
  });

it('should check the existence of a specific element on the homepage', () => {
    cy.visit('https://example.com');
    cy.get('h1').should('contain', 'Example Domain'); // Asserting the presence of the h1 element
  });