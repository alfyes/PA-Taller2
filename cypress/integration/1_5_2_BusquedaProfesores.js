describe('Busqueda profesores', function() {

	it('Creacion de cuenta con loing existente.', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()

		cy.get('.buscador').find('input[role="combobox"]').type('Adolfo Jose Quiroz Salazar',{force: true})
		//cy.get('.buscador').find('.Select-control').click({force: true}).get('input:last').then(function($input){
		//	$input[0].setAttribute('value','Francisco')
		//})
		//cy.get('.buscador').find('.Select-control').click({force: true}).get('input:last').invoke('attr', 'value', 'Francisco')

		//cy.get('.buscador').find('.Select-control input').click({force: true}).type('Adolfo Jose Quiroz Salazar{enter}',{force: true})//.get('input:last').type('Francisco{enter}')
	
    })
})
