///<reference types="cypress" />
import EnderecoPage from '../support/PageObjects/endereco.page.js'

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
        EnderecoPage.editalEndereçoFaturamento('Manoela', 'Marie', 'EBAC', 'Brasil', 'Av. Brasil', '44', 'São Paulo', 'São Paulo', '89035212', '47988556699', 'teste@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

});