///<reference types="cypress" />
/*
DocTeste({
    Rotina            : 
    Objetivo          : 
    TelaPrincipal     : 
    PreRequisitos     : 
    Descricao         :       
    ResultadoEsperado : 
    AnalistaOrigem    : Manoela Marie Mulhmann
})
*/  

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')  
        cy.fixture('perfil.json').then(dados =>{
           cy.login(dados.usuario, dados.senha)  
        })
           
    })

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        
    });

});