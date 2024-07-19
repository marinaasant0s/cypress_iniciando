///<reference types="cypress" />

describe('Get text', () => {

    it('verificar se esta visivel', () => {
        cy.visit('/')
            .get('.mobile-menu-logo')
        //click normal
        cy.get('.fa-user')
            .click()

        // cy.get('.account_form > h3')
        //     .should('be.visible')

        // cy.get('.account_form > h3')
        //     .should('contain', 'Login')

        cy.get('.account_form > h3')
            .then((element) => {
                expect(element.text()).eq('Login')
                expect(element).to.be.visible
                expect(element).not.disabled
            })
    })
})