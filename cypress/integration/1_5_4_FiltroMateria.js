describe('Busqueda profesores', function() {

	it('Creacion de cuenta con loing existente.', function() {
        cy.visit('https://losestudiantes.co/universidad-de-los-andes/matematicas/profesores/adolfo-jose-quiroz-salazar')
        cy.screenshot('FiltroMateriasInicio')
        cy.get('.materias').find('input').first().check()
        cy.screenshot('FiltroMateriasFin')
    })
})
