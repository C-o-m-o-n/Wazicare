import React from 'react';
import hero1 from '../assets/images/therapy/therapist2.jpg';
import hero2 from '../assets/images/therapy/therapist4.jpg';
import hero3 from '../assets/images/therapy/therapist3.jpg';

const Home = () => {
  return (
    <>
      {/* hero section  */}
      
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className='text-[36px] leading-[46px] text-textColor font-[700] md:text-[60px] md:leading-[70px]'>We help clients get their normal,happy life</h1>
                <p className="text__para">
                WaziCare's digital mental health approach increases access to crucial care across the African continent. Our Therapy Marketplace connects people to professional therapists, and our whitelabel technology powers healthcare groups and nonprofit programs to scale care
                </p>
                <button className="btn">Book an appointment</button>
              </div>

              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text[44px] lg:leading-[54px] font-[700] text-textColor'>30+</h2>
                  <span className='w-[100px] h-2 bg-proYellow block rounded-full mt-[-14px]'> </span>
                  <p className='text__para'>Years of Experience</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text[44px] lg:leading-[54px] font-[700] text-textColor'>10+</h2>
                  <span className='w-[100px] h-2 bg-lightGreen block rounded-full mt-[-14px]'> </span>
                  <p className='text__para'>Centers locations</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text[44px] lg:leading-[54px] font-[700] text-textColor'>98%</h2>
                  <span className='w-[100px] h-2  bg-green block rounded-full mt-[-14px]'> </span>
                  <p className='text__para'>Client Satisfaction</p>
                </div>
              </div>

              
            </div>


            <div className="flex gap-[30px] justify-end sm:flex-1">
              <div className='w-[350px]'>
                <img className='w-full rounded-full' src={hero1} alt="" />
              </div>
              <div className="w-[160px]">
                <img src={hero2} alt="" className='w-full rounded-full mb-[20px]' />
                <img src={hero3} alt="" className='w-full rounded-full' />
              </div>
             
            </div>
          </div>
        </div>
      </section>
      {/* hero section end  */}

        {/* hero section  */}
        <section>
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              We offer the best services
            </h2>
          </div>
        </section>
      </>
    
  )
}

export default Home
