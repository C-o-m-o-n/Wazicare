import {  Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [formData, setFomrData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFomrData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 sm:text-center">
        <h3 className="text-textColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primary"> Welcome</span> Back{" "}
        </h3>

        <form className="py-4 md:py-0 sm:p-5">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-b border-solid border-primary focus:outline-none focus:border-b-primary text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border-b border-solid border-primary focus:outline-none focus:border-b-primary text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>

          <div className="mt-7">
            <button type="submit" className="w-full bg-primary text-white text-[18px] leading-[30px] border border-solid border-primary rounded-lg px-4 py-3 hover:text-primary hover:bg-white">Login</button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account? <Link to='/register' className="text-primary font-medium ml-1">Register</Link>
            </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
