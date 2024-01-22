import React,{useState} from 'react'
import Backbutton from '../components/Backbutton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateVendor = () => {
    const [vendorname,setVendorname]=useState('');
    const [accountno,setAccountno] = useState('');
    const [bankname,setBankname]=useState('');
    const [addressline1,setAddressline1]=useState('');
    const [addressline2,setAddressline2]=useState('');
    const [city,setCity]=useState('');
    const [country,setCountry]=useState('');
    const [zipcode,setZipcode]=useState('');
    const [loading,setLoading]=useState('false');
    const navigate=useNavigate();
    
    const handleSaveVendor=()=>{
     const data={
        vendorname,accountno,bankname,addressline1,addressline2,city,country,zipcode
     };
     setLoading(true);
     axios.post('http://localhost:5555/vendors',data)
     .then(()=>{
        setLoading(false);
        
        navigate('/home');
     })
     .catch((error)=>{
        setLoading(false);
        // alert('An error happend')
        
        console.log(error);
     })
    };
  return (
    <div className='p-4'>
      <Backbutton />
      <h1 className='text-3xl font-bold border-blue-950'>Create Vendor</h1>
      {loading ? (<Spinner/>):''}
      <div className='flex flex-col border-2 border-blue-950 rounded w-[600px] p-5 mx-auto '>
       <div className='my-2'>
       <label className='required text-x1 mr-4 text-gray-500'>Vendor Name</label>
        <input type='text' required="" value={vendorname} onChange={(e)=>setVendorname(e.target.value)} className='rounded-[15px] border-2 border-blue-950 px-4 py-2 w-full'  />
       </div>
       <div className='my-2'>
       <label className='required text-x1 mr-4 text-gray-500'>Account Number</label>
        <input type='text' value={accountno} onChange={(e)=>setAccountno(e.target.value)} className='rounded-[15px]  border-2 border-blue-950 px-4 py-2 w-full'  />
       </div>
       <div className='my-2'>
       <label className='required text-x1 mr-4 text-gray-500'>  Bank Name</label>
        <input type='text' value={bankname} onChange={(e)=>setBankname(e.target.value)} className='rounded-[15px]  border-2 border-blue-950 px-4 py-2 w-full'  />
       </div>
       <div className='my-2'>
       <label className='text-x1 mr-4 text-gray-500'>       Address Line 1</label>
        <input type='text' value={addressline1} onChange={(e)=>setAddressline1(e.target.value)} className='rounded-[15px]  border-2 border-blue-950 px-4 py-2 w-full'  />
       </div>
       <div className='my-2'>
       <label className='required text-x1 mr-4 text-gray-500'>     Address Line 2</label>
        <input type='text' value={addressline2} onChange={(e)=>setAddressline2(e.target.value)} className='rounded-[15px]  border-2 border-blue-950 px-4 py-2 w-full'  />
       </div>
       <div className='my-2'>
       <label className='required text-x1 mr-4 text-gray-500'>   City</label>
        <input type='text' value={city} onChange={(e)=>setCity(e.target.value)} className='rounded-[15px]  border-2 border-blue-950 px-4 py-2 w-full'  />
       </div>
       <div className='my-2'>
       <label className='required text-x1 mr-4 text-gray-500'> Country </label>
        <input type='text' value={country} onChange={(e)=>setCountry(e.target.value)} className='rounded-[15px]  border-2 border-blue-950 px-4 py-2 w-full'  />
       </div>
       <div className='my-2'>
       <label className='required text-x1 mr-4 text-gray-500'> Zip Code</label>
        <input type='text' value={zipcode} onChange={(e)=>setZipcode(e.target.value)} className='rounded-[15px]  border-2 border-blue-950 px-4 py-2 w-full'  />
       </div>
        <button className='rounded-[20px]  p-2 bg-blue-950 m-8 text-white' onClick={handleSaveVendor}>Save</button>
      </div>
    </div>
  )
}

export default CreateVendor
