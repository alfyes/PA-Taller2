module.exports = {
  'Ir a la pagina del profesor Adolfo': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .click('.buscador')
      .setValue('.buscador input[role="combobox"]','Adolfo Jose Quiroz Salazar')
      .waitForElementVisible('.Select-option', 10000)
      .assert.containsText('.Select-option', 'Adolfo Jose Quiroz Salazar')
      .click('.Select-option')
      .waitForElementVisible('.nombreProfesor', 10000)
      .assert.containsText('.nombreProfesor', 'Adolfo Jose Quiroz Salazar')
      .end();
  }
};