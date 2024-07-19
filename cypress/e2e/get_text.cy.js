///<reference types="cypress" />

describe('Get text', () => {

    it('Obter texto de um elemento', () => {
        cy.visit('/')
            .get('.mobile-menu-logo')
        
        cy.get('.top_header_left > p')
            .then((element) => {
                console.log(element.text())
            })
    })
})