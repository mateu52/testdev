import { hasPointerEvents } from "@testing-library/user-event/dist/utils";

describe('zad4e2e.cy.js', () => {
  it('should visit', () => {
    cy.visit('localhost:3000')
      .get('h4').contains('props: 10')
      .get('h3').contains('10')
      .get('.plus').click()
      .get('h3').contains('1')
      .get('.minus').click()
      .get('h3').contains('0')
      .get('input').type('22')
      .get('button').contains("Zmień").click()
      .get('h3').contains('22')
  })
})
