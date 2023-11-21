///<reference types="cypress" />
const dadosLogin = require('../fixtures/login.json');
const dadosSelecionaItem = require('../fixtures/selecionaItem.json')
const dadosPesquisaCategoria  = require('../fixtures/categoria.json')
import LoginPage from '../support/PageObjects/Login.page';
import PesquisaCategoria from '../support/PageObjects/Categoria.page'
import SelecionaItemPage from '../support/PageObjects/SelecionaItem.page';
import VerCarrinhoPage from '../support/PageObjects/VerCarrinho.page';

context('Funcionalidade Login > Pesquisa categoria > Seleção do item > Detalhes do produto > Ver carrinho', () => {

    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });
    
    it('E2E - Modulo 12 ebac', () => {
        LoginPage.Login_WEB(dadosLogin.LoginE2E);
        PesquisaCategoria.Pesquisa(dadosPesquisaCategoria.pesquisaCategoria);
        SelecionaItemPage.Seleciona(dadosSelecionaItem.TesteE2E);
        cy.detalhesProdutos('33', 'Blue', '4');
        VerCarrinhoPage.carrinho();
        VerCarrinhoPage.detalhesCarrinho('Livingston All-Purpose Tight - 33, Blue', 'R$75,00', 4, 'R$300,00');
        VerCarrinhoPage.concluirCarrinho();
        VerCarrinhoPage.finalizarCompra();
        VerCarrinhoPage.pedidoRecebido();
    });
});
