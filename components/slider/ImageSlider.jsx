'use client'

import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

const ImageSlider = () => {
	const images = [
		{
			id: '0',
			author: 'Alejandro Escamilla',
			width: 5000,
			height: 3333,
			url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
			download_url: 'https://picsum.photos/id/0/5000/3333',
		},
		{
			id: '1',
			author: 'Alejandro Escamilla',
			width: 5000,
			height: 3333,
			url: 'https://unsplash.com/photos/LNRyGwIJr5c',
			download_url: 'https://picsum.photos/id/1/5000/3333',
		},
		{
			id: '2',
			author: 'Alejandro Escamilla',
			width: 5000,
			height: 3333,
			url: 'https://unsplash.com/photos/N7XodRrbzS0',
			download_url: 'https://picsum.photos/id/2/5000/3333',
		},
		{
			id: '3',
			author: 'Alejandro Escamilla',
			width: 5000,
			height: 3333,
			url: 'https://unsplash.com/photos/Dl6jeyfihLk',
			download_url: 'https://picsum.photos/id/3/5000/3333',
		},
		{
			id: '4',
			author: 'Alejandro Escamilla',
			width: 5000,
			height: 3333,
			url: 'https://unsplash.com/photos/y83Je1OC6Wc',
			download_url: 'https://picsum.photos/id/4/5000/3333',
		},
		{
			id: '5',
			author: 'Alejandro Escamilla',
			width: 5000,
			height: 3334,
			url: 'https://unsplash.com/photos/LF8gK8-HGSg',
			download_url: 'https://picsum.photos/id/5/5000/3334',
		},
		{
			id: '6',
			author: 'Alejandro Escamilla',
			width: 5000,
			height: 3333,
			url: 'https://unsplash.com/photos/tAKXap853rY',
			download_url: 'https://picsum.photos/id/6/5000/3333',
		},
	]
	return (
		<Carousel infiniteLoop>
			{/* {images.map(image => (
				<Image src={image.url} alt={image.author} width={200} height={200} />
			))} */}
			<div>
				<img src='assets/images/jf-web1.jpg' />
				<p className='legend'>Legend 1</p>
			</div>
			<div>
				<img src='assets/images/jf-web3.jpg' />
				<p className='legend'>Legend 2</p>
			</div>
			<div>
				<img src='assets/images/jf-web5.jpg' />
				<p className='legend'>Legend 3</p>
			</div>
			<div>
				<img src='assets/images/jf-web6.jpg' />
				<p className='legend'>Legend 4</p>
			</div>
			<div>
				<img src='assets/images/jf-web7.jpg' />
				<p className='legend'>Legend 5</p>
			</div>
			<div>
				<img src='assets/images/jf-web8.jpg' />
				<p className='legend'>Legend 6</p>
			</div>
			<div>
				<img src='assets/images/jf-web10.jpg' />
				<p className='legend'>Legend 7</p>
			</div>
			<div>
				<img src='assets/images/jf-web11.jpg' />
				<p className='legend'>Legend 8</p>
			</div>
		</Carousel>
	)
}

export default ImageSlider
