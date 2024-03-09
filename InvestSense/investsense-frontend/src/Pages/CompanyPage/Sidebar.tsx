import React from 'react';
import { Link } from 'react-router-dom';
import { MdAssuredWorkload } from 'react-icons/md';
import { FaMoneyCheckDollar } from "react-icons/fa6";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className='divide-y-2 h-screen lg:w-1/4 sm:w-1/3 rounded shadow-md shadow-gray-500 flex flex-col p-3 '>
      <Link className='w-full flex items-start my-2' to="company-profile">
        <MdAssuredWorkload  className='mt-1'/>
        <span className='ml-2 font-bold text-md text-sm'>COMPANY PROFILE</span>
      </Link>
      <Link className='w-full flex items-start my-2' to="income-statement">
        <FaMoneyCheckDollar  className='mt-1'/>
        <span className='ml-2 font-bold text-sm'>INCOME STATEMENT</span>
      </Link>
    </div>
  );
};

export default Sidebar;
