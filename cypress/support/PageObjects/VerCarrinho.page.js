

class VerCarrinho {

    carrinho() {
        const verCarrinhoButton = '.woocommerce-message > .button';
        
            cy.get(verCarrinhoButton).should('be.visible');
            cy.get(verCarrinhoButton).click();
    }

    detalhesCarrinho(product, valorUnidade, qnts, valorTotal) {
        const produto = 'data-title="Product"';
        const valorUnd = 'class="woocommerce-Price-currencySymbol"';
        const quantidade = 'class="input-text qty text"';
        const valorCarrinho = 'class="woocommerce-Price-currencySymbol"';
        
        cy.get(produto).should('be.visible');
        cy.get(produto).should('be.equal', product);

        cy.get(valorUnd).should('be.visible');
        cy.get(valorUnd).should('be.equal', valorUnidade);

        cy.get(quantidade).should('be.visible');
        cy.get(quantidade).should('be.equal', qnts);

        cy.get(valorCarrinho).should('be.visible');
        cy.get(valorCarrinho).should('be.equal', valorTotal);
    }

    concluirCarrinho() {
        const concluirCompra = 'class="checkout-button button alt wc-forward"';

        cy.get(concluirCompra).should('be.visible');
        cy.get(concluirCompra).click();
    }

    finalizarCompra() {
        const termosCondicoes = 'class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"';
        const finalizarCompra = 'name="woocommerce_checkout_place_order"';

        cy.get(termosCondicoes).should('be.visible');
        cy.get(termosCondicoes).check();
        cy.get(finalizarCompra).should('be.visible');
        cy.get(finalizarCompra).click();
    }

    pedidoRecebido() {
        const tituloPagina = '#main > class="page-title"';
        const mensagemConfirmacao = 'class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received"';

        cy.get(tituloPagina).should('be.visible');
        cy.get(tituloPagina).should('be.equal', 'PEDIDO RECEBIDO');
        cy.get(mensagemConfirmacao).should('be.visible');
        cy.get(mensagemConfirmacao).should('be.equal', 'Obrigado. Seu pedido foi recebido.');
    }
}

export default new VerCarrinho()