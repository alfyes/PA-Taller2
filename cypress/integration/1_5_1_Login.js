describe('Los estudiantes login', function() {
	
	it('Visits los estudiantes and login ok', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()

		cy.contains('Ingresar').click()
		cy.get('.cajaLogIn').find('input[name="correo"]').click().type("ad.ardila@uniandes.edu.co")
		cy.get('.cajaLogIn').find('input[name="password"]').click().type("a1b2c3d4E5")
		cy.get('.cajaLogIn').contains('Ingresar').click()
		cy.get('.navbar').find('button[id="cuenta"]')	
	})
})
