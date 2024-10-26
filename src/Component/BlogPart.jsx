import React from "react";
import Container from "./Container";
import BlogCard from "./BlogCard";
import { useContext } from "react";
import Context from "../Context/Context";
import { Link } from "react-router-dom";


const BlogPart = () => {
  
  const { FoodBank, addBlogDetails } = useContext(Context)

  return (
    <section className="py-20 mt-[6vw]">
      <Container>
        <div className="">
          <h3 className="text-[75px] text-prh2 font-serif leading-9 font-regular text-center mx-auto">
            Our Blog & Articles
          </h3>
          <p className="text-[20px] text-prh2 w-[750px] text-center font-montserrat font-medium mx-auto leading-7 pt-12">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-4 gap-10">
          {
            FoodBank.map((el, idx) => {
              return (
                <Link key={idx} to={`/blog_details/${idx}`} onClick={() => addBlogDetails(el.id)}>
                  < BlogCard
                    src={el.image}
                    ptext={el.name}
                    headding={el.description.slice(0, 60)}
                  />
                </Link>
              )
            })
          }
        </div>
      </Container>
    </section>
  );
};

export default BlogPart;
