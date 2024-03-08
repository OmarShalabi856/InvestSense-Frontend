import React from 'react'
import { Tile } from './Tile'

type Props = {}

const CompanyDashboard = (props: Props) => {
  return (
    <div className='w-full mx-5 grid grid-cols-3 gap-2 h-full'>
        <Tile title="Tesla" subtitle="best company" />
        <Tile title="Tesla" subtitle="best company" />
        <Tile title="Tesla" subtitle="best company" />

    </div>
  )
}

export default CompanyDashboard