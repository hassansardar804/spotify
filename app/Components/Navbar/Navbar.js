import React from 'react'
import './Navbar.css'

import Link from 'next/link'
const Navbar = () => {
    return (
        <div className='main-nav'>
            <section>
                <nav className='py-4 px-3 complete-nav flex  '>
                    <div className=' left-nav'>
                        <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className='text-white' fill="black">
  
  <path d="M3 10L12 3l9 7v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6h-4v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z"/>
</svg>


                        </Link>
                    </div>
                    <div className=' center-nav flex '>
                        <Link href="/">
                            <button className=' py-2 bg-gray-600 home-btn  ms-3'>
                                <i className="ri-home-4-fill px-3 text-2xl "></i>
                            </button>

                        </Link>
                        <div className='relative'>
                            <input
                                className='w-96  bg-[#1F1F1F] mt-1 ms-3 py-2 px-12 rounded-full search-input  '

                                placeholder='What do You want to Play?' />

                            <i class="ri-search-line text-3xl absolute left-5 top-2 "></i>
                            <div>
                                <i className=" absolute ri-pages-line text-3xl right-4 top-2"></i>
                            </div>
                        </div>
                    </div>
                    <div className=' right-nav '>
                        <Link href="SignUp" className='font-bold text-[#c6c4c4] px-3  hover:text-white  transition-colors duration-1000 ease-in-out transform hover:scale-105'>SignUp</Link>
                        <button className='mx-3 px-5 py-2 bg-white font-bold text-black rounded-full' >Login</button>
                    </div>

                </nav>
            </section>  
        </div>
    )
}

export default Navbar
