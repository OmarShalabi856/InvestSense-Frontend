import React from 'react'
import Hero from '../../Components/Hero'
import Start from '../../Components/Start/Start'
type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className="flex justify-between items-center p-3">
    <Start/>
     <Hero/>
    </div>
   
  )
}

export default HomePage