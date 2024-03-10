import React from 'react';

interface Props {
  title: string;
  subtitle: any;
}

export const Tile = ({ title, subtitle }: Props) => {
  return (
    <div className="rounded shadow-md shadow-gray-400 h-full flex flex-col items-start justify-start p-2">
      <h1 className='text-sm font-semibold'>{title}</h1>
      <span className='text-lg font-bold'>{subtitle}</span>
    </div>
  );
};
