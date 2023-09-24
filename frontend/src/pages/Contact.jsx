import React from 'react'

const Contact = () => {
  return (
    <div className="container">
    <div className="xl:w-[470px] mx-auto">
                <h2 className="heading text-center">Contact Us</h2>
            </div>
    
    <form className='max-w-lg mx-auto shadow px-2 py-5 rounded overflow-hidden' action="" method="post" autocomplete="off">
                    <div class="space-y-2">
                        <div >
                            <label  class="text-gray-600 mb-2 block">Email</label>
                            <input type="email" name="username" id="email" 
             
                                class="rounded-full text-primary block w-full border border-gray-300 px-4 py-4
                                text-sm  focus:ring-0 focus:border-primary placeholder-gray-400 font-600 "
                                placeholder="Enter your email"></input>
                        </div>
    
                        <div>
                            <label  class="text-gray-600 mb-2 block">Phone</label>
                            <input type="tel" name="password" id="password"
                                class="block w-full border border-gray-300 px-4 py-4 rounded-full text-primary text-sm  
                                focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="Enter your Phone"></input>
                        </div>

                        <div>
                            <label  class="text-gray-600 mb-2 block">Message</label>
                            <textarea type="tel" name="password" id="password"
                                class="block w-full border border-gray-300 px-4 py-4 rounded text-primary text-sm  
                                focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="Enter your Message"></textarea>
                        </div>
                        
                    </div>
                   
                    <div class="mt-4">
                        <button type="submit"
                            class="block rounded-full text-center text-white bg-primary 
                            border border-primary hover:bg-transparent hover:text-primary px-10 py-4
                             transition uppercase font-roboto font-medium">Send</button>
                    </div>
               
    
              
                </form>
          
            </div>
  )
}

export default Contact
