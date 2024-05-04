import { Banner } from './components/Banner'
import { CoffeeList } from './components/CoffeeList'
import { Spacer } from './styles'

export function Home() {
	return (
		<>
			<Banner />
			<CoffeeList />
			<Spacer />
		</>
	)
}
