describe('specbutton.cy.js', () => {
  it('should visit', () => {
    cy.visit('localhost:3000');
    const button = cy.get('button');
    button.click();
    button.click();

    button.contains('Click me');
  });
});
