import React from 'react';
import { Link } from 'react-router-dom';
import { MdAssuredWorkload, MdOutlineCalculate } from 'react-icons/md';
import { FaMoneyCheckDollar,FaMoneyBillTransfer,FaChartLine} from "react-icons/fa6";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className=' h-screen min-w-max rounded shadow-md shadow-gray-500 flex flex-col p-4 fixed '>
      <Link className='w-full flex items-start my-2 ' to="company-profile">
        <MdAssuredWorkload  className='mt-1'/>
        <span className='ml-2 font-bold text-md text-sm'>COMPANY PROFILE</span>
      </Link>
      <Link className='w-full flex items-start my-2 ' to="income-statement">
        <FaMoneyCheckDollar  className='mt-1'/>
        <span className='ml-2 font-bold text-sm'>INCOME STATEMENT</span>
      </Link>
      <Link className='w-full flex items-start my-2 ' to="balance-sheet">
        <MdOutlineCalculate  className='mt-1'/>
        <span className='ml-2 font-bold text-sm'>BALANCE SHEET</span>
      </Link>
      <Link className='w-full flex items-start my-2 ' to="cashflow-statement">
        <FaMoneyBillTransfer  className='mt-1'/>
        <span className='ml-2 font-bold text-sm'>CASHFLOW STATEMENT</span>
      </Link>
      <Link className='w-full flex items-start my-2 ' to="historical-dividend">
        <FaChartLine  className='mt-1'/>
        <span className='ml-2 font-bold text-sm'>HISTORICAL DIVIDEND</span>
      </Link>
    </div>
  );
};

export default Sidebar;
