///<reference types="cypress" />
//usando commands

import { faker } from '@faker-js/faker';

const user_data = require('../fixtures/desafio1_valid_data.json')
const data_invalid = require('../fixtures/desafio1_invalid_data.json')
describe('Cadastro de usuário', () => {

    beforeEach('Acessando página de cadastro', () =>{
        cy.accessRegisterPage()
    })

    it('Validar campo nome vazio', () => {       
        cy.saveRegister()
        
        cy.checkMessage('O campo nome deve ser prenchido')
    })


    it('Validar campo e-mail vazio', () => {
        cy.fillName(user_data.name)

        cy.saveRegister()
    
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })


    it('Validar campo e-mail inválido', () => {
        cy.fillName(user_data.name)
        
        cy.fillEmail('teste#email_invalido')

        cy.saveRegister()

        cy.checkMessage('O campo e-mail deve ser prenchido corretamente') 
    })


    it('Validar campo senha inválida', () => {
        cy.fillName(user_data.name)
    
        cy.fillEmail(user_data.email)

        cy.fillPassword('123')

        cy.saveRegister()

        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar campo senha vazio', () => {
        cy.fillName(user_data.name)
    
        cy.fillEmail(user_data.email)

        cy.saveRegister()

        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
        
    })


    it('Cadastro realizado com sucesso', () => {
       const name = faker.person.fullName()

        cy.fillName(name)
        
        cy.fillEmail(user_data.email)

        cy.fillPassword(user_data.password)

        cy.saveRegister()
        
        cy.checkRegisterSucess(name)
    })
})