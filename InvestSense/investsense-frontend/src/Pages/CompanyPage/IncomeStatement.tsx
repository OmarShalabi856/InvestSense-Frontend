import React from 'react'
import Table from '../../Components/Table'

type Props = {}

function IncomeStatement({}: Props) {
  return (
    <div className="flex flex-col gap-2">
        <Table />
      </div>
  )
}

export default IncomeStatement