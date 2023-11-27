import { connectToDB } from '@utils/database'
import Message from '@models/message'

export const POST = async req => {
	const { name, email, message } = await req.json()

	try {
		await connectToDB()

		const newMessage = new Message({
			// sender: email,
			name,
			email,
			message,
		})

		await newMessage.save()

		return new Response(JSON.stringify(newMessage), { status: 201 })
	} catch (err) {
		return new Response('Failed to send a new message', { status: 500 })
	}
}
