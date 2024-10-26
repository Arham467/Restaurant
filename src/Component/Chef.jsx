import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import TitleDes from "../Common/TitleDes";
import chef from "../assets/chef1.png";
import onion from "../assets/onion.png";
import Container from "./Container";
import { Link } from "react-router-dom";

const Chef = () => {
  return (
    <div className="bg-[#F3F4F4] py-[100px] relative">
      <div
        className="absolute top-16
       left-0"
      >
        <img src={onion} alt="" className="w-[310]" />
      </div>
      <Container>
        <div className="flex items-center justify-between">
          {/* left */}
          <div className="max-w-[520px]">
            <TitleDes
              mainTitle={"Our Expects Chef"}
              p2={true}
              des2={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
            <div className="flex gap-y-8 gap-x-3 flex-wrap pt-10">
              <div className="flex gap-x-2 max-w-[254px]">
                <div className="bg-[#EA6D27] w-[22px] h-[20px] rounded-full flex items-center justify-center text-white text-xl">
                  <IoIosCheckmark />
                </div>

                <h5 className="font-montserrat font-normal text-sm text-prh">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h5>
              </div>
              <div className="flex gap-x-2 max-w-[254px]">
                <div className="bg-[#EA6D27] w-[22px] h-[20px] rounded-full flex items-center justify-center text-white text-xl">
                  <IoIosCheckmark />
                </div>

                <h5 className="font-montserrat font-normal text-sm text-prh">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h5>
              </div>
              <div className="flex gap-x-2 max-w-[254px]">
                <div className="bg-[#EA6D27] w-[22px] h-[20px] rounded-full flex items-center justify-center text-white text-xl">
                  <IoIosCheckmark />
                </div>

                <h5 className="font-montserrat font-normal text-sm text-prh">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h5>
              </div>
              <div className="flex gap-x-2 max-w-[254px]">
                <div className="bg-[#EA6D27] w-[22px] h-[20px] rounded-full flex items-center justify-center text-white text-xl">
                  <IoIosCheckmark />
                </div>

                <h5 className="font-montserrat font-normal text-sm text-prh">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h5>
              </div>
              <div className="flex gap-x-2 max-w-[254px]">
                <div className="bg-[#EA6D27] w-[22px] h-[20px] rounded-full flex items-center justify-center text-white text-xl">
                  <IoIosCheckmark />
                </div>

                <h5 className="font-montserrat font-normal text-sm text-prh">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h5>
              </div>
              <div className="flex gap-x-2 max-w-[254px]">
                <div className="bg-[#EA6D27] w-[22px] h-[20px] rounded-full flex items-center justify-center text-white text-xl">
                  <IoIosCheckmark />
                </div>

                <h5 className="font-montserrat font-normal text-sm text-prh">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </h5>
              </div>
            </div>
            {/* button */}
            <div className="pt-10 flex items-center gap-x-2">
              <Link to={'/book_table'}>

                <button
                  className={
                    "py-3 rounded-tl-full rounded-bl-full  px-8 text-xl font-medium text-white bg-btn border border-btn font-serif hover:bg-transparent hover:text-btn ease-linear duration-500"
                  }
                >
                  Book a table{" "}
                </button>
              </Link>

              <Link to={'/menu'}>
                <button
                  className={
                    "py-3 rounded-tr-full rounded-br-full px-8 text-xl font-medium text-white bg-[#F66A1D] border border-[#F66A1D] font-serif hover:bg-transparent hover:text-[#F66A1D] ease-linear duration-500"
                  }
                >
                  Menu
                </button>
              </Link>
            </div>
          </div>
          {/* right */}
          <div>
            <img src={chef} alt="" className="w-[560px]" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Chef;
