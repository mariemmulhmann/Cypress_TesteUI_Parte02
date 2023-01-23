class LoginPage {

    Login_WEB(dadosLogin) {
        const iconeAcessoLogin     = '.icon-user-unfollow';
        const usarnameImput        = '#username';
        const passwordImput        = '#password';
        const rememberMeCheckbox   = '#rememberme';
        const loginButton          = '.woocommerce-form > .button';
        const lostPasswordCheckbox = '.lost_password > a';

        if(dadosLogin.telaPrincipal == true){
            cy.get(iconeAcessoLogin).should('be.visible');
            cy.get(iconeAcessoLogin).click();
        }

        if(dadosLogin.usuario != null){
            cy.get(usarnameImput).should('be.visible');
            cy.get(usarnameImput).type(dadosLogin.usuario);
        }

        if(dadosLogin.senha != null){
            cy.get(passwordImput).should('be.visible');
            cy.get(passwordImput).type(dadosLogin.senha);
        }

        if(dadosLogin.lembrarUsuario == true){
            cy.get(rememberMeCheckbox).should('be.visible');
            cy.get(rememberMeCheckbox).check();
        }
        
        if (dadosLogin.entrar == true) {
            cy.get(loginButton).should('be.visible');
            cy.get(loginButton).click();
            cy.url().should('contains', 'http://lojaebac.ebaconline.art.br/minha-conta/');
        }

        if (dadosLogin.esqueciSenha == true) {
            cy.get(lostPasswordCheckbox).should('be.visible');
            cy.get(lostPasswordCheckbox).check();
        }
    }
}

export default new LoginPage()