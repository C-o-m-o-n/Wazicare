import React from 'react'
import {  Link } from "react-router-dom";


const Login = () => {
  return (
<div className="container">
<div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Login</h2>
        </div>

<form className='max-w-lg mx-auto shadow px-2 py-5 rounded overflow-hidden' action="" method="post" autocomplete="off">
                <div class="space-y-2">
                    <div >
                        <label  class="text-gray-600 mb-2 block">Username</label>
                        <input type="text" name="username" id="email" 
         
                            class="rounded-full text-primary block w-full border border-gray-300 px-4 py-4
                            text-sm  focus:ring-0 focus:border-primary placeholder-gray-400 font-600 "
                            placeholder="Enter your username"></input>
                    </div>

                    <div>
                        <label  class="text-gray-600 mb-2 block">Password</label>
                        <input type="password" name="password" id="password"
                            class="block w-full border border-gray-300 px-4 py-4 rounded-full text-primary text-sm  
                            focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*********"></input>
                    </div>
                    
                </div>
                <div class="flex items-center justify-between mt-6">
                    <div class="flex items-center">
                        <input type="checkbox" name="remember" id="remember"
                            class="text-primary focus:ring-0 rounded-sm cursor-pointer "></input>
                        <label  class="text-gray-600 ml-3 cursor-pointer">Remember me</label>
                    </div>
                    <a href="#" class="text-primary">Forgot password</a>
                </div>
                <div class="mt-4">
                    <button type="submit"
                        class="block rounded-full text-center text-white bg-primary 
                        border border-primary hover:bg-transparent hover:text-primary px-10 py-4
                         transition uppercase font-roboto font-medium">Login</button>
                </div>
            <div class="mt-4 flex gap-4">
                <a href="#"
                    class="w-1/2 py-4 rounded-full text-center text-white bg-blue-800 font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                <a href="#"
                    class="w-1/2 py-4 rounded-full text-center text-white bg-red-600 font-roboto font-medium text-sm hover:bg-red-500">google</a>
            </div>

            <p class="mt-4 text-center text-gray-600">Don't have an account? 
                    <Link to="/register" class="text-primary">Register now</Link>
                    </p>
            </form>
      
        </div>
  )
}

export default Login
