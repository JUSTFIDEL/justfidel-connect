import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
	return (
		<section className='w-full flex flex-col md:flex-row  justify-between gap-5 sm:gap-8'>
			<div className='flex-1'>
				<h1 className='head_text mt-0 text-left mb-4'>
					Let's Build that
					<br />
					<span className='green_gradient text-3xl sm:text-5xl'>
						Amazing website for you.
					</span>
				</h1>

				<p className='desc '>
					We are dedicated to providing top-notch web development services to
					help businesses and individuals create stunning and functional
					websites. Whether you need a simple blog or a complex e-commerce
					platform, we have the expertise to bring your vision to life.
					<br />
					<br /> Our team of experienced developers and designers is committed
					to delivering high-quality, custom solutions tailored to your specific
					needs.
				</p>

				{/* Explore our services and portfolio to see how we can help you elevate your online presence. Let's build something amazing together! */}

				<Link href={'/contact'}>
					<button className='bg-green-700 px-4 py-2 rounded-md text-white mt-8 md:mt-12'>
						Contact Us
					</button>
				</Link>
			</div>

			<div>
				<div className='mt-5 mb-5'>
					<Image
						src='/assets/images/jf-web1.jpg'
						width={450}
						height={450}
						alt='hero1'
						sizes='50vw'
						style={{ width: '100%', height: 'auto' }} // optional
					/>
				</div>

				{/* <div className='hidden md:absolute right-0 bottom-[-50px] rounded-full object-cover overflow-hidden'>
					<Image
						src='/assets/images/image10.jpg'
						width={0}
						height={0}
						alt='hero2'
						sizes='100vw'
						style={{ width: '100%', height: 'auto' }} // optional
					/>
				</div> */}
			</div>
		</section>
	)
}

export default Home
