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
export default {
    saveRegister() {
        cy.get(elements.buttons.register).click()
    },

    fillEmail(email) {
        cy.get(elements.fields.email).should('be.visible').type(email) 
    },

    fillName(name) {
        cy.get(elements.fields.name).type(name) 
    },

    fillPassword(password) {
        cy.get(elements.fields.password).should('be.visible').type(password) 
    },

    checkMessage(message) {
        cy.get(elements.messages.error).should('have.text', message)
    },

    checkRegisterSucess(name){
        cy.get(elements.messages.sucessTitle).should('contain', 'Cadastro realizado!')
        
        cy.get(elements.messages.sucessSubtitle).should('contain', `Bem-vindo ${name}`)
    }
}