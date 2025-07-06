import React, { SyntheticEvent } from 'react'
import '../../../index.css'

interface Props  {
onPortfolioCreate:(e:SyntheticEvent)=>void,
symbol :string
}

const AddPortfolio = ({onPortfolioCreate,symbol}: Props) => {
  return (
    <>
    <form  onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} />
        <button type='submit'  className='blue-button mx-2'>Add</button>
    </form>
    
    </>
  )
}

export default AddPortfolio