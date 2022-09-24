import React,{useEffect} from 'react'
import {useMediaQuery} from 'react-responsive'
import bioImage from '../assets/images/bio-data.png'
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'




const BioData = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const isMobile = useMediaQuery({
        query: '(min-width: 768px)'
      })

      const BioVariant={
        visible:{opacity:1,x:0},
        hidden:{opacity:0,x:'-90px'}
      }

      useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);
  return (
    <>
     {/*===========Bio Data Section==========*/}
     <section className="text-gray-600 body-font" id='about'>
  <div className="container mx-auto flex px-5 sm:py-16 py-8 md:flex-row flex-col items-center">
  {isMobile?(
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    <motion.div
    transition={{type:'spring',stiffness:120,default: { duration: 2 }}}
    ref={ref}
    variants={BioVariant}
    initial="hidden"
     animate={control}
     > 
    <img className="object-cover object-center w-full h-full" src={bioImage} alt="bio data" />
    </motion.div>
    </div>
  ):("")}
    
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font text-5xl mb-4 font-bold text-gray-900">
      My Bio-data
      </h1>
      <div className="w-24 sm:h-1 md:h-2  my-4 rounded-full sm:mt-0 inline-flex bg-gradient-to-r from-yellow-300 to-yellow-400 text-white relative z-10 title-font font-medium text-sm ">
      </div>
      <p className="mb-8 leading-relaxed lg:px-0 md:px-0"> 
      I am very passinate to furnishing my skill to hard level and also working very hard to improve my skill as good as i can. Below you see my current skill rate on some of languages, library and framework,
       </p>
            <div className='md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center'>
            <div>

            <h1 className="pt-2">HTML/CSS<span className="font-bold text-xs text-black"> 90%</span></h1>
        <div className="mt-2 h-2 relative lg:w-[32rem] w-[20rem] rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-200 absolute " />
          <div className="h-full bg-gradient-to-l from-[yellow] to-yellow-300 absolute" style={{width: '90%'}} />
        </div>
            </div>
            <div>

        <h1 className="pt-4">Tailwind CSS / Bootstrap /Material UI(learning) <span className="font-bold text-xs text-black"> 80%</span></h1>
        <div className="mt-2 h-2 relative lg:w-[32rem] w-[20rem] rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-200 absolute " />
          <div className="h-full bg-gradient-to-l from-[yellow] to-yellow-300 absolute" style={{width: '80%'}} />
        </div>
            </div>
            <div>

        <h1 className="pt-6">Vanilla Javascript <span className="font-bold text-xs text-black"> 80%</span></h1>
        <div className="mt-2 h-2 relative lg:w-[32rem] w-[20rem] rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-200 absolute " />
          <div className="h-full bg-gradient-to-l from-[yellow] to-yellow-300 absolute" style={{width: '80%'}} />
        </div>
            </div> 
            <div>
        <h1 className="pt-4">MERN (React,Express,Node,MongoDb) <span className="font-bold text-xs text-black"> 75%</span></h1>
        <div className="mt-2 h-2 relative lg:w-[32rem] w-[20rem] rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-200 absolute " />
          <div className="h-full bg-gradient-to-l from-[yellow] to-yellow-300 absolute" style={{width: '75%'}} />
        </div>
            </div>
            <div>

        <h1 className="pt-4">React Native<span className="font-bold text-xs text-black"> 60%</span></h1>
        <div className="mt-2 h-2 relative lg:w-[32rem] w-[20rem] rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-200 absolute " />
          <div className="h-full bg-gradient-to-l from-[yellow] to-yellow-300 absolute" style={{width: '60%'}} />
        </div>
            </div>
            <motion.div whileHover={{ scale: 1.2 }} >

        <a href="https://drive.google.com/file/d/15bsrW-kRRJdQQ7sqWR_0tIzPHMOk5t0M/view?usp=sharing" target="_blank" rel='noreferrer' className="inline-flex hover:bg-gradient-to-l bg-gradient-to-r from-[#fde801] to-[yellow] border-0 py-2 mt-8 px-6 focus:outline-none hover:bg-indigo-600 text-lg">Download CV</a>
        </motion.div>
      </div>

      
    </div>
    {!isMobile?(
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    <img className="object-cover object-center w-full h-full" src={bioImage} alt="bio data" />
    </div>
  ):("")}
  </div>
</section>
    </>
  )
}

export default BioData