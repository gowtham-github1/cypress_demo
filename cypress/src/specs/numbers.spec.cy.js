var cheerio = require('cheerio');

it("numbers test",() => {
    cy.request({
        method: 'GET',
        url: 'https://receivesms.co/inactive-numbers/500/',
    }).then((response)=>{
        expect(response.status).to.eq(200);
        cy.log(response.body);
        // links = $('a[class="btn"]');
        // $(links).each(function (i, link) {
        // console.log(i + ': ' +  $(link).attr('data-clipboard-text'));
        // });
    })
})