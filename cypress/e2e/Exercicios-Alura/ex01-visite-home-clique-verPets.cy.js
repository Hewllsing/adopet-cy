describe('Visite a página de principal do AdoPet e clique no botão > Ver pets disponíveis para adoção', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click()
    cy.contains('a','Falar com responsável').click()
  })
})