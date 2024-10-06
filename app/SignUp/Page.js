"use client"
import Link from 'next/link'
import React from 'react'
import 'remixicon/fonts/remixicon.css'



const SignUp = () => {
    return (
        <div>
            <div className=" min-h-screen flex items-center  justify-center bg-[#121212] text-white">
                <head>
                    <title>Register to Spotify</title>
                </head>
                <div className="w-full max-w-md p-8 space-y-8">

                    <div className="flex justify-center mb-6">
                        <i className="ri-spotify-fill text-6xl"></i>


                    </div>

                    {/* Signup Text */}
                    <h2 className="text-4xl mb-3 font-bold text-center">
                        Sign up to <br /> start listening
                    </h2>

                    {/* Email Input */}
                    <div className="mt-8">
                    <label className="block text-sm font-semibold mb-2" htmlFor="email">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@domain.com"
                            className="w-full px-3 py-2 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Next Button */}
                    <div className="mt-6">
                        <button className="w-full py-2 bg-green-500 rounded-full text-black font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                            Next
                        </button>
                    </div>

                    {/* Or Divider */}
                    <div className="flex items-center justify-center my-6">
                        <hr className="w-full border-gray-600" />
                        <span className="px-4 text-sm text-gray-500">or</span>
                        <hr className="w-full border-gray-600" />
                    </div>

                    {/* Signup with Google */}
                    <div className="mt-4">
                        <a className="w-full py-3 relative flex items-center justify-center space-x-2 border rounded-full cursor-pointer  text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            <div className='social-signup '>
                                <i className="ri-google-fill absolute left-3 top-2    text-green-500 text-3xl"></i>
                                <span>Sign up with Google</span>
                            </div>

                        </a>
                    </div>

                    {/* Signup with Facebook */}
                    <div className="mt-4">

                        <a className="w-full py-3 flex items-center relative justify-center space-x-2 rounded-full border text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 ">
                            <div className='social-signup '>
                                <i className="ri-facebook-circle-fill absolute left-3 top-2 text-green-500 text-3xl"></i>
                                <span>Sign up with Facebook</span>
                            </div>

                        </a>
                    </div>


                    <div className="mt-2">
                        <a className="w-full  py-3 relative flex items-center justify-center space-x-2  rounded-full border     text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            <div className='social-signup'>

                                <i className="ri-apple-fill text-green-500 absolute left-3 top-2 text-3xl"></i>
                                <span>Sign up with Apple</span>
                            </div>
                        </a>
                    </div>

                    <div className="flex items-center justify-center my-6">
                        <hr className="w-full border-gray-600" />

                        <hr className="w-full border-gray-600" />
                    </div>


                    <div className='already'>
                        <p className='text-center'>Already have have an account? <Link href="/Login"><span className='underline'>Login Here</span></Link> </p>

                    </div>

                    <div className='CAPTCHA'>
                        <p className='text-sm text-center'>This site is protected by reCAPTCHA and the Google</p>
                        <p className='text-sm text-center'><Link href="" className='underline'><span>Privacy Policy</span></Link> and  <Link href="" className='underline'><span>Terms of Service</span></Link> apply.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
