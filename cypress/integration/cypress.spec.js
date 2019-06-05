const video = () => cy.get('#testrunner-video')


describe('Cypress', () => {
    describe('Testrunner', () => {
        it('should play a video with a duration of 42 seconds', () => {
            cy.slide('5/2')
            video().then($video => {
                expect($video[0].duration).to.equal(42.367)
            })
        })

        it('should autoplay the testrunner video', () => {
            cy.slide('5/2')
            cy.wait(5000)
            video().then($video => {
                expect($video[0].currentTime).to.be.greaterThan(2)
            })
        })
    })

    describe('Dashboard', () => {
        it('should fail', () => {
            cy.slide('5/9')
            expect(true).to.equal(false)
        })
    })
})