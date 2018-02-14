var assert = require('assert');
describe('los estudiantes login', function() {
    it('Busca profesor Adolfo Jose Quiroz Salazar', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        
        var buscador = browser.element('.buscador');
        
        buscador.click().keys('Adolfo Jose Quiroz Salazar');

        browser.waitForVisible('.Select-menu-outer', 5000);

    });
});
