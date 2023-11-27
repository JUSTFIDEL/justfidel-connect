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
		<nav className='flex-between w-full mb-16 pt-3'>
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
				<div className='flex gap-3 md:gap-5'>
					<Link href='/about' className='nav_text uppercase'>
						About
					</Link>

					<Link href='/design' className='nav_text uppercase'>
						Design
					</Link>

					<Link href='/social' className='nav_text uppercase'>
						Social
					</Link>

					<Link href='/contact' className='nav_text uppercase'>
						Contact Us
					</Link>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div className='sm:hidden flex relative'>
				<div className='flex'>
					{/* <Image
						src='/assets/icons/menu.svg'
						width={37}
						height={37}
						alt='menu'
						className='cursor-pointer'
						onClick={() => {
							setToggleDropdown(prev => !prev)
						}}
					/> */}

					<button
						className='cursor-pointer text-xs m-3 hamburger_open'
						onClick={() => {
							setToggleDropdown(prev => !prev)
						}}
					>
						<FontAwesomeIcon icon={faBars} />
					</button>

					{toggleDropdown && (
						<div className='dropdown'>
							<button
								className='cursor-pointer text-xs m-3 hamburger_close'
								onClick={() => {
									setToggleDropdown(prev => !prev)
								}}
							>
								<FontAwesomeIcon icon={faClose} />
							</button>

							<Link
								href='/about'
								className='nav_text uppercase dropdown_link'
								onClick={() => {
									setToggleDropdown(prev => !prev)
								}}
							>
								About
							</Link>

							<Link
								href='/design'
								className='nav_text uppercase dropdown_link'
								onClick={() => {
									setToggleDropdown(prev => !prev)
								}}
							>
								Design
							</Link>

							<Link
								href='/social'
								className='nav_text uppercase dropdown_link'
								onClick={() => {
									setToggleDropdown(prev => !prev)
								}}
							>
								Social
							</Link>

							<Link
								href='/contact'
								className='nav_text uppercase dropdown_link'
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
