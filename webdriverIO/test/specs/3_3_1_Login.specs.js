var assert = require('assert');
describe('los estudiantes login', function() {
    it('Visits los estudiantes and login ok', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('ad.ardila@uniandes.edu.co');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('a1b2c3d4E5');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('button[id="cuenta"]', 5000);
    });
});
