class Header {

    elements = {

        userDropdownTab : () => cy.get("header .oxd-userdropdown"),
        userDropdownMenuOptions : () => cy.get("a[role='menuitem']")
    }

}

export default Header