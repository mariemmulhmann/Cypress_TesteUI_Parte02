class SelecionaItem {

    Seleciona(dadosItem) {
        const itensGrid = '[class="product-block grid"]';
        
        if(dadosItem.item == true){
            cy.get(itensGrid).should('be.visible');
            cy.get(itensGrid).first().click();
        }
    }
}

export default new SelecionaItem()