///<reference types="cypress" />
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
export default {
    accessRegisterPage() {
        cy.visit('/').get(elements.action.verifyPage)
    
        cy.get(elements.action.clickIconCadastro).click()

        cy.get(elements.action.assertFieldPresent).should('be.visible')
    }
}