import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export const metadata = {
	title: 'Admin | JustFidel',
}

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<div className='main'>
					<div className='gradient' />
				</div>

				<main className='app'>
					<Nav />
					<ToastContainer />
					{children}
				</main>
			</body>
		</html>
	)
}

export default RootLayout
