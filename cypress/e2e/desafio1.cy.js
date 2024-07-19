///<reference types="cypress" />

describe('Cadastro de usuário', () => {

    it('Validar campo nome vazio', () => {
        cy.visit('/')
            .get('.mobile-menu-logo')
        
        cy.get('.fa-lock')
            .click()

        cy.get('#btnRegister')
            .click()
        
        cy.get('#errorMessageFirstName')
            .then((element) => {
            expect(element.text()).eq('O campo nome deve ser prenchido')
            })

        // cy.get('#errorMessageFirstName')
        //     .should('contain', 'O campo nome deve ser prenchido')
    })


    it('Validar campo e-mail vazio', () => {
        cy.visit('/')
            .get('.mobile-menu-logo')
        
        cy.get('.fa-lock')
            .click()
        
        cy.get('#user')
            .type('user test') 

        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .then((element) => {
            expect(element.text()).eq('O campo e-mail deve ser prenchido corretamente')
            })
        

    })


    it('Validar campo e-mail inválido', () => {
        cy.visit('/')
        .get('.mobile-menu-logo')
    
        cy.get('.fa-lock')
            .click()
        
        cy.get('#user')
            .type('user test') 
        
        cy.get('#email')
            .type('teste_email_invalido') 

        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .then((element) => {
            expect(element.text()).eq('O campo e-mail deve ser prenchido corretamente')
            })
    })


    it('Validar campo senha vazio', () => {
        cy.visit('/')
        .get('.mobile-menu-logo')
    
        cy.get('.fa-lock')
            .click()
        
        cy.get('#user')
            .type('user test') 
        
        cy.get('#email')
            .type('testeemail@teste.com') 

        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .then((element) => {
            expect(element.text()).eq('O campo senha deve ter pelo menos 6 dígitos')
            })
    })


    it('Cadastro realizado com sucesso', () => {
        cy.visit('/')
        .get('.mobile-menu-logo')
    
        cy.get('.fa-lock')
            .click()
        
        cy.get('#user')
            .type('user test') 
        
        cy.get('#email')
            .type('testeemail@teste.com') 

        cy.get('#password')
            .type('teste123') 

        cy.get('#btnRegister')
            .click()
        
        // cy.get('.swal2-title')
        //     .should('contain', 'Cadastro realizado!')

        cy.get('.swal2-title')
            .then((element) => {
            expect(element.text()).eq('Cadastro realizado!')
            })
    })
})