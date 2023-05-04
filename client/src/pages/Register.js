/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import axios from 'axios';
import img from '../images/wearrit.jpg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { signUpRoute } from '../utils/API.routes';


const Register = () => {
  
  
  const [value, setValue] = useState({
    name: '', mobileNo: '', email: '', password: ''
  })

  const[otp, setOtp] = useState({
    name:'', otp:''
  })
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const setValues = (event) => {

    setValue({...value,[event.target.name]:event.target.value})

  }
  
  const otpChange = (event) =>{
    setOtp({...otp,[event.target.name]:event.target.value});

  }

  

  const submitForm =(event)=>{

    event.preventDefault();
    console.log(value);

    axios.post(signUpRoute, value)
    .then((res) => {
     
        console.log(res.data)

    }).catch((error) => {
        console.log(error)
    });
   
  }
 
  const verifyOtp = ()=>{
    axios.post('http://localhost:5618/verifyOtp', otp).then((response)=>{

    console.log(response.data);

      closeModal();
      chng1();
    }).catch((err)=>{
      console.log(err);
    })    
  }
  let navigate = useNavigate(); 
 
  const chng1 =()=>{
    let path =`/login`;
    navigate(path)
  }

  const resendOtp = () =>{
    axios.post('http://localhost:5618/resendOtp',{name:value.name, mobileNo:value.mobileNo}).then((response)=>{
      console.log(response.data);
    })
  }




  // let navigate = useNavigate(); 
    // const chng = () =>{ 
    //       let path = `/Login`; 
    //       navigate(path);
    //     }

  return (

    
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={img} alt="" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Signup for an account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link to={'/login'}><a href="/Login" className="font-medium text-red-600 hover:text-red-500"> Login </a>
              </Link> </p>
          </div>
          <form onSubmit={submitForm} className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input value={value.name} onChange={setValues} id="name" name="name" type="text" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Please Enter Your Name" />
              </div>
              <div>
                <label htmlFor="mobileNo" className="sr-only">Phone NO</label>
                <input value={value.mobileNo} onChange={setValues} id="mobileNo" name="mobileNo" type="text" autoComplete="mobileNo" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Phone NO with country code " />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input value={value.email} onChange={setValues} id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Email " />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input value={value.password} onChange={setValues} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>
            <div>
              <hr></hr>
            </div>
            <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={() => setOpen(o => !o)}>
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-red-500 group-hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign up
              </button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
           <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  {/* <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      {/* <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              {/* <!-- Heroicon name: outline/exclamation-triangle --> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"  onClick={closeModal}>
                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

              {/* <svg className="h-5 w-5 text-red-500 group-hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" onClick={closeModal}>
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg> */}
                <div> 
            
          </div>  
            </div>
           
            
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Verify OTP</h3>
              <div className="mt-2">
                <input  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="name" name='name' value={otp.name} onChange={otpChange}/>
              </div>
              <div className="mt-2">
                <input  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="OTP" name='otp' value={otp.otp} onChange={otpChange}/>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" onClick={verifyOtp}>Verify</button>
          <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={resendOtp}>Resend</button>
        </div>
      </div>
    </div>
  </div>
</div>

          </Popup>
            </div>
          </form>
        </div>
      </div>
      

    </div>
  )
}

export default Register