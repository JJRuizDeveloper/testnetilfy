/* global cy */
describe('user can navigate', () => {
  beforeEach( () => {
    cy.visit('http://localhost:8080')
  }),
  it('can list post', () => {
    cy.contains('Listado de post')
  }),
  it('can visit details view', () => {
    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
    cy.get('.link').click()
  })
  
})