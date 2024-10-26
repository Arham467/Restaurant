import React, { useContext } from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'
import SubNav from './SubNav'
import FooterPart from './FooterPart'
import CartDropdown from './CartDropdown'
import { RxCross2 } from "react-icons/rx";
import Context from '../Context/Context'
import Container from './Container'
import TextCart from './TextCart'
import Toast from './Toast'

const Routlayout = () => {
    const { ddCart, CloseCart, cart, toast, toastMessage } = useContext(Context)

    return (
        <div>

            <SubNav />
            <Navber />
            <Outlet />

            <div className={`w-screen h-screen fixed top-0 left-0 bg-[#00000057] z-50 ${ddCart ? "block" : "hidden"}`}>
                <div className={`w-[30%] h-screen overflow-auto overflow-x-hidden absolute right-0 bg-[#ffffff48] backdrop-blur-[10px] flex flex-col gap-6 items-center`}>
                    <div className="bg-[#474747] w-full text-center py-3 rounded-b-x relative">
                        <h1 className='text-2xl font-bold text-white font-serif'>Add To Cart</h1>

                        <button onClick={CloseCart} className='absolute top-1/2 -translate-y-1/2 right-[30px] text-white text-[22px]'>
                            <RxCross2 />
                        </button>
                    </div>
                    {
                        cart.map((el) => <CartDropdown key={el.id} item={el} />)
                    }
                </div>
            </div>


            <Toast className={`${toast ? "block" : "hidden"}`} message={toastMessage} />
            <FooterPart />
        </div>
    )
}

export default Routlayout