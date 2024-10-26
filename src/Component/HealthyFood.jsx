import React from 'react'
import Container from './Container'
import f_bg_left from '../assets/f_bg_left.png'
import Button from './Button'
import CounterUp from './CounterUp';
import location from '../assets/location.png'
import review from '../assets/review.png'
import database from '../assets/database.png'
import CounterOrder from '../assets/CounterOrder.png'
import { Link } from 'react-router-dom';



const HealthyFood = () => {


  let count = [
    {
      num: 3400,
      dtl: "Total Visitor",
      amountTyp: "M",
      img: location
    },
    {
      num: 2080,
      dtl: "Total happy Customer",
      amountTyp: "K",
      img: review
    },
    {
      num: 3100,
      dtl: "Total order",
      amountTyp: "K",
      img: CounterOrder
    },
    {
      num: 3000,
      dtl: "Total Host of Homey",
      amountTyp: "B+",
      img: database
    },
  ]

  return (
    <section className='bg-group_bg bg-no-repeat py-96 bg-right relative'>

      <div className="absolute top-24">
        <img src={f_bg_left} alt="" />
      </div>
      <Container className={``}>
        <div className="mt-24">
          <h3 className='text-[55px] text-prh2 font-serif leading-[60px] font-medium  w-[550px]'>We provide healthy food for your family.</h3>
          <p className='text-[18px] text-prh2  font-montserrat font-medium pt-4 w-[600px]'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>

          <p className='text-base text-prh2 font-montserrat font-normal pt-5 w-[600px]'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>

          <Link to={'/about'}>
            <Button text={"More About Us"} className={`bg-[#C31C1E] border-btn text-white mt-10 hover:text-[#C31C1E] hover:bg-white duration-500 border-2`} />
          </Link>

        </div>

        <div className="absolute top-0 left-1/2 w-[100%] bg-[#F3F4F4] py-[2vw] justify-center -translate-x-1/2 flex gap-2">
          {
            count.map((el, idx) => {
              return (
                <CounterUp key={idx} item={el} />
              )
            })
          }

        </div>
      </Container>
    </section>
  )
}

export default HealthyFood