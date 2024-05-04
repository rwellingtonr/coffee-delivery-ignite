export const getCoffeeCard = (index: number) => {
	const increaseButton = `#root > main > div > div > section:nth-child(${index}) > footer > div.sc-jEACwC.GckaF > div > button:nth-child(3)`
	const counterSpan = `#root > main > div > div > section:nth-child(${index}) > footer > div.sc-jEACwC.GckaF > div > span.counter`
	const shippingButton = `#root > main > div > div > section:nth-child(${index}) > footer > div.sc-jEACwC.GckaF > button`

	return {
		increaseButton,
		counterSpan,
		shippingButton,
	}
}
