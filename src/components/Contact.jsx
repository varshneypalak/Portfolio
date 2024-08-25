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
            console.log("Sucess")
            Swal.fire({
                title: "Sucess!",
                text: "Message Sent SucessFullyn!",
                icon: "success"
              });
        }
      };
  return (
    <>
   
    <div id='contact' className='flex flex-col md:mt-80 p-4  max-w-screen-lg mx-auto text-white'>
        <div className='pb-8 mt-16'>
            <p className='text-6xl font-bold inline border-b-4 border-gray-500' >
             Contact
            </p>
            <p className='py-6'>
            Feel free to reach out by submitting the form below.
            </p>
        </div>
        
        <div className='flex justify-center items-center'>
            <form onSubmit={onSubmit} action="" className='flex flex-col w-full md:1/2'>
                <input type="text" name="name" placeholder='Enter your name'
                className='p-2 bg-transparent border-2 rounded-md text-white focus-outline-none' />
                 <input type="text" name="email" placeholder='Enter your email'
                className='p-2 bg-transparent border-2 rounded-md text-white focus-outline-none my-4' />
                <textarea name="message"
                placeholder='Enter your message' rows='10' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 '
                type='submit'>
                    Let's Talk
                </button>
            </form>
        </div>
        
    </div>
   
    </>
  )
}
export default Contact;