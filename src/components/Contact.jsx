import React from 'react'
import Swal from 'sweetalert2'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0ce8c4d7-cc53-4413-ba62-ca912b7c4e2f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success",
                background: '#1e293b',
                color: '#fff',
                confirmButtonColor: '#3b82f6'
              });
              event.target.reset();
        }
      };
  return (
    <>
    <div id='contact' className='w-full py-20 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>
      
      <div className='max-w-4xl mx-auto px-6 relative z-10'>
        <div className='text-center mb-16 animate-fadeInDown'>
          <h2 className='text-5xl md:text-6xl font-bold text-gradient mb-4'>Get In Touch</h2>
          <p className='text-xl text-gray-400'>Feel free to reach out by submitting the form below</p>
        </div>
        
        <div className='glass-effect rounded-2xl p-8 md:p-12 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover-lift animate-fadeInUp animation-delay-200'>
          <form onSubmit={onSubmit} className='space-y-6'>
            <div className='animate-fadeInUp animation-delay-300'>
              <label className='block text-sm font-semibold text-gray-300 mb-2'>Your Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder='Enter your name'
                required
                className='w-full p-4 glass-effect rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-blue-500/30 border border-transparent' 
              />
            </div>
            <div className='animate-fadeInUp animation-delay-400'>
              <label className='block text-sm font-semibold text-gray-300 mb-2'>Your Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder='Enter your email'
                required
                className='w-full p-4 glass-effect rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-blue-500/30 border border-transparent' 
              />
            </div>
            <div className='animate-fadeInUp animation-delay-500'>
              <label className='block text-sm font-semibold text-gray-300 mb-2'>Your Message</label>
              <textarea 
                name="message"
                placeholder='Enter your message' 
                rows='6'
                required
                className='w-full p-4 glass-effect rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none hover:border-blue-500/30 border border-transparent'
              ></textarea>
            </div>
            <button 
              className='w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group relative overflow-hidden animate-fadeInUp animation-delay-600'
              type='submit'
            >
              <span className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity'>
                <div className='absolute inset-0 animate-shimmer'></div>
              </span>
              <span className='relative z-10'>Send Message</span>
              <span className='relative z-10 group-hover:translate-x-1 transition-transform'>→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
export default Contact;