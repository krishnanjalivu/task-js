import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import {  MdOutlineDelete } from 'react-icons/md'
import Pagination from '../pagination/Pagination'
 
let PageSize = 7;

const VendorTable = ({vendors}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return vendors.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
  return (
    <>
    <table className='w-full border-separate border-spacing-2'>
    <thead>
        <tr >
            <th className='border border-slate-600 rounded-md text-wrap p-[3px] text-white bg-blue-950'>Vendor Name</th>
            <th className='border border-slate-600 rounded-md text-wrap p-[3px] text-white bg-blue-950'>Account Number</th>
            <th className='border border-slate-600 rounded-md text-wrap p-[3px] text-white bg-blue-950 max-md:hidden '>Bank Name</th>
            <th className='border border-slate-600 rounded-md text-wrap p-[3px] text-white bg-blue-950 max-md:hidden'>Address Line 1</th>
            <th className='border border-slate-600 rounded-md text-wrap p-[3px] text-white bg-blue-950'>Address Line 2</th>
            <th className='border border-slate-600 rounded-md text-wrap p-[3px] text-white bg-blue-950'>City</th>
            <th className='border border-slate-600 rounded-md text-wrap p-[3px] text-white bg-blue-950'>Country</th>
            <th className='border border-slate-600 rounded-md text-wrap p-[3px] text-white bg-blue-950'>Zip Code</th>
        </tr>
    </thead>
    <tbody>
        {
            currentTableData.map((vendor,index) => (
                <tr key={vendor._id} className='h-8'>
                    <td className='border border-slate-700 rounded-md text-center text-blue-700'>
                        {vendor.vendorname}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center  text-blue-700'>
                        {vendor.accountno}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden  text-blue-700'>
                        {vendor.bankname}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden  text-blue-700'>
                        {vendor.addressline1}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden  text-blue-700'>
                        {vendor.addressline2}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden  text-blue-700'>
                        {vendor.city}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden  text-blue-700'>
                        {vendor.country}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden  text-blue-700'>
                        {vendor.zipcode}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center '>
                        <div className='flex justify-center gap-x-4'>
                            <Link to={`/vendors/details/${vendor._id}`}>
                                <BsInfoCircle className='text-2x1 text-green-800' />
                            </Link>
                            <Link to={`/vendors/edit/${vendor._id}`}>
                                <AiOutlineEdit className='text-2x1 text-yellow-600' />
                            </Link>
                            <Link to={`/vendors/delete/${vendor._id}`}>
                                <MdOutlineDelete className='text-2x1 text-red-600' />
                            </Link>
                        </div>
                    </td>
                </tr>
            ))
        }
    </tbody>
</table>
 <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={vendors.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>

  )
}

export default VendorTable
