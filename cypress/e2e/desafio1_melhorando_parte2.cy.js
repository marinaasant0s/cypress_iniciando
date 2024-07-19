///<reference types="cypress" />
//usando JavaScript, sem commands

import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';

const user_data = require('../fixtures/desafio1_valid_data.json')
const data_invalid = require('../fixtures/desafio1_invalid_data.json')

describe('Cadastro de usuário', () => {

    beforeEach('Acessando página de cadastro', () =>{
        home_page.accessRegisterPage()
    })

    it('Validar campo nome vazio', () => {       
        register_page.saveRegister()
        
        register_page.checkMessage('O campo nome deve ser prenchido')
    })


    it('Validar campo e-mail vazio', () => {
        register_page.fillName(user_data.name)

        register_page.saveRegister()
    
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })


    it('Validar campo e-mail inválido', () => {
        register_page.fillName(user_data.name)
        
        register_page.fillEmail('teste#email_invalido')

        register_page.saveRegister()

        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente') 
    })


    it('Validar campo senha inválida', () => {
        register_page.fillName(user_data.name)
    
        register_page.fillEmail(user_data.email)

        register_page.fillPassword('123')

        register_page.saveRegister()

        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar campo senha vazio', () => {
        register_page.fillName(user_data.name)
    
        register_page.fillEmail(user_data.email)

        register_page.saveRegister()

        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
        
    })


    it('Cadastro realizado com sucesso', () => {
       const name = faker.person.fullName()

        register_page.fillName(name)
        
        register_page.fillEmail(user_data.email)

        register_page.fillPassword(user_data.password)

        register_page.saveRegister()
        
        register_page.checkRegisterSucess(name)
    })
})