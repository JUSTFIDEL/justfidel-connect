import Link from 'next/link'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
	return (
		<section className='w-full max-w-full flex flex-col'>
			<h1 className='head_form text-left'>
				<span className='green_gradient'>{type} Us</span>
			</h1>

			<p className='desc text-left max-w-md'>
				Send us a {type} and we will get in touch as soon as possible.
			</p>

			<form
				onSubmit={handleSubmit}
				className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
			>
				<label>
					<span className='font-satoshi font-semibold text-base text-gray-700'>
						Name
					</span>

					<input
						value={post.name}
						onChange={e => setPost({ ...post, name: e.target.value })}
						placeholder='Enter your name'
						required
						className='form_input'
					/>
				</label>

				<label>
					<span className='font-satoshi font-semibold text-base text-gray-700'>
						Email
					</span>

					<input
						value={post.email}
						onChange={e => setPost({ ...post, email: e.target.value })}
						placeholder='Enter your email'
						required
						className='form_input'
					/>
				</label>

				<label>
					<span className='font-satoshi font-semibold text-base text-gray-700'>
						Message
					</span>

					<textarea
						value={post.message}
						onChange={e => setPost({ ...post, message: e.target.value })}
						placeholder='Enter your message here...'
						required
						className='form_textarea'
					/>
				</label>

				<div className='flex-end mx-3 mb-5 gap-4'>
					<Link href='/' className='text-gray-500 text-sm'>
						Cancel
					</Link>

					<button
						type='submit'
						disabled={submitting}
						className='px-5 py-1.5 text-sm bg-primary-green rounded-full text-white'
					>
						{submitting ? `${type}...` : type}
					</button>
				</div>
			</form>
		</section>
	)
}

export default Form
