///<reference types="cypress" />
var faker = require('faker');

/*
DocTeste({
    Rotina: Compra
    Objetivo: Selecionar um produto da lista e realizar a adicao dele no carrinho para compra
    TelaPrincipal: Início|Clothing
    PreRequisitos: Ter produtos disponiveis para compra
    Descricao: Acessar a plataforma de compra de roupas, selecionar um item da lista. Realizar a escolha de cor e tamanho e definir a quantidade da ompra. Adicionar no carrinho e validar quantidade adicionada
    ResultadoEsperado: O sistema deverá realizar a adição correta de itens ao carrinho, bloqueando o usuario caso nao selecione cor e tamanho e tambem caso o produto nao exista mais em estoque
    AnalistaOrigem: Manoela Marie Mulhmann
})
*/  

describe('Funcionalidade Pagina de Produtos', () => {
    
    beforeEach(() => {
        cy.visit('/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
       cy.get('[class="product-block grid"]').first().click()
       
       //pode-se usar first (primeiro), last(ultimo) ou .eq(3) -pegar posição especifica (comecando pela posicao zero)
       //caso seja necessário escolher um item especifico com um conteudo especifico, voce pode usar .contains('descrição do item a ser selecionado')
    });

    it('Deve selecionar um produto da lista e adicionar ao carrinho', () => {
        var quantidade = 3
        
        cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade+' x "Ariel Roll Sleeve Sweatshirt" foram adicionadas no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'M', 'Purple', '3')
    });

    it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XS', 'Green', '2')
    });
});