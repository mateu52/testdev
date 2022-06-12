describe('zad4e2e.cy.js', () => {
  it('should visit', () => {
    cy.visit('localhost:3000')
      
      .get('h1').should('0')
      .wrap.setState({sum}).should('0');
      .get('.plus').click();
      .wrap.setState({sum}).should('1');
      .get('.minus').click();
      .wrap.setState({sum}).should('0');
      //.get('button', '-').click();
      .get('input[type="number]').type('22')
      .wrap.setState({sum}).should('22');
      .get('h3').should('22')
  })
})
