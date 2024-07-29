describe('Visite a página de principal do AdoPet e teste os botões header', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__message').click();
    cy.get('.header__home').click();
  })
})