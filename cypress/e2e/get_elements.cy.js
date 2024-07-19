///<reference types="cypress" />

describe('Get elements', () => {

    it('encontrar/selecionar elementos', () => {
       //get () = encontrar ou selecionar elementos.
        cy.visit('/')
            .get('.mobile-menu-logo')
        
        // contains () = serve para encontrar elementos por texto
        // geralmente diminuimos o escopo com um get ()
        cy.get('#top_header')
            .contains('Login')

        // find () = para encontrar elementos
        // geralmente diminuimos o escopo com um get ()
        cy.get('#top_header')
            .find('.fa-user')

        // as() - alias
        // // serve para criar apelidos (atalhos) para grandes comandos
        // cy.get('cabecalho')
        //     .find('.fa-user')


    })
})