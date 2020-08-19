
describe('user can connect to homepage', () => {
	it('test', () => {
		cy.visit('http://localhost:3001')
		cy.get('#quote').click()
	})

	it('checks for greeting', () => {
		cy.get('#message').should('contain', "hello how are you")
	})
})