"use client"
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="min-h-screen w-auto bg-[#262626] py-9 flex items-center justify-center">
            <head>
                <title>Login to Spotify</title>
            </head>
            <div className=" max-w-md p-8 space-y-6 bg-[#121212] rounded-lg shadow-md">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-bold">Log in to Spotify</h1>
                </div>

                <div className="space-y-4 ">
                    <div className="mt-4">
                        <a className="w-full py-3 relative flex items-center justify-center space-x-2 border rounded-full cursor-pointer  text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            <div className='social-signup '>
                                <i className="ri-google-fill absolute left-3 top-2    text-green-500 text-3xl"></i>
                                <span>Sign up with Google</span>
                            </div>

                        </a>
                    </div>


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
                </div>
                <hr className='text-[#1e1e1e] mt-5 ' />
                <div className="space-y-4">
                    <label className="block text-sm text-white font-semibold " htmlFor="email">
                        Email address
                    </label>
                    <input
                        type="text"
                        placeholder="Email or username"
                        className="w-full px-4 py-3 bg-transparent border mb-3 text-white rounded-lg focus:outline-none"
                    />

                    <label className=" text-sm  text-white font-semibold " htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4  bg-transparent border py-3 text-white rounded-lg focus:outline-none"
                    />
                </div>


                <button className="w-full px-5 py-3  bg-[#3BE477] rounded-full text-black font-bold hover:bg-green-400">
                    Log In
                </button>

                <div className='forget'>
                    <Link href="" className='underline ms-28 text-white'>Forget your password</Link>
                    <p className='text-center text-white mt-4'>Dont't have an account? <span> <Link href="" className='underline'>SignUP for spotify</Link></span></p>
                </div>
            </div>
        </div>
    )
}

export default page
