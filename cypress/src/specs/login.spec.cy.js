import Header from "../page-objects/header"
import LoginPage from "../page-objects/loginPage"
import { faker } from '@faker-js/faker';

const loginData = require("../../fixtures/loginCred.json")

describe('Login Test Scenario',() => {

    const loginPage = new LoginPage()
    const header = new Header()
    let pn;
    let messageid;

    // beforeEach(function() {
    //     //cy.visit("https://opensource-demo.orangehrmlive.com/")
    //     pn = faker.phone.number();
    // })

    xit("C1 : Login with valid credentials and verify it naviagted to authenticated home page", async() => {
        //cy.visit("https://www.google.com/")
        const magicPhrase = await Yopmail_otp.getOtp("reset_password");
        console.log(magicPhrase)

        // cy.contains("Learn more");
        // //cy.log("test "+ pn);
        // cy.contains("Learn more");
        // //cy.wait(5000);
        // cy.typeText(loginPage.elements.usernameTextbox(), loginData.Orangehrm.validUsername)
        // cy.typeText(loginPage.elements.passwordTextbox(),loginData.Orangehrm.validPassword)
        // cy.clickElement(loginPage.elements.loginButton())
        // cy.checkUrl("web/index.php/dashboard/index")
        // cy.checkElementIsVisible(header.elements.userDropdownTab())
    })

    it('TC-1 :Should fetch the first email message ID from YOPmail inbox', () => {
        // Send request to YOPmail API to get messages for the temporary email
        cy.request({
            method: 'GET',  // You can change the method to 'POST' if needed
            url: 'https://yopmail.com/inbox?login=reset_password&p=1&d=&ctrl=&yp=TAGV4AQH5ZwV4ZmxjAQV1AwV&yj=YAmLlZwD0ZGR1BGV5AGp1ZwL&v=9.2&r_c=&id=&ad=0',  // The URL you're targeting
            headers: {
              'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
              'accept-encoding': 'gzip, deflate, br, zstd',
              'accept-language': 'en-US,en;q=0.9',
              'connection': 'keep-alive',
              'cookie': 'yc=VZmN1ZGx4ZmZ5ZwtmZwp3Zmt; yses=0MsN9ErxafGSKq5qFyOCyosmHHcuv9MqL3NXyvrRPwZmOWkhsFqa9VR+mU3+LIgH; __gads=ID=85899a96d7ad0a90:T=1731922687:RT=1731931513:S=ALNI_MZ90E4NH3tIn2KvvsUzZJ4USbgeAQ; __gpi=UID=00000f6dece0668a:T=1731922687:RT=1731931513:S=ALNI_Ma3RkSy0kg1zp0E2Km8Kve33l1GPA; __eoi=ID=85abdcc0b6f874ec:T=1731922687:RT=1731931513:S=AA-Afjbue5dh-9NMWRes2kev8ks9; FCNEC=%5B%5B%22AKsRol-scinCuTOztXaFiyUXOcIbfwXHtpUWENuGXHqtuHdkGDKlmRF5g5opS-ywaerPbrtjqThfWRQwd8qgozwyq8a6mVhUSWvnwM3Yb5a1FK89II5jZZsuVXmGEPBNrEaXU32-R45SwtnExKnylNcr-Ivw0LOwug%3D%3D%22%5D%5D; compte=reset_password:reset_password1; ywm=reset_password; ytime=17:40',
              'host': 'yopmail.com',
              'referer': 'https://yopmail.com/wm',
              'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '"Windows"',
              'sec-fetch-dest': 'iframe',
              'sec-fetch-mode': 'navigate',
              'sec-fetch-site': 'same-origin',
              'upgrade-insecure-requests': '1',
              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
            },
        }).then((response) => {
            // Check if the response is successful
            expect(response.status).to.eq(200);
    
            // Assuming the response contains an array of email messages
            const emails = response.body;
    
            // Ensure that there are emails in the response
            expect(emails).to.have.length.greaterThan(0);
            messageid = Cypress.$(emails).find('div.m').first().attr('id');
            cy.log(`First Email Message ID: ${messageid}`);
          });
      });



    it('TC-2 :Should fetch OTP from YOPmail inbox', () => {
        // Make a request to YOPmail API to fetch the messages for the temporary email
        cy.request({
            method: 'GET', // or 'POST', depending on the actual request type
            url: `https://yopmail.com/mail?b=reset_password&id=m${messageid}`, // replace with your actual URL
            headers: {
              'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
              'accept-encoding': 'gzip, deflate, br, zstd',
              'accept-language': 'en-US,en;q=0.9',
              'cache-control': 'max-age=0',
              'connection': 'keep-alive',
              'cookie': 'yc=VZmN1ZGx4ZmZ5ZwtmZwp3Zmt; yses=0MsN9ErxafGSKq5qFyOCyosmHHcuv9MqL3NXyvrRPwZmOWkhsFqa9VR+mU3+LIgH; __gads=ID=85899a96d7ad0a90:T=1731922687:RT=1731922687:S=ALNI_MZ90E4NH3tIn2KvvsUzZJ4USbgeAQ; __gpi=UID=00000f6dece0668a:T=1731922687:RT=1731922687:S=ALNI_Ma3RkSy0kg1zp0E2Km8Kve33l1GPA; __eoi=ID=85abdcc0b6f874ec:T=1731922687:RT=1731922687:S=AA-Afjbue5dh-9NMWRes2kev8ks9; compte=reset_password; ywm=reset_password; FCNEC=%5B%5B%22AKsRol-drhZaXxNvymelxs2CRUlmJ1jPK_LSeChZTRplPfg5JXK6vYkNR4EH71qB2ZFvGE_kzFSy-scKnnY-EHhoG6LiTblR1z7M86ljtE_W7EAcInBXVOgFxURSU3fg8_BFW81omYBNiyQMnci5N9t2tdw20SP8jQ%3D%3D%22%5D%5D; ytime=16:6',
              'host': 'yopmail.com',
              'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '"Windows"',
              'sec-fetch-dest': 'document',
              'sec-fetch-mode': 'navigate',
              'sec-fetch-site': 'none',
              'sec-fetch-user': '?1',
              'upgrade-insecure-requests': '1',
              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
            },
        }).then((response) => {
            // Check if the response is successful
            expect(response.status).to.eq(200);
    
            // Parse the emails from the response body
            const emails = response.body;
            cy.log(emails);
            const otp = emails.match(/\d{6}/)[0]; // Assuming OTP is a 6-digit number
            cy.log(`OTP: ${otp}`);
          });
      });

    xit("TC2 : Login with invalid credentials and verify the error message",() => {
        cy.typeText(loginPage.elements.usernameTextbox(), loginData.Orangehrm.invalidUsername)
        cy.typeText(loginPage.elements.passwordTextbox(),loginData.Orangehrm.invalidPassword)
        cy.clickElement(loginPage.elements.loginButton())
        cy.contains("Invalid credentials")
    })

    xit("TC3 : Logout from the application and verify its navigated back to login page",() => {
        cy.typeText(loginPage.elements.usernameTextbox(), loginData.Orangehrm.validUsername)
        cy.typeText(loginPage.elements.passwordTextbox(),loginData.Orangehrm.validPassword)
        cy.clickElement(loginPage.elements.loginButton())
        cy.checkUrl("web/index.php/dashboard/index")
        cy.clickElement(header.elements.userDropdownTab())
        cy.selectDropdownOption(header.elements.userDropdownMenuOptions(),"Logout")
        cy.checkUrl("web/index.php/auth/login")
    })

})