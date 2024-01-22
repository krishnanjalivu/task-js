import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';

const ShowVendor = () => {

    const [vendor, setVendor] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id}=useParams();
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/vendors/${id}`)
            .then((response) => {
                setVendor(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);
  return (
    <div className='p-4 '>
      <Backbutton />
      <h1 className='text-3xl my-4 font-bold text-blue-950'>Show Vendor</h1>
      {loading ? (<Spinner/>):(
        <div className='flex flex-col border-2 text-white bg-blue-950 rounded-[20px] mx-auto w-[600px] p-3 '>
        <div className='my-4'>
        <span className='text-lg mr-4 '>
         Vendor Name : 
        </span>
        <span>{vendor.vendorname}</span>

        </div>
        <div className='my-4'>
        <span className='text-lg mr-4'>
         Account Number :
        </span>
        <span>{vendor.accountno}</span>

        </div>
        <div className='my-4'>
        <span className='text-lg mr-4'>
         Bank Name :
        </span>
        <span>{vendor.bankname}</span>

        </div>
        <div className='my-4'>
        <span className='text-lg  mr-4'>
        Address Line 1 :
        </span>
        <span>{vendor.addressline1}</span>

        </div>
        <div className='my-4'>
        <span className='text-lg mr-4'>
        Address Line 2 :
        </span>
        <span>{vendor.addressline2}</span>

        </div>
        <div className='my-4'>
        <span className='text-lg  mr-4'>
        City :
        </span>
        <span>{vendor.city}</span>

        </div>
        <div className='my-4'>
        <span className='text-lg  mr-4'>
        Country :
        </span>
        <span>{vendor.country}</span>

        </div>
        <div className='my-4'>
        <span className='text-lg mr-4'>
        Zip Code :
        </span>
        <span>{vendor.zipcode}</span>

        </div>

      </div>


      )}
    </div>
  )
}

export default ShowVendor
