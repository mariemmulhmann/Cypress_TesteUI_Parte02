///<reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

/*
DocTeste({
    Rotina            : Login
    Objetivo          : Validar toda a rotina de login, considerando login com sucesso, senha invalida e email invalido
    TelaPrincipal     : Home|Minha conta 
    PreRequisitos     : Ter um usuário já cadastrado na plataforma - Usuario utilizado:aluno_ebac@teste.com 
    Descricao         : C1 - Acesso a tela de Minha conta, informado login valido e senha valida, verificado acesso a tela de usuário logado.
                        C2 - Acesso a tela de Minha conta, informado login valido e senha incorreta, verificado acesso negado com mensagem de aviso.
                        C3 - Acesso a tela de Minha conta, informado login inválido e senha válida, verificado acesso negado com mensagem de aviso.               
    ResultadoEsperado : O sistema só deverá permitr login caso o usuário e a senha esteja já pré cadastrados
    AnalistaOrigem    : Manoela Marie Mulhmann
})
*/

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    })

    it.only('Deve fazer login com sucesso utilizando fixture', () => {

        cy.fixture('perfil.json').then(dados => {
            cy.get('#username').type(dados.usuario, { log: false })
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('.woocommerce-form > .button').click()

        })
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
})
