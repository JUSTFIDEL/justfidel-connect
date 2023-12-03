import Link from 'next/link'
import React from 'react'

export const metadata = {
	title: 'Design',
}

const Design = () => {
	return (
		// <section className='w-full flex flex-col md:flex-row  justify-between gap-5 sm:gap-8'>
		<section className='w-full'>
			<div className='flex-1 mb-6'>
				<h1 className='head_text mt-0 text-left green_gradient'>Web Design</h1>

				<p className='desc w-full mt-2'>
					Established in 2022, JustFidel has earned a reputation as a top agency
					specializing in web development and maintenance. Our dedicated team of
					in-house developers, web designers, and copywriters has consistently
					delivered creative designs, responsive layouts, and CMS modules for
					businesses of all sizes, from small to Fortune 500 companies. As a
					premier web design agency in Abu Dhabi & Dubai, we are proud to create
					and develop websites for leading global brands. You only have five
					seconds to captivate a visitor on your website. At JustFidel, we
					understand the importance of a website that acts as your hardest
					working salesperson, always dedicated, multi-tasking, and focused on
					driving your bottom line. While anyone can set up a website, we
					specialize in crafting engaging websites that instantly establish
					credibility, effectively communicate messaging to target audiences,
					and ultimately convert users into customers. Our Website Design
					Specializations include: - Corporate Websites - Landing Pages -
					Responsive Websites - Blog and News Websites - E-Commerce Websites -
					Online Communities - Microsites - Mobile Websites - Lead Generation
					Websites We build websites that deliver results! Our services include:
					Responsive Website Development: We create websites that work
					seamlessly on all platforms, ensuring an optimal user experience on
					desktops, tablets, and smartphones. Content Management System: We
					offer easy-to-manage websites with the right CMS, working with
					platforms such as WordPress, Magento, and Drupal. E-Commerce
					Development: Our expertise in converting traffic into customers
					ensures that your e-commerce website becomes a powerful selling tool,
					equipped for SEO.
				</p>

				<Link href={'/contact'}>
					<button className='bg-green-700 px-4 py-2 rounded-md text-white mt-5 mb-5 md:mt-12'>
						Contact Us
					</button>
				</Link>

				<p className='desc w-full mt-2'>
					JustFidel helps businesses navigate the ever-evolving digital
					landscape and achieve their goals. Through our website design process,
					we analyze performance data, conversion data, content opportunities,
					and conduct user experience studies to make informed decisions. Our
					website goals include: - Generating top-of-the-funnel leads -
					Generating consideration-stage leads - Improving lead conversion rates
					- Providing an enhanced buyer's journey - Enhancing organic search
					(SEO) - Building measurable engagement - Driving sales Responsive
					Website Design: What is Responsive Design? A responsive design ensures
					that your website adapts to each unique device, automatically resizing
					all content, images, and functionalities for mobile, tablet, and
					desktop. Why Use Responsive Website Design? Whether customers are
					accessing your site on-the-go or from their desktop, the user
					experience is always optimized. A responsive website dynamically
					adjusts its layout for mobile, tablet, and desktop, ensuring ease of
					use on any device. Mobile Usage: Rapidly Growing Mobile Usage: With
					mobile web usage growing rapidly, a website that is not responsive for
					mobile devices could miss out on significant business opportunities.
					Our professional responsive designs deliver outstanding results for
					all users, regardless of device. Time and Cost: Efficient in Terms of
					Time and Cost: Responsive website design creates efficiency in
					development time and cost. This approach allows you to optimize your
					online business for all devices with a single design, eliminating the
					need for building a separate mobile site. Ranking High: Best Practices
					for Ranking High in Mobile Search Results: Responsive design is the
					preferred option for making your website both mobile-friendly and
					search engine-friendly. A responsive website greatly benefits your SEO
					initiatives and aligns with Google’s ‘mobile-first index’ approach,
					providing an optimized experience for all screen sizes and improving
					search engine visibility.
				</p>
			</div>

			{/* <ImageSlider /> */}

			<div className='flex-1 mb-6'>
				<h1 className='text-3xl font-extrabold sm:text-5xl mt-0 text-left md:text-left green_gradient'>
					Our Mission
				</h1>
				<p className='desc w-full'></p>
			</div>
		</section>
	)
}

export default Design
