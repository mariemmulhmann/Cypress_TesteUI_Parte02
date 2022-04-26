///<reference types="cypress" />
var faker = require('faker');
/*
DocTeste({
    Rotina: Detalhes da conta
    Objetivo: Realizar um novo cadastro na plataforma e realizar a finalização com o restante dos dados da conta, como nome e sobrenome
    TelaPrincipal: Home|Minha conta|
    PreRequisitos: Não há
    Descricao: Acessar a plataforma, informar um email não cadastrado e uma senha dentro dos parametros obirgatorios, clicar em registrar
               Entrar na tela de 'Detalhes da conta' e preencher compo de nome e sobrenome
    ResultadoEsperado: O sistema deverá permitir que sejam registrados novos usuarios e bloquear caso seja utilizado um usuario existente para que este usuario realize entao o logine nao o novo registro
    AnalistaOrigem: Manoela Marie Mulhmann
})
*/  

describe('Funcionalidade Pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let emailFaker       = faker.internet.email(nomeFaker)
        let nomeFaker        = faker.name.firstName()
        let sobrenomeFaker   = faker.name.lastName()
        
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

    it.only('Deve completar o pré-cadastro com sucesso  com sucesso usando Comandos Customizados', () => {
        let emailFaker2       = faker.internet.email(nomeFaker2)
        let nomeFaker2        = faker.name.firstName()
        let sobrenomeFaker2   = faker.name.lastName()
        
        cy.preCadastro(emailFaker2, 'teste@teste.com', nomeFaker2, sobrenomeFaker2)
    });
});