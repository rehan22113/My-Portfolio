import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { motion } from 'framer-motion'
import {HashLink} from 'react-router-hash-link'

const NavBar=(props)=>{
    return<>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={logo} alt="Rehan Tech Dots" className=' w-56 drop-shadow-md' />
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <motion.div whileHover={{ scale: 1.2 }} >
      <HashLink to="/#" className="mr-9 font-bold hover:text-yellow-300">Home</HashLink>
      </motion.div>
    <motion.div whileHover={{ scale: 1.2 }} >
      <HashLink to="/#about" className="mr-9 font-bold hover:text-yellow-300">About</HashLink>
      </motion.div>
    <motion.div whileHover={{ scale: 1.2 }} >
      <HashLink to="/#services" className="mr-9 font-bold hover:text-yellow-300">Services</HashLink>
      </motion.div>
    <motion.div whileHover={{ scale: 1.2 }} >
      <HashLink to="/#portfolio" className="mr-9 font-bold hover:text-yellow-300">Portfolio</HashLink>
      </motion.div>
    </nav>
    <motion.div
  whileHover={{ scale: 1.2, rotate: 90 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
>
    <HashLink to="/#contact" className="hidden md:inline-flex items-center drop-shadow-md bg-[yellow] border-0 py-2 px-3 focus:outline-none hover:bg-yellow-300 rounded text-base mt-4 md:mt-0 font-bold">Hire Me
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </HashLink>
      </motion.div>
  </div>
</header>

    </>
}

export default NavBar;