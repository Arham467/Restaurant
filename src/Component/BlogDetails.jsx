import React, { useContext } from 'react'
import Container from './Container'
import BlogD2 from '../assets/blogD2.jpg'
import Context from '../Context/Context'

const BlogDetails = () => {

  const { Blog_D } = useContext(Context)

  return (
    <div className='mt-[6vw]'>
      <div>
        <Container>
          <div className='pb-20'>
            <h1 className='py-7 w-[1070px] mx-auto font-montserrat font-bold text-[46px] text-center text-prh2 leading-[60.5px]'>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h1>
            <img src={Blog_D[0].image} alt="BlogD1" className='w-[1160px] h-[600px] pb-[64px] ml-20 object-contain' />
            <div >
              <h2 className='pl-20 font-montserrat font-bold text-2xl pb-[20px]'>What do you need to prepare a home-made burger?</h2>
              <p className='pl-20 pr-[50px] font-montserrat text-lg pb-[36px]  leading-[28px]'>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
              <div className='pl-20 pr-[50px] font-montserrat !font-bold text-lg'>
                1. Quality Beef:
                <span className='pl-1 !font-normal text-lg'>The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</span>
              </div>
              <div className='pl-20 pr-[40px] font-montserrat !font-bold text-lg'>
                2. Seasoning:
                <span className='pl-1 !font-normal text-lg tracking-normal'> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</span>
              </div>
              <div className='pl-20 pr-[40px] font-montserrat !font-bold text-lg'>
                3. Don’t Overwork the Meat:
                <span className='pl-1 !font-normal text-lg'>When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</span>
              </div>
              <div className='pl-20 pr-[50px] font-montserrat !font-bold text-lg'>
                4. Cooking:
                <span className='pl-1 !font-normal text-lg'>High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</span>
              </div>
              <div className='pl-20 pr-[30px] font-montserrat !font-bold text-lg'>
                5. Quality Beef:
                <span className='pl-1 !font-normal text-lg'>Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</span>
              </div>

            </div>
            <div className='mt-[48px]'>
              <h2 className='pl-20 font-montserrat font-bold text-2xl pb-[20px]'>What are the right ingredients to make it delicious?</h2>
              <p className='pl-20 pr-[50px] font-montserrat text-lg pb-[36px]  leading-[28px]'>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
              <div className='pl-20 pr-[50px] font-montserrat !font-bold text-lg'>
                1. Quality Beef:
                <span className='pl-1 !font-normal text-lg'>The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</span>
              </div>
              <div className='pl-20 pr-[40px] font-montserrat !font-bold text-lg'>
                2. Seasoning:
                <span className='pl-1 !font-normal text-lg tracking-normal'> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</span>
              </div>
              <div className='pl-20 pr-[40px] font-montserrat !font-bold text-lg'>
                3. Don’t Overwork the Meat:
                <span className='pl-1 !font-normal text-lg'>When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</span>
              </div>
              <div className='pl-20 pr-[50px] font-montserrat !font-bold text-lg'>
                4. Cooking:
                <span className='pl-1 !font-normal text-lg'>High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</span>
              </div>
              <div className='pl-20 pr-[30px] font-montserrat !font-bold text-lg'>
                5. Quality Beef:
                <span className='pl-1 !font-normal text-lg'>Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</span>
              </div>
              <img src={BlogD2} alt="BlogD2" className='w-[1210px] mt-[48px] ml-16' />

            </div>


          </div>

        </Container>
      </div>
    </div>
  )
}


export default BlogDetails
