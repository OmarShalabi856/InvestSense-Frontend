import React from 'react';


interface Props {
  title: string;
  subtitle: any;
  icon: any;
}

export const Tile = ({ title, subtitle, icon }: Props) => {
  return (
    <div className="rounded shadow-md shadow-gray-400 h-full flex flex-col justify-center items-center p-2">
      <div className="flex flex-col justify-between">
      <h1 className='text-sm font-semibold'>{title}</h1>
      <span className='text-lg font-bold'>{subtitle}</span>
      <div className="flex justify-center items-center">
        {icon}
      </div>
      </div>
    </div>
  );
};
