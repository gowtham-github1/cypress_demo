class UserManagementPage {

    elements = {

        addButton : () => cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']"),
        userRoleDropdown : () => cy.xpath("//label[text()='User Role']/parent::div/following-sibling::div//div[@class='oxd-select-text-input']"),
        statusDropdown : () => cy.xpath("//label[text()='Status']/parent::div/following-sibling::div//div[@class='oxd-select-text-input']"),
        addUserDropdownOptions : () => cy.get("div[role='option']>span"),
        passwordTextbox : () => cy.xpath("//label[text()='Password']/parent::div/following-sibling::div//input[@type='password']"),
        confirmPasswordTextbox : () => cy.xpath("//label[text()='Confirm Password']/parent::div/following-sibling::div//input[@type='password']"),
        usernameTextbox : () => cy.xpath("//label[text()='Username']/parent::div/following-sibling::div/input"),
        employeeNameTextbox : () => cy.xpath("//input[@placeholder='Type for hints...']"),
        employeeNameFirstDropdownOption : () => cy.get(".oxd-autocomplete-dropdown > :nth-child(1) > span"),
        submitButton: () => cy.get("button[type='submit']")


    }

}

export default UserManagementPage