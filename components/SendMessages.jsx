'use client'

import { toast } from 'react-toastify'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { useSession } from 'next-auth/react'

import Form from '@components/Form'

const SendMessages = () => {
	const router = useRouter()
	const [submitting, setSubmitting] = useState(false)
	const [post, setPost] = useState({
		name: '',
		email: '',
		message: '',
	})

	const sendMessage = async e => {
		e.preventDefault()
		setSubmitting(true)

		try {
			const response = await fetch('/api/message/new', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: post.name,
					email: post.email,
					message: post.message,
				}),
			})

			if (response.ok) {
				toast('Message Sent Successfully!!!', {
					hideProgressBar: true,
					autoClose: 2000,
					type: 'success',
					position: 'top-center',
				})
				router.push('/')
			}
		} catch (err) {
			console.log(err)
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<Form
			type='Send'
			post={post}
			setPost={setPost}
			submitting={submitting}
			handleSubmit={sendMessage}
		/>
	)
}

export default SendMessages
