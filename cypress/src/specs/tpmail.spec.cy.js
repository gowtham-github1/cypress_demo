
    it("TC2 : Verify clicking on add button naviagtes to add user page ",() => {
        cy.mailosaurGetMessage("qe2mxmds", {
            sentTo: "try-heard@qe2mxmds.mailosaur.net",
          }).then((email) => {
            const emailtext = email.text.body;
            cy.log(emailtext)
            const otp = emailtext.match(/\b\d{4}\b/g)[0];
            cy.log(otp);
          });
    })

    // describe('Email tests', () => {
    //     it('should retrieve subject text from email', () => {
    //       // Send an email using cy.task or cy.request
       
    //       // Use Mailosaur commands to retrieve the email
    //       cy.mailosaurGetMessage({
    //         serverId: 'qe2mxmds',
    //         criteria: {
    //           sentTo: 'try-heard@qe2mxmds.mailosaur.net'
    //         }
    //       }).then((response) => {
    //         // Extract subject text from the email
    //         const subject = response.body.items[0].subject;
       
    //         // Use subject text as needed (e.g., assertion)
    //         cy.log(email.subject);
    //       });
    //     });
    //   });