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
    
    it('Login - Aluno ebac', () => {
        LoginPage.Login_WEB(dadosLogin.LoginE2E);
    });

    it('Pesquisa por categoria - Minha conta', () => {
        PesquisaCategoria.Pesquisa(dadosPesquisaCategoria.pesquisaCategoria);
    });

    it('Seleção de item - Minha conta', () => {
        SelecionaItemPage.Seleciona(dadosSelecionaItem.TesteE2E);
    });

    it('Detalhes do produto', () => {
        cy.detalhesProdutos('M', 'Orange', '4');
    });

    it('Ver carrinho', () => {
        VerCarrinhoPage.carrinho();
    });

});
