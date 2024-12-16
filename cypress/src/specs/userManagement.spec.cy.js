import UserManagementPage from "../page-objects/userManagementPage"
//Declare module.d.ts
const easyYOPmail = require('easy-yopmail');
const loginData = require("../../fixtures/loginCred.json")

describe('User Management Test Scenario',() => {

    const userManagementPage = new UserManagementPage()
    const username = "gowtham"+Cypress._.uniqueId()

    beforeEach(function() {
        cy.sessionLogin(loginData.Orangehrm.validUsername,loginData.Orangehrm.validPassword)
    })

    it("C1 : Create an user in User management",() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
        cy.clickElement(userManagementPage.elements.addButton())
        cy.clickElement(userManagementPage.elements.userRoleDropdown())
        cy.selectDropdownOption(userManagementPage.elements.addUserDropdownOptions(),"Admin")
        cy.clickElement(userManagementPage.elements.statusDropdown())
        cy.selectDropdownOption(userManagementPage.elements.addUserDropdownOptions(),"Enabled")
        cy.typeText(userManagementPage.elements.employeeNameTextbox(),"Sania")
        cy.clickElement(userManagementPage.elements.employeeNameFirstDropdownOption())
        cy.typeText(userManagementPage.elements.usernameTextbox(),username)
        cy.typeText(userManagementPage.elements.passwordTextbox(),"a1234567")
        cy.typeText(userManagementPage.elements.confirmPasswordTextbox(),"a1234567")
        cy.clickElement(userManagementPage.elements.submitButton())
        cy.checkUrl("web/index.php/admin/saveSystemUser");
    })


    it("C2 : Verify clicking on add button naviagtes to add user page ",() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
        cy.clickElement(userManagementPage.elements.addButton())
        cy.checkUrl("web/index.php/admin/saveSystemUser");
    })

})