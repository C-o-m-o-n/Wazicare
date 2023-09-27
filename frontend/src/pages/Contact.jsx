import React from 'react'

const Contact = () => {
  return (
    <section>
        <div className='px-4 mx-auto max-w-screen-md'>
            <h2 className='heading text-center'>Contact us</h2>
            <p className='mb-8 lg:mb-16 font-light text-center text__para'>Got any issue with booking? Want to send feedback? Let us know</p>

            <form action="#" className='space-y-8'>
                <div>
                    <label htmlFor="email" className='form__label'>Your Email</label>
                    <input type="email" id="email" placeholder='abc@example.com' className='form__input mt-1' />
                </div>
                <div>
                    <label htmlFor="subject" className='form__label'>Subject</label>
                    <input type="text" id="subject" placeholder='How can we help you?' className='form__input mt-1' />
                </div>
                <div className='sm:col-span-2'>
                    <label htmlFor="message" className='form__label'>Your Message</label>
                    <textarea type="text" id="message" placeholder='Leave a comment...' rows='6' className='form__input mt-1' />
                </div>

                <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
            </form>
        </div>
    </section>
    // <div className="container">
    // <div className="xl:w-[470px] mx-auto">
    //             <h2 className="heading text-center">Contact Us</h2>
    //         </div>
    
    // <form className='max-w-lg mx-auto shadow px-2 py-5 rounded overflow-hidden' action="" method="post" autocomplete="off">
    //                 <div class="space-y-2">
    //                     <div >
    //                         <label  class="text-gray-600 mb-2 block">Email</label>
    //                         <input type="email" name="username" id="email" 
             
    //                             class="rounded-full text-primary block w-full border border-gray-300 px-4 py-4
    //                             text-sm  focus:ring-0 focus:border-primary placeholder-gray-400 font-600 "
    //                             placeholder="Enter your email"></input>
    //                     </div>
    
    //                     <div>
    //                         <label  class="text-gray-600 mb-2 block">Phone</label>
    //                         <input type="tel" name="password" id="password"
    //                             class="block w-full border border-gray-300 px-4 py-4 rounded-full text-primary text-sm  
    //                             focus:ring-0 focus:border-primary placeholder-gray-400"
    //                             placeholder="Enter your Phone"></input>
    //                     </div>

    //                     <div>
    //                         <label  class="text-gray-600 mb-2 block">Message</label>
    //                         <textarea type="tel" name="password" id="password"
    //                             class="block w-full border border-gray-300 px-4 py-4 rounded text-primary text-sm  
    //                             focus:ring-0 focus:border-primary placeholder-gray-400"
    //                             placeholder="Enter your Message"></textarea>
    //                     </div>
                        
    //                 </div>
                   
    //                 <div class="mt-4">
    //                     <button type="submit"
    //                         class="block rounded-full text-center text-white bg-primary 
    //                         border border-primary hover:bg-transparent hover:text-primary px-10 py-4
    //                          transition uppercase font-roboto font-medium">Send</button>
    //                 </div>
               
    
              
    //             </form>
          
    //         </div>
  )
}

export default Contact
