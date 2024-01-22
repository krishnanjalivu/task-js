import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { googleLogout } from '@react-oauth/google';
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

import VendorTable from '../components/Home/VendorTable'

const Home = () => {
    const navigate=useNavigate();
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/vendors')
            .then((response) => {
                setVendors(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);
    const logOut = () => {
        googleLogout();
        navigate('/')
    };
  return (
    <div className='p-3 mt-8 border-2 rounded' >
     {/* <div className='flex justify-center items-center gap-x-4'> */}
     <div className='flex justify-between items-center'>
                <h1 className='ml-3 text-blue-950  font-bold text-3xl my-8'>VENDOR LIST</h1>
       <Link className='flex flex-row' to='/vendors/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4x1' />
                    <h1 className='font-bold ml-1 mt-[-5px]'>Create</h1>
                </Link>
                </div>
                {loading ? (
                <Spinner />
            )
                :(<VendorTable vendors={vendors} />)}
                {/* </div> */}
                <button className='text-white mb-30px text-xl font-bold border-2 rounded-[30px] p-3 mx-auto w-[200px] bg-blue-950' onClick={logOut}>LOGOUT</button>
    </div>
  )
}

export default Home
