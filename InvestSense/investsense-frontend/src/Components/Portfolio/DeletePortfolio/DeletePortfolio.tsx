import React, { MouseEventHandler, SyntheticEvent } from 'react'

interface Props {
symbol:string
onDeletePortfolio:(e:SyntheticEvent)=>void
}

const DeletePortfolio = ({symbol,onDeletePortfolio}: Props) => {
  return (
    <form onSubmit={onDeletePortfolio}>
        <input readOnly={true} hidden={true} value={symbol}></input>
        <button type='submit'>X</button>
    </form>
    
  )
}

export default DeletePortfolio