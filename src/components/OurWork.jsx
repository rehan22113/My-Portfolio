import React,{useState} from 'react'
import { motion } from 'framer-motion'
import '../App.css'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const work=[
  {
    id:1,
    name:"eCommerce Web App",
    img:"https://www.site-shot.com/cached_image/RumhWD5sEe2mDQJCrBEABg",
    alt:"Project 1",
    category:"MERN APP",
    url:"https://ratayo.vercel.app"

  },
  {
    id:2,
    name:"eCommerce Web App",
    img:"https://www.site-shot.com/cached_image/LTUUcj6AEe2NOgJCrBEABA",
    alt:"Project 2",
    category:"MERN APP",
    url:"https://taptechinc.vercel.app"

  },
  {
    id:3,
    name:"Comming Soon",
    img:"https://www.site-shot.com/cached_image/f5IDfD54Ee2Q_QJCrBEABA",
    alt:"Project 3",
    category:"REACT JS",
    url:"https://cryptogem.finance/"

  },
  {
    id:4,
    name:"Comming Soon",
    img:"https://user-images.githubusercontent.com/59451476/169035401-50739003-f6e7-4f25-bdbd-248892aa1ee2.png",
    alt:"Project 4",
    category:"REACT JS",
    url:"https://github.com/rehan22113/MaterialUI"

  },
  {
    id:5,
    name:"eCommerce - Wordpress",
    img:"https://www.site-shot.com/cached_image/ScU7WD5xEe2qvgJCrBEABg",
    alt:"Project 5",
    category:"WORDPRESS",
    url:"https://ratayo.vercel.app"

  },
  {
    id:6,
    name:"eCommerce - Wordpress",
    img:"https://www.site-shot.com/cached_image/ZvdTDD5vEe28FwJCrBEABg",
    alt:"Project 6",
    category:"WORDPRESS",
    url:"https://ramegamart.com/"

  },
   
]

const OurWork=()=>{
  const [filter, setFilter] = useState({
    work
  });
  const filterProject=(e)=>{
    const newWork=work.filter((val,index)=>{
        return val.category===e.target.textContent
      })
      setFilter({work:newWork})
      // {...obj},[value]:name
  }
  
    return<>
        <section id='portfolio' className="text-gray-600 body-font">
  <div className="container px-5 lg:py-24 py-8 mx-auto">
    <div className="flex flex-col w-full mb-10">
      <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">
        Latest Work
      </h1>
      <div className=" w-24 sm:h-1 md:h-2  my-2 rounded-full sm:mt-0 inline-flex bg-gradient-to-r from-yellow-300 to-yellow-400 text-white relative z-10 title-font font-medium text-sm ">
      </div>
      <p className="lg:w-2/3 leading-relaxed text-base">There is some of my latest work that i have work on it </p>
    </div>
    <div className='container px-5 text-center lg:w-2/3 sm:w-2/3 w-2/4 m-auto justify-center flex flex-wrap'>
      <div className="flex">
        <button onClick={()=>{setFilter({work})}} className="shadow-lg inline-flex text-gray-500 bg-gradient-to-l to-[yellow] from-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-lg">All Project</button>
        <button onClick={filterProject} className="shadow-lg ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">MERN APP</button>
        <div>

        <button onClick={filterProject} className="shadow-lg ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">REACT JS</button>
        <button onClick={filterProject} className="shadow-lg ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">WORDPRESS</button>
        </div>
      </div>
    </div>
    <motion.div
    className="container"
    variants={container}
    initial="hidden"
    animate="visible" 
  >
    <div className="flex flex-wrap -m-4 text-center mt-2">
    {filter.work.map((e)=>{
      return (

      <div className="p-4 md:w-1/4 sm:w-1/2 w-full item" key={e.id} variants={item} >
          <div className="py-4">
      <div className="shadow-lg group container rounded-lg bg-white  max-w-sm flex justify-center items-center mx-auto content-div">
      
        <div>
          <div className="w-full image-cover rounded-md shadow-xl">
            <img src={e.img} alt={e.alt} className="group-hover:opacity-60 h-[550px]" />
          </div>
        </div>
        <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
          <span className="text-2xl font-bold text-black tracking-wider leading-relaxed">{e.name}</span> 
          <div className="pt-8 text-center">
            <a href={e.url} className="text-center p-4 bg-black text-white font-bold text-lg">Open To Browser</a>
          </div>
        </div>
      </div>
    </div>
      </div>
      )
    })}
    </div>
    </motion.div>
  </div>
</section>

    </>
}


export default OurWork;