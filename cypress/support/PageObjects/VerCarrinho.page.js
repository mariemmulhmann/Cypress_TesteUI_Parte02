

class VerCarrinho {

    carrinho() {
        const verCarrinhoButton = '.woocommerce-message > .button';
        
            cy.get(verCarrinhoButton).should('be.visible');
            cy.get(verCarrinhoButton).click();
    }

    detalhesCarrinho(dadosCarrinho) {
        
    }
}

export default new VerCarrinho()