import React, { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/people/b6.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const [formData, setFomrData] = useState({
        name: "",
        email: "",
        password: "",
        photo: selectedFile,
        gender: "",
        role: "patient"
      });
    const handleChange = (e) => {
        setFomrData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleFileInput = async(e) => { 
        const file = e.target.files[0];

        //later add cloudinary

        console.log(file);
      }
    const submitHandler = async(e) => { 
        e.preventDefault();
    }
    
  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img */}
          <div className="hidden lg:block h-fit bg-primary rounded-l-lg">
            <figure className="rounded-l-lg">
              <img
                src={signupImg}
                alt=""
                className="w-full rounded-l-lg grayscale hover:grayscale-0"
              />
            </figure>
          </div>

          {/* sign up from */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-textColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primary">Account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pr-4 py-3 border-b border-solid border-primary focus:outline-none focus:border-b-primary text-[16px] leading-7 text-textColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pr-4 py-3 border-b border-solid border-primary focus:outline-none focus:border-b-primary text-[16px] leading-7 text-textColor placeholder:text-textColor cursor-pointer"
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
                  className="w-full pr-4 py-3 border-b border-solid border-primary focus:outline-none focus:border-b-primary text-[16px] leading-7 text-textColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label className="text-textColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                  onChange={handleChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Therapist</option>
                  </select>
                </label>

                <label className="text-textColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                  onChange={handleChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primary flex items-center justify-center">
                  <img
                    src={avatar}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </figure>

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInput}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".jpg, .jpeg, .png"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-primary text-textColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
            <button type="submit" className="w-full bg-primary text-white text-[18px] leading-[30px] border border-solid border-primary rounded-lg px-4 py-3 hover:text-primary hover:bg-white">Register</button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Already have an account? <Link to='/login' className="text-primary font-medium ml-1">Login</Link>
            </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

};

export default SignUp;
