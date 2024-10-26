import React, { useContext } from 'react'
import Container from './Container'
import BlogCard from '../Component/BlogCard'
import Button from './Button'
import Burger from '../assets/burger.jpg'
import Context from '../Context/Context'
import { Link } from 'react-router-dom'
const Articels = () => {

  const { FoodBank, addBlogDetails, Blog_D } = useContext(Context)

  // key={idx} to={`/blog_details/${idx}`}
  return (
    <section className='py-20'>
      <Container className={``}>

        <div className="flex justify-between">
          <h3 className='text-[55px] text-prh2 font-serif leading-[60px] font-medium  w-[550px]'>Our Blog & Articles</h3>
          <Link to={'/blog'}>
            <Button text={"Blog Details"} className={`bg-[#C31C1E] border-btn text-white  hover:text-[#C31C1E] hover:bg-white duration-500 border-2`} />
          </Link>
        </div>

        <div className=" mt-12 flex gap-x-10">

          <div className="h-[732px] w-[550px] bg-white rounded-xl shadow-xl ">

            <img src={Blog_D == false ? Burger : Blog_D[0].thums[0]} alt="blog_one.jpg" className='rounded-t-xl w-full h-[450px] object-cover' />

            <p className={`text-[14px] text-prh2 font-montserrat font-medium leading-5 pt-6 pb-3 ml-3`}>
              {Blog_D == false ? "January 3, 2023" : Blog_D[0].category}

            </p>
            <h3 className={`text-2xl text-prh2 font-serif leading-6 font-medium ml-3`}>
              The secret tips & tricks to prepare a perfect burger & {Blog_D == false ? "pizza" : Blog_D[0].name} for our customers
            </h3>

            <p className='text-[14px] text-prh2 font-montserrat font-medium leading-5 pt-6 pb-3 ml-3'>
              {Blog_D == false ? "Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas." : Blog_D[0].description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-5 gap-x-10 h-[730px] ArticlesBlog">
            {
              FoodBank.slice(16, 20).map((el, idx) => {
                return (
                  <div key={idx} onClick={() => addBlogDetails(el.id)}>
                    < BlogCard
                      src={el.thums[0]}
                      ptext={el.name}
                      headding={el.description.slice(0, 60)}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Articels