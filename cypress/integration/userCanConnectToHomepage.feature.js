
describe('user can connect to homepage', () => {
	it('test', () => {
		cy.visit('http://localhost:3001')
		cy.get('#quote').click()
	})
})