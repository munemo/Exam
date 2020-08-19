
describe('Exam application', () => {
	it('tests connectivity to local host', () => {
		cy.visit('http://localhost:3001')
		
	})

	it('test button functionality when clicked', () => {
		cy.get('#quote').click()
	})


	it('test for greeting after button is clicked', () => {
		cy.get('#message').should('contain', "hello how are you")
	})
})