///<reference types="cypress" />

import { el } from "@faker-js/faker"

//elementos 
const elements = {
    buttons: {
        register: '#btnRegister'
    },

    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },

    messages: {
        error: '.errorLabel',
        sucessTitle: '#swal2-title',
        sucessSubtitle: '#swal2-html-container'
    }
}

//ações/métodos
Cypress.Commands.add('saveRegister', () =>{
    cy.get(elements.buttons.register).click()
})

Cypress.Commands.add('fillEmail', (email) =>{
    cy.get(elements.fields.email).should('be.visible').type(email) 
})

Cypress.Commands.add('fillName', (name) =>{
    cy.get(elements.fields.name).type(name) 
})

Cypress.Commands.add('fillPassword', (password) =>{
    cy.get(elements.fields.password).should('be.visible').type(password) 
})

Cypress.Commands.add('checkMessage', (message) =>{
    cy.get(elements.messages.error).should('have.text', message)
})

Cypress.Commands.add('checkRegisterSucess', (name) =>{
    cy.get(elements.messages.sucessTitle).should('contain', 'Cadastro realizado!')
        
    cy.get(elements.messages.sucessSubtitle).should('contain', `Bem-vindo ${name}`)
})