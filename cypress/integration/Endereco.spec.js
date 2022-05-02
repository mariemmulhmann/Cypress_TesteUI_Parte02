///<reference types="cypress" />
import EnderecoPage from '../support/PageObjects/endereco.page.js'
const dadosEndereco = require('../fixtures/endereco.json')
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

    it('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        EnderecoPage.editalEndereçoFaturamento(
            dadosEndereco[1].nome, 
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de entrega com sucesso', () => {
        EnderecoPage.editarEndereçoEntrega('Manoela', 'Marie', 'EBAC', 'Brasil', 'Av. Brasil', '44', 'São Paulo', 'São Paulo', '89035212')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro de entrega com sucesso - usando arquivo de dados', () => {
        EnderecoPage.editarEndereçoEntrega(
            dadosEndereco[1].nome, 
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});