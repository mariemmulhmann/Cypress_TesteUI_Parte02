///<reference types="cypress" />
/*
DocTeste({
    Rotina            : Login
    Objetivo          : Validar toda a rotina de login, considerando login com sucesso, senha invalida e email invalido
    TelaPrincipal     : Home|Minha conta 
    PreRequisitos     : Ter um usuário já cadastrado na plataforma - Usuario utilizado:aluno_ebac@teste.com 
    Descricao         : Acesso a tela de Minha conta, informado login valido e senha valida, verificado acesso a tela de usuário logado.
                        Acesso a tela de Minha conta, informado login valido e senha incorreta, verificado acesso negado com mensagem de aviso.
                        Acesso a tela de Minha conta, informado login inválido e senha válida, verificado acesso negado com mensagem de aviso.               
    ResultadoEsperado : O sistema só deverá permitr login caso o usuário e a senha esteja já pré cadastrados
    AnalistaOrigem    : Manoela Marie Mulhmann
})
*/  


//contexto do teste ('string entre aspas simples' inicio de função)*/
context('Funcionalidade Login', () => {
    
    //O será feito antes de cada um dos testes    
    beforeEach(() => { 
        //comando visit acessa o link informado
        cy.visit('minha-conta/')
    });

     //O será feito depois de cada um dos testes
    afterEach(() => {
        cy.screenshot()
    });

    //estrutura do cenário
    it('Deve fazer login com sucesso', () =>{

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', ()=>{

        cy.get('#username').type('aluno.ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', ()=>{

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste..com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
})