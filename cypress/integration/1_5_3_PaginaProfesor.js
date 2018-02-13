describe('Ir a la pagina de un profesor', function() {

	it('Ir a pagina primer profesor.', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()

		
		cy.get('.profesor').first().click()
		cy.wait(4000)
		cy.url().should('include', '/profesores')
	
    })
})
