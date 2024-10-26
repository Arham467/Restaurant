import React from 'react'
import Container from './Container'
import Button from './Button'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className=" bg-bgImage bg-no-repeat bg-center bg-cover w-full h-[950px]">
            <Container>
                <div className=" flex flex-col gap-6 items-center justify-center h-[100vh]">
                    <h1 className='text-[100px] text-prh2 font-play leading-[100px] font-bold w-[680px] text-center mx-auto'>
                        Best food for
                        your taste
                    </h1>

                    <p className='text-[20px] text-prh2 w-[530px] text-center font-montserrat font-medium'>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>

                    <div className="flex gap-5">
                        <Link to={'/book_table'}>
                            <Button text={"Book Table"} className={`bg-[#C31C1E] border-btn ease-linear duration-500 relative  text-white hover:text-btn`} />
                        </Link>
                        <Link to={'/menu'}>
                            <Button text={"Menu"} className={` text-white bg-black border-black hover:text-black ease-linear duration-500 !px-[52px]`} />
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner