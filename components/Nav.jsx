'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
	const [toggleDropdown, setToggleDropdown] = useState(false)
	return (
		<nav className='z-[1000] flex-between w-full mb-8 px-4 py-2 md:py-8 md:mb-16 fixed top-0 left-0 right-0 md:px-16 bg-[#f0f0f0] '>
			<Link href='/' className='flex gap-2 flex-center'>
				<Image
					src='/assets/images/jf.png'
					alt='justfidel logo'
					width={40}
					height={40}
					className='object-contain'
				/>
				<p className='logo_text'>JustFidel</p>
			</Link>

			{/* Desktop Navigation */}
			<div className='sm:flex hidden'>
				<div className='flex gap-3 md:gap-7'>
					<Link href='/about' className='nav_text uppercase text-gray-700'>
						About
					</Link>

					<Link href='/design' className='nav_text uppercase text-gray-700'>
						Design
					</Link>

					<Link href='/social' className='nav_text uppercase text-gray-700'>
						Social
					</Link>

					<Link href='/contact' className='nav_text uppercase text-gray-700'>
						Contact Us
					</Link>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div className='sm:hidden flex relative'>
				<div className='flex'>
					<button
						className='cursor-pointer text-xs m-3 hamburger_open '
						onClick={() => {
							setToggleDropdown(prev => !prev)
						}}
					>
						<FontAwesomeIcon icon={faBars} className='text-gray-700' />
					</button>

					{toggleDropdown && (
						<div className='dropdown'>
							<button
								className='cursor-pointer text-xs m-3 hamburger_close'
								onClick={() => {
									setToggleDropdown(prev => !prev)
								}}
							>
								<FontAwesomeIcon icon={faClose} className='text-gray-700' />
							</button>

							<Link
								href='/about'
								className='nav_text uppercase dropdown_link text-gray-700'
								onClick={() => {
									setToggleDropdown(prev => !prev)
								}}
							>
								About
							</Link>

							<Link
								href='/design'
								className='nav_text uppercase dropdown_link text-gray-700'
								onClick={() => {
									setToggleDropdown(prev => !prev)
								}}
							>
								Design
							</Link>

							<Link
								href='/social'
								className='nav_text uppercase dropdown_link text-gray-700'
								onClick={() => {
									setToggleDropdown(prev => !prev)
								}}
							>
								Social
							</Link>

							<Link
								href='/contact'
								className='nav_text uppercase dropdown_link text-gray-700'
								onClick={() => {
									setToggleDropdown(prev => !prev)
								}}
							>
								Contact Us
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}

export default Nav
