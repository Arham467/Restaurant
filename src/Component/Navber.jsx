import React, { useContext } from 'react'
import Container from './Container'
import logo6 from "../assets/logo6.png"
import List from './List'
import { FaCartPlus } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import Context from '../Context/Context';
import { Link } from 'react-router-dom';


const Navber = () => {

  const list = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Menu",
      path: "/menu",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    }
  ]

  const { totalQuantity, CartDropDown, totalFv } = useContext(Context)

  const cartBtn = () => {
    CartDropDown()
  }

  return (
    <div className='py-4 absolute z-50 bg-[#ffffff98] backdrop-blur-[2px] top-11 left-0 w-full'>
      <Container className={"flex items-center justify-between"}>
        <Link to={'/'}>
          <img src={logo6} alt="" className='w-[100px] h-[80px]' />
        </Link>

        <div className="flex items-center">

          <ul className='flex gap-[8px] mr-[200px]'>
            {
              list.map((el, idx) => {
                return (
                  <List to={el.path} key={idx} text={el.name} />
                )
              })
            }
          </ul>

          <div className="flex gap-7 items-center">
            <button className='relative'>
              <IoIosNotifications className='text-2xl' />
              <p className='absolute -top-[14px] -right-3 w-[1.3vw] h-[1.3vw] text-[14px] flex items-center justify-center text-white font-semibold bg-btn rounded-[100%]'>
                0
              </p>
            </button>

            <Link to={'/wishlist'} className='relative'>
              <button className='mt-1'>
                <CiHeart className='text-[26px]' />
                <p className='absolute -top-2 -right-4 w-[1.3vw] h-[1.3vw] text-[14px] flex items-center justify-center text-white font-semibold bg-btn rounded-[100%]'>
                  {totalFv}
                </p>
              </button>
            </Link>


            <button onClick={() => cartBtn()} className='relative'>
              <FaCartPlus className='text-[22px] text-blck' />

              <p className='absolute -top-4 -right-4 w-[1.3vw] h-[1.3vw] text-[14px] flex items-center justify-center text-white font-semibold bg-btn rounded-[100%]'>
                {totalQuantity}
              </p>
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navber