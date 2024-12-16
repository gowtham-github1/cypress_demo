class LoginPage {

    elements = {

        usernameTextbox : () => cy.get("input[name='username']"),
        passwordTextbox : () => cy.get("input[name='password']"),
        loginButton : () => cy.get("button[type='submit']")
    }

}

export default LoginPage