import React from 'react'
import Card from './Card'
type Props = {}

const CardList:React.FC<Props> = (props: Props):JSX.Element => {
  return (
    <div className="row"> 
        <Card companyName="Apple" ticker="AAPL" price={100}/>
        <Card companyName="Microsoft" ticker="MSFT" price={300}/>
        <Card companyName="Tesla" ticker="TSLA" price={200}/>
    </div>
  )
}

export default CardList