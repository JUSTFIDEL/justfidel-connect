import mongoose from 'mongoose'

let isConnected = false // to track connections

export const connectToDB = async () => {
	mongoose.set('strictQuery', true)

	if (isConnected) {
		console.log('MongoDB is already connected')
		return
	}

	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			dbName: 'JF-Connect',
			// useNewUrlParser: true,
			// useUnifiedTopology: true,
		})

		isConnected = true

		console.log('MongoDB Connected')
	} catch (err) {
		console.log(err)
	}
}