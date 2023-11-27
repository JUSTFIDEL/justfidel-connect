import Feed from '@components/Feed'

const Home = () => {
	return (
		<section className='w-full flex-center flex-col'>
			<h1 className='head_text text-center'>
				JustFidel
				<br className='max-md:hidden' />
				<span className='orange_gradient text-center'> Connect Worldwide</span>
			</h1>

			<p className='desc text-center'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui nulla,
				aliquet efficitur erat ut, rutrum rhoncus nulla. Aenean ex est, maximus
				at fringilla non, accumsan eu augue. Nam sodales imperdiet velit,
				euismod rhoncus dolor molestie at. Cras auctor consectetur leo, ac
				pretium tortor vestibulum eget.{' '}
			</p>

			<Feed />
		</section>
	)
}

export default Home
