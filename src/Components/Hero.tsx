import React from 'react'
import MainHero from './Images/MainHero.png'

type Props = {}

const Hero = (props: Props) => {
  return (
    <img className='float-right' src={MainHero} alt="" />
  )
}

export default Hero