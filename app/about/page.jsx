import ImageSlider from '@components/slider/ImageSlider'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
	title: 'About',
}

const About = () => {
	return (
		// <section className='w-full flex flex-col md:flex-row  justify-between gap-5 sm:gap-8'>
		<section className='w-full'>
			<div className='flex-1 mb-6'>
				<h1 className='head_text mt-0 text-left md:text-left green_gradient'>
					About Us
					<br />
				</h1>

				<p className='desc w-full'>
					We are a team of passionate and dedicated web development
					professional, who are committed to creating stunning and functional
					websites for our clients. With years of experience in the industry, we
					have honed our skills and expertise to deliver top-notch web
					development services.
				</p>

				<Link href={'/contact'}>
					<button className='bg-green-700 px-4 py-2 rounded-md text-white mt-5 md:mt-12'>
						Contact Us
					</button>
				</Link>
			</div>

			<ImageSlider />

			<div className='flex-1 mb-6'>
				<h1 className='text-3xl font-extrabold sm:text-5xl mt-0 text-left md:text-left green_gradient'>
					Our Mission
				</h1>
				<article className='desc w-full'>
					Our mission is to help small and large businesses and individuals
					establish a strong online presence through innovative and
					user-friendly websites. We understand the importance of a
					well-designed website in today's digital age, and we strive to exceed
					our clients' expectations with every project.
					<br />
					<br /> At our core, we value creativity, collaboration, and continuous
					learning. We stay updated with the latest web development trends and
					technologies to ensure that we deliver cutting-edge solutions to our
					clients.
					<br /> Our team works closely with our clients to understand their
					unique needs and goals, and we tailor our approach to meet their
					specific requirements. Whether you need a simple and elegant website
					or a complex and dynamic web application, we have the skills and
					expertise to bring your vision to life.
					<br /> We take pride in our attention to detail, our commitment to
					quality, and our ability to deliver projects on time and within
					budget.
				</article>
			</div>
		</section>
	)
}

export default About
