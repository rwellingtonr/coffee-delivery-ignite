/// <reference types="cypress" />

import { getCoffeeCard } from '../../__test__/utils/getCoffeCard'

describe('Buy Coffee', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Should select a coffee, fill in the address form and complete the checkout process', () => {
		const { counterSpan, increaseButton, shippingButton } = getCoffeeCard(1)

		cy.get(increaseButton).click()
		cy.get(counterSpan).should('have.text', '2')
		cy.get(shippingButton).click()

		const cartButton = '#root > header > div > button > button'
		cy.get(cartButton).click()

		cy.location('pathname').should('eq', '/checkout')

		const inputCep =
			'#root > form > div.sc-kOPcWz.kAjfaa.input_container > section.sc-eDPEul.guWdtO > div > div.sc-gFqAkR.kvXKfA > div:nth-child(1) > input'

		cy.get(inputCep).type('13280182')

		const inputUf =
			'#root > form > div.sc-kOPcWz.kAjfaa.input_container > section.sc-eDPEul.guWdtO > div > div.sc-gFqAkR.kvXKfA > div.city-address > div:nth-child(3) > input'

		cy.get(inputUf).should('have.value', 'SP')

		const inputNumber =
			'#root > form > div.sc-kOPcWz.kAjfaa.input_container > section.sc-eDPEul.guWdtO > div > div.sc-gFqAkR.kvXKfA > div.additional-address > div:nth-child(1) > input'

		cy.get(inputNumber).type('80')

		const credCardButton =
			'#root > form > div.sc-kOPcWz.kAjfaa.input_container > section.sc-iHGNWf.dPbpOq > div > div.sc-koXPp.gQRCiW > button:nth-child(1)'

		cy.get(credCardButton).click()

		const submitButton = '#root > form > div.sc-kOPcWz.kAjfaa.checkout_container > section > button'

		cy.get(submitButton).click()

		cy.location('pathname').should('eq', '/delivery')
	})
})
