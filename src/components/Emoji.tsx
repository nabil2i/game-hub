import React from 'react'
import bullseye  from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-Up.webp';
import meh from '../assets/meh.webp';
import { ImageProps, Image } from '@chakra-ui/react';

interface Props {
  rating: number;
}
const Emoji = ( { rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps} = { // index signature, object can have any number of keys and j eys are numbers
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px'},
    5: { src: bullseye, alt: 'exceptional', boxSize: '35px'},
  }
  return (
    <Image  { ...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji