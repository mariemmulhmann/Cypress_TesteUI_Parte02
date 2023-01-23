class PesquisaCategoria {

    Pesquisa(dadosHome) {
        const categoriaSelectbox = '.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .select-category > .SumoSelect > .CaptionCont > span';
        const pesquisaButton     = '.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group';

        if(dadosHome.categoria != null){
            
            if(dadosHome.categoria == 'Clothing'){
                cy.get(categoriaSelectbox).should('be.visible');
                cy.get(categoriaSelectbox).click();
                cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .select-category > .SumoSelect > .optWrapper > .options > :nth-child(2)').click();
            }
        }

        if(dadosHome.pesquisar == true){
            cy.get(pesquisaButton).should('be.visible');
            cy.get(pesquisaButton).click();
        }
    }
}

export default new PesquisaCategoria()