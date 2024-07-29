describe('Página principal AdoPet', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
    it('Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html', () => {
      cy.contains('Quem ama adota!').should('be.visible');
    })
    it('Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html', () => {
      cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })
  })