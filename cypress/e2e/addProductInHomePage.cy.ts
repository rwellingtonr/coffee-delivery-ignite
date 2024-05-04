/// <reference types="cypress" />

import { getCoffeeCard } from '../../__test__/utils/getCoffeCard'

describe('Home Page Flow', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should add a product to shopping cart', () => {
		const { counterSpan, increaseButton, shippingButton } = getCoffeeCard(1)

		const badge = '#root > header > div > button > span'

		cy.get(increaseButton).click()
		cy.get(counterSpan).should('have.text', '2')
		cy.get(shippingButton).click()
		cy.get(badge).should('have.text', '1')
	})

	it('should add two products to shopping cart', () => {
		for (let index = 1; index < 3; index++) {
			const { counterSpan, increaseButton, shippingButton } = getCoffeeCard(index)

			cy.get(increaseButton).click()
			cy.get(counterSpan).should('have.text', '2')
			cy.get(shippingButton).click()
		}

		const badge = '#root > header > div > button > span'

		cy.get(badge).should('have.text', '2')
	})
})
