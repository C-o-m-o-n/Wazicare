import { useContext, useState } from 'react';
import userImg from '../../assets/images/people/p4.jpg';
import { authContext } from '../../context/AuthContext';
import Profile from './Profile';
import MyBooking from './MyBooking';


const MyAccount = () => {
  const [tab,setTab] = useState('bookings')

  const { dispatch } = useContext(authContext);

  const logoutHandler = () => {
    dispatch({ type: 'LOGOUT'})
  }
  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
      <div className='grid md:grid-cols-3 gap-10'>

        <div className="pb-[50px] px-[30px] rounded-md">

          <div className="flex items-center justify-center">
            <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primary'>
              <img src={userImg} alt="" className='w-full h-full rounded-full' />
            </figure>
          </div>

          <div className="text-center mt-4">
            <h3 className='text-[18px] leading-[30px] text-textColor font-bold'>Muhib Ramar</h3>
            <p className="text-textColor text-[15px] leading-6 font-medium">example@gmail.com</p>
          </div>

          <div className="mt-[50px] md:mt-[100px]">
            <button onClick={logoutHandler} className='w-full bg-textColor text-[#fff] p-3 text-[16px] leading-7 rounded-md'>Logout</button>
            <button className='w-full bg-red-600 mt-4 text-[#fff]  p-3 text-[16px] leading-7 rounded-md'>Delete Account</button>
          </div>

        </div>


        <div className="md:col-span-2 md:px-[30px]">
          <div>
            <button onClick={() => setTab('bookings')}
             className={`${tab === 'bookings' && 'bg-primary text-white font-normal'} p-2 mr-5 px-5 rounded-md text-textColor font-semibold text-[16px] leading-7
            border border-solid border-primary`}>
              My Bookings
            </button>
            <button onClick={() => setTab('settings')} 
            className={`${tab === 'settings' && 'bg-primary text-white font-normal'} py-2 px-5 rounded-md text-textColor font-semibold text-[16px] leading-7
            border border-solid border-primary`}>
              Profile Settings
            </button>
          </div>

          {
            tab === 'bookings' && <MyBooking />
          }
          {
            tab === 'settings' && <Profile />
          }
        </div>




      </div>
    </div>
    </section>
  )
}

export default MyAccount;
