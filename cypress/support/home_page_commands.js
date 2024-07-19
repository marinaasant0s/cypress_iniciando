///<reference types="cypress" />

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { el } from "@faker-js/faker"

//elementos 
const elements = {
    action: {
        verifyPage: '.mobile-menu-logo',
        clickIconCadastro: '.fa-lock',
        assertFieldPresent: '#user'
    }
}

//ações/métodos
Cypress.Commands.add('accessRegisterPage',() => {
    cy.visit('/').get(verifyPage)

    cy.get(clickIconCadastro).click()

    cy.get(assertFieldPresent).should('be.visible')
})