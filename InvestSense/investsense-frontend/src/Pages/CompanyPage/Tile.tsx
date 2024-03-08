import { totalmem } from 'os'
import React from 'react'

interface Props 
 {
    title:string,
    subtitle:string
 }

export const Tile = ({title,subtitle}: Props) => {
  return (
    <div className="rounded shadow-md shadow-gray-400 h-full">
        <h1>{title}</h1>
        <span>{subtitle}</span>
    </div>
  )
}