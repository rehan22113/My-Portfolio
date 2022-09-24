import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
const Contact =()=>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('myportfolio', 'template_p3pzq9o', form.current, '5VRmxUBgcxyG5DZd0')
      .then((result) => {
          if(result.text){
            window.location.href="/"
          }
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return<>
       <section id='contact' className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.944362845124!2d73.32867831464797!3d30.748064281631805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922a5a40da58949%3A0x1cb74e1c9a4c40d9!2sAdda%20Gamber%2C%20Sahiwal%20District%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1652121423537!5m2!1sen!2s" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} />
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.944362845124!2d73.32867831464797!3d30.748064281631805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922a5a40da58949%3A0x1cb74e1c9a4c40d9!2sAdda%20Gamber%2C%20Sahiwal%20District%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1652121423537!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Okara Cantt Adda Gamber Double tower, okara 56400</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <Link to="/" className="text-indigo-500 leading-relaxed">raorehanweb@gmail.com</Link>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <Link to="tel:+923207310384" className="leading-relaxed">+92 320 7310384</Link>
        </div>
      </div>
    </div>
    
    <form method='post' ref={form} onSubmit={sendEmail} className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font text-shadow">Contact Me</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Feel Free to Contact me i will reply you with in 12 hours</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="user_name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="user_email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={"Type something here..."} />
      </div>
      <button type="submit" className="text-black hover:text-white bg-[yellow] border-0 py-2 px-6 focus:outline-none hover:bg-yellow-100 rounded text-lg">Message Me</button>


      
    </form>
  </div>
</section>

    </>
}

export default Contact;