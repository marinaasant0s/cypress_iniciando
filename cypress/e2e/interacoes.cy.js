///<reference types="cypress" />

describe('Interações', () => {

    it('digitar em um campo', () => {
        cy.visit('/')
            .get('.mobile-menu-logo')
        
        cy.get('.form-control')
            .type('teste@teste.com')    
    })

    it('click',() => {
        cy.visit('/')
            .get('.mobile-menu-logo')

        //click normal
        // cy.get('.fa fa-user')
        //     .click()
        
        //click duplo
        // cy.get('.fa fa-user')
            // .dblclick()

        //click com botão direito
        // cy.get('.fa fa-user')
            // .rightclick()

        //simular apertar a tecla enter
        cy.get('.form-control')
            .type('teste@teste.com{enter}') 
    })

    it('Select', () => {
        cy.visit('/')
            .get('.mobile-menu-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View Two')
            .click()

        cy.get('#country')
            .select('Colombia')
    })

    it.only('Checkbox e radio button', () => {
        cy.visit('/')
            .get('.mobile-menu-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()
        
        cy.get('#materialUnchecked')
            .check()
            .uncheck()

        cy.get('#javascript')
            .check()

    })
})