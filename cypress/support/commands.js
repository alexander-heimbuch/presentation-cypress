Cypress.Commands.add('slide', (slide) => {
    cy.visit(`/${slide}`)
})

Cypress.Commands.add('navigate', (direction) => {
    cy.get(`.navigate-${direction}.enabled`).click()
})