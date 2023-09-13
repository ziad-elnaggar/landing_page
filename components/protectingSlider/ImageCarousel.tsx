import React from 'react'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

const ImageCarousel = ({ images, cards, options }:
  { images?: Array<string>, cards?: Array<Record<string, any>>, options?: Record<string, any> }) => {
  return (
    <div style={{direction: 'ltr'}}>
      <Splide aria-label="slides" options={{rewind: true, width: '100%', type: 'loop', perMove: 1,
        ...options}}>
        {images && images.map((image) => {
          return <SplideSlide key={image}>
            <Image src={image} alt="image" width={200} height={150} className='w-96 h-80 object-contain bg-[#1C1C1C] px-24 py-6 rounded-2xl' />
          </SplideSlide>
        })}

        {cards && cards.map((card: any) => {
          return <SplideSlide key={card.name}>
            {card}
          </SplideSlide>
        })}
      </Splide>
    </div>
  )
}

export default ImageCarousel