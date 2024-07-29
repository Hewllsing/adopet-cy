describe('Visite a página de /login do Adopet >> Visite a página de /home do Adopet;', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Fazer login').click();
    cy.get('.header__home').click();
  })
})