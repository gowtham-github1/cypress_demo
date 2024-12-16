// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Using the below method for unhandled promise rejection. 
Cypress.on('uncaught:exception',(err,Runnable) => {
    return false
})

// Adding below command to avoid adding import cypress in every page. 
/// <reference types = "Cypress" />

// Adding below command to use xpath to locate elements
/// <reference types = "cypress-xpath" />

import LoginPage from "../src/page-objects/loginPage"

// Check element is present
Cypress.Commands.add('checkElement', (label) => {
    cy.contains(label).should('exist', `${label} is not present`);
  });

// Click element 
Cypress.Commands.add('clickElement', (label) => {
    cy.contains(label).click({ force: true });
});

// Click link
Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click({ force: true });
  });

// Check linkText is present 
Cypress.Commands.add('checkLinkText', (label) => {
    cy.get('a').contains(label).should('exist');
});

// Click button
Cypress.Commands.add('clickButton', (label) => {
    cy.get('button').contains(label).click({ force: true });
  });

// Check buttonText is present 
Cypress.Commands.add('checkButtonText', (label) => {
    cy.get('button').contains(label).should('exist');
});

// Check Element is present 
Cypress.Commands.add('checkElementIsVisible', (locator) => {
    locator.should('be.visible');
});

// Click element (button/link) with respect to provided label
Cypress.Commands.add('clickElement', (locator) => {
    locator.should('be.visible').click({ force: true });
});

// Check Url
Cypress.Commands.add('checkUrl', (urlText) => {
    cy.url().should('include', urlText, {timeout: 30000});
});

// assert text with respect to provided locator
Cypress.Commands.add('assertText', (locator, expectedText) => {
    locator.should('be.visible').and('have.text', expectedText);
});

// Type text in provided locator textbox
Cypress.Commands.add('typeText', (locator,text) => {
    locator.should('exist').clear().type(text).should('have.value',text);
});

// Select the provided option from dropdown
Cypress.Commands.add('selectDropdownOption', (dropdownLocator,optionValue) => {
    dropdownLocator.contains(optionValue).click();
});

//Caching Sessions When Logging in
Cypress.Commands.add('sessionLogin', (username, password) => {
    const loginPage = new LoginPage()
    cy.session([username, password], () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.typeText(loginPage.elements.usernameTextbox(), username)
      cy.typeText(loginPage.elements.passwordTextbox(),password)
      cy.clickElement(loginPage.elements.loginButton())
      cy.checkUrl("web/index.php/dashboard/index")
    })
  })


//   Cypress.Commands.overwrite('should', (originalShouldFn, subject, expectation, ...args) => {
//     // Perform the assertion using expect
//     const assertion = expect(subject);
   
//     // Use dynamic chaining to call the expectation
//     const chainedAssertion = assertion[expectation](...args);
   
//     // Return the original subject for further chaining
//     return subject;
//   });