
describe('user can connect to homepage', () => {
	it('test connectivity to localhost', () => {
		cy.visit('http://localhost:3001')
		
	})

	it('tests button functionality', () => {
		cy.get('#qoute').click()
	})


	it('checks for greeting', () => {
		cy.get('#message').should('contain', "hello how are you")
	})
})