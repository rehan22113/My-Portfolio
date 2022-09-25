import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Image from '../assets/images/mainImage.svg'
import resume from  '../assets/images/resume.svg'
import BioData from '../components/BioData'
import OurWork from  '../components/OurWork'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ParticleBackground from '../libraries/ParticleJS/particle_Background'
import {motion,LazyMotion,domAnimation,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import AnimatedText from 'react-animated-text-content'
import {HashLink} from 'react-router-hash-link'
// import Scroll from 'react-scroll'
const Home=(props)=>{
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("hidden");
    } else {
      control.start("visible");
    }
  }, [control, inView]);
  
  const boxVariant={
    visible:{opacity:0}
    ,hidden:{opacity:1}
  }
  const ImgVariant={
    visible:{opacity:0,y:'-90vh'},
    hidden:{opacity:1,y:0}
  }
  
    return<>
        <ParticleBackground />
        <NavBar />  
        <LazyMotion features={domAnimation}>
        <motion.div 
    transition={{duration:1}}
    ref={ref}
    initial="hidden"
      variants={boxVariant}
     animate={control}
     >
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 lg:py-20 md:py-20 sm:py-4 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <p className="mb-4 text-yellow-400 drop-shadow-sm leading-relaxed">THIS IS ME</p>
              <AnimatedText
                 type='words'
                 interval={0.04}
                 duration={2}
                 animationType="float"
                 animation={{
                   y: '200px',
                   ease: 'ease',
                 }}
                 className="text-shadow-lg title-font text-5xl md:text-7xl mb-8 font-bold text-gray-900"
                 tag='h1'
              >
                MOHAMMAD REHAN
              </AnimatedText>
                
             <p className="mb-12 leading-relaxed">
             Innovative, task-driven professional with 2+ year of experience in Web design and development across diverse industries. Equipped with a record of success in consistently identifying and providing the technological need of companies through ingenious innovation. Proficient in developing databases,
             creating user interfaces,writing and testing codes, troublesshooting simple/complex issues, and implementing new features based on user feedback.
                </p>
                    <div className="flex justify-center">
                    <motion.div whileHover={{ scale: 1.2 }} >
                    <HashLink to="/#contact" className="inline-flex hover:bg-gradient-to-l bg-gradient-to-r from-[#fde801] to-[yellow] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg">HIRE ME</HashLink>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} >
                    <a href="https://drive.google.com/file/d/15bsrW-kRRJdQQ7sqWR_0tIzPHMOk5t0M/view?usp=sharing" target="_blank" rel='noreferrer' className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r from-slate-300 text-lg">DOWNLOAD CV</a>
                    </motion.div>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> 
            <motion.div
    transition={{type:'spring',stiffness:120,default: { duration: 1 }}}
    ref={ref}
    variants={ImgVariant}
    initial="hidden"
     animate={control}
     >      
                <img className="object-cover object-center rounded" alt="hero" src={Image} />
                </motion.div>
            </div>
            </div>
        </section>
        </motion.div>
       <BioData />
<OurWork />
<section className="text-gray-600 body-font bg-[yellow]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">20+</h2>
        <p className="leading-relaxed">Project Completed 📝</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">5+</h2>
        <p className="leading-relaxed">Happy Client 😊</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1000</h2>
        <p className="leading-relaxed">Cup of Tea ☕</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">4.8</h2>
        <p className="leading-relaxed">Rating Avg ❤</p>
      </div>
    </div>
  </div>
</section>
{/* My Services */}
<section className="text-gray-600 body-font" id='services'>
  <div className="container px-5 lg:py-24 py-8 mx-auto">
    <div className="flex flex-col w-full mb-20">
      <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">
        My Services
      </h1>
      <div className=" w-24 sm:h-1 md:h-2  my-4 rounded-full sm:mt-0 inline-flex bg-gradient-to-r from-yellow-300 to-yellow-400 text-white relative z-10 title-font font-medium text-sm ">
      </div>
      <p className="lg:w-2/3 leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
<div className="py-16">  
  <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
    <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
    <div className="bg-yellow-100 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-400">Web Development</h3>
          <p className="mb-6">Web development services help create all types of web-based software and ensure great experience for web users.i professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.</p>
          <Link to="/" className="block font-medium text-yellow-300">Know more</Link>
        </div>
        <img src="https://vasundharainfotechllp.com/public/assets/img/hir_react_native_dev/about.svg" className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width={900} height={600} />
      </div>
      <div className=" bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-400">Mobile Apps</h3>
          <p className="mb-6">Designs, develops and delivers mobile apps across all the major platforms, including iOS (iPhone & iPad), Android, BlackBerry and Windows Mobile. Our mobile app development services include: Business, needs and requirements analysis. </p>
          <Link to="/" className="block font-medium text-yellow-300">Know more</Link>
        </div>
        <img src="https://vasundharainfotechllp.com/public/assets/img/hir_react_native_dev/hero_r_img.svg" className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width={900} height={600} />
      </div>
      <div className="bg-yellow-100 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-400">eCommerce Development</h3>
          <p className="mb-6">Get into the online business industry with state of the art eCommerce solutions services. Compelling wooCommerce store design with theme development, and integration, custom templates, and UI/UX designs.</p>
          <Link to="/" className="block font-medium text-yellow-300">Know more</Link>
        </div>
        <img src="https://vasundharainfotechllp.com/public/assets/img/hir_ios_dev/appointment.svg" className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width={900} height={600} />
      </div>
      <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-400">Graphic Design</h3>
          <p className="mb-6">Good design is more than just readability and clarity of message. Good graphic design, when done right, can transform a business’ logo into a brand; a brand that is consistent, professional and attracts customers to you.</p>
          <Link to="/" className="block font-medium text-yellow-300">Know more</Link>
        </div>
        <img src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg" className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width={900} height={600} />
      </div>
      <div className="bg-yellow-100 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-400">UI Design</h3>
          <p className="mb-6">Aimed at creating visually appealing, brand strengthening digital interfaces that attract and retain users. I delivers UI solutions that are tailored individually to your audience, reflect customer values, as well as effectively back up your business objectives.</p>
          <Link to="/" className="block font-medium text-yellow-300">Know more</Link>
        </div>
        <img src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg" className="w-2/3 ml-auto" alt="illustration" loading="lazy" width={900} height={600} />
      </div>
      <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-400">Web Design</h3>
          <p className="mb-6">Provides you with a customized website design that's perfect for your business or personal site. I will work with you to create a design that matches your brand, while giving your customers a seamless user experience that will delight them.</p>
          <Link to="/" className="block font-medium text-yellow-300">Know more</Link>
        </div>
        <img src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg" className="w-2/3 ml-auto " alt="illustration" loading="lazy" width={900} height={600} />
      </div>
    </div>
  </div>
</div>
</div>
</section>

{/*My Resume*/}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="feature" className="object-cover object-center h-full w-full" src={resume} />
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
    <div className="flex flex-col w-full mb-5">
      <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">
        Resume
      </h1>
      <div className=" w-24 sm:h-1 md:h-2  my-2 rounded-full sm:mt-0 inline-flex bg-gradient-to-r from-yellow-300 to-yellow-400 text-white relative z-10 title-font font-medium text-sm ">
      </div>
      <h1 className="sm:text-2xl text-4xl font-medium title-font mb-2 text-gray-900">
        My Work Experience
      </h1>
    </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Full Stack Development (DEC 2020 - MAR 2021)</h2>
          <p className="leading-relaxed text-base">work with apricopt soft. house around  2-3 month as an internship. Mern Stack Development</p>
          <hr/>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Frontend Developer (Fiverr as Freelancer)</h2>
          <p className="leading-relaxed text-base">A Professional Frontend Web Developer with React JS, React Native and WordPress Specialist including eCommerce development.</p>
          <hr/>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Mern Stack Development</h2>
          <p className="leading-relaxed text-base">Work on Mern application . Well Experience on Express,JWT, AUTH0,Google Map API, Passport JS, NPM Modules. </p>
          <hr/>
        </div>
      </div>
      <div className="flex flex-col w-full mb-5">
      <h1 className="sm:text-2xl text-4xl font-medium title-font mb-2 text-gray-900">
        Education
      </h1>
    </div>
    <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Intermediate (2018-2020)</h2>
          <p className="leading-relaxed text-base">
          FG Degree College in Computer Science with A Grade Marks
          </p>
          <hr/>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">BS-Software Engnerring (2020 - continue )</h2>
          <p className="leading-relaxed text-base">
            Studing BSSE in Numl University Islamabad Still Studing 5th Semester
          </p>
          <hr/>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">PSDF -WEB DEVELOPMENT (2020 - 2021 )</h2>
          <p className="leading-relaxed text-base">
            Certified Web developer(MERN) 6th month course
          </p>
          <hr/>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 bg-[yellow] body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl lg:text-6xl font-medium title-font mb-4 text-gray-900">
        I am <span className='text-black'>Available</span> for Freelancing
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
    </div>
    
  <div className="container px-5 mx-auto">
  <motion.div whileHover={{ scale: 1.2 }} >

  <HashLink to="/#contact">
  <button className="flex mx-auto mt-10 text-center text-black bg-gradient-to-r from-[#fde801] to-yellow-400 border-0 py-2 px-8 focus:outline-none shadow-lg hover:bg-indigo-600 text-lg">HIRE ME
  </button>
  </HashLink>
  </motion.div>
  </div>
  </div>
</section>
<Contact />
<Footer />
</LazyMotion>
    </>
}

export default Home;