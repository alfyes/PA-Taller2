var assert = require('assert');
describe('los estudiantes login', function() {
    it('Creacion de cuenta con loing existente', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        
        var cajaSignUp = browser.element('.cajaSignUp');
        
        cajaSignUp.element('input[name="nombre"]').click().keys("Alfonso");
        cajaSignUp.element('input[name="apellido"]').click().keys("Ardila");
		cajaSignUp.element('input[name="correo"]').click().keys('ad.ardila@uniandes.edu.co');
		cajaSignUp.element('select[name="idUniversidad"]').selectByVisibleText('Universidad de los Andes');
		cajaSignUp.element('input[type="checkbox"]').click();
		cajaSignUp.element('select[name="idPrograma"]').selectByVisibleText('Maestría en Ingeniería de Software');
		cajaSignUp.element('input[name="password"]').click().keys('a1b2c3d4E5');
		cajaSignUp.element('input[name="acepta"]').click();
        
        cajaSignUp.element('button=Registrarse').click();
       
        browser.waitForVisible('.sweet-alert', 5000);

        var alertText = browser.element('.sweet-alert').element('.text-muted').element('div').getText();
        expect(alertText).toContain('Error: Ya existe un usuario registrado con el correo');

        
    });
});
