describe('Página principal AdoPet', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
      it('Teste o login com um fluxo diferente: Visite a página principal do Adopet, clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login', () => {
            cy.get('.header__message').click()
            cy.get('[data-test="input-loginEmail"]').type('ana@email.com')
            cy.get('[data-test="input-loginPassword"]').type('Senha123')
            cy.get('[data-test="submit-button"]').click()
        })
    })