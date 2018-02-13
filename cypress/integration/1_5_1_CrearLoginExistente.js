describe('Los estudiantes login', function() {

	it('Creacion de cuenta con loing existente.', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()

		cy.contains('Ingresar').click()
		
		cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Alfonso")
		cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Alfonso")
		cy.get('.cajaSignUp').find('input[name="correo"]').click().type("ad.ardila@uniandes.edu.co")
		cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes')
		cy.get('.cajaSignUp').find('input[type="checkbox"]').check()
		cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Maestría en Ingeniería de Software')
		cy.get('.cajaSignUp').find('input[name="password"]').click().type('a1b2c3d4E5')
		cy.get('.cajaSignUp').find('input[name="acepta"]').check()
		cy.get('.cajaSignUp').contains('Registrarse').click()
		cy.wait(2000);
		cy.contains('Error: Ya existe un usuario registrado con el correo')

	
    })
})
