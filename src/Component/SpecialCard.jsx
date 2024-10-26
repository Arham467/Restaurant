import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Context from "../Context/Context";
import { FaHeart } from "react-icons/fa6";

const SpecialCard = ({ item, heart = true }) => {
  const { AddcartPopUp, addToWish, love, fvDeActiv, fvActiv } = useContext(Context);
  const { id, image, name, description, price } = item;

  const HandleFavour = (id) => {
    addToWish(id);
  };

  return (
    <div className="w-[310px] h-[440px] bg-transparent rounded-md relative hover:-translate-y-3 duration-150 ease-linear hover:scale-[1.05] group">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="rounded-full w-[220px] h-[220px] object-cover scale-[0.9] ease-linear duration-150 absolute top-0 z-30 group-hover:scale-[1] group-hover:-rotate-6 left-1/2 -translate-x-1/2"
        />

        {heart && (
          <div
            onClick={() => HandleFavour(id)}
            className="absolute top-9 cursor-pointer right-[55px] overflow-hidden z-50 text-red-600 text-[22px] bg-white rounded-full size-[40px] flex items-center justify-center"
          >
            {love.includes(id) ? <FaHeart onClick={fvActiv} /> : <CiHeart onClick={fvDeActiv} />}
          </div>
        )}
      </div>

      <div
        className="group-hover:bg-[#c31c1edb] border-[2px] shadow-2xl ease-linear duration-150 w-[270px] h-[325px] absolute bottom-[10px] 
                rounded-tl-[40px] rounded-tr-[5px] rounded-br-[40px] rounded-bl-[5px] ml-[20px] px-[20px]"
      >
        <h3 className=" text-prh2 font-bold text-[24px] pt-[120px] group-hover:text-[#ffffffd6] ease-linear duration-150">
          {name}
        </h3>
        <p className="font-sans font-normaltext-[18px] pt-[5px] pb-[15px] group-hover:text-[#ffffffd6] ease-linear duration-150">
          {description}
        </p>

        <div className="flex items- justify-between text-prh2 group-hover:text-[#ffffffd6]">
          <h3 className="font-bold font-matter text-[24px]">${price}</h3>

          <div className="flex items-center gap-3 pr-5 text-[24px]">
            {/* <button>
              <CiHeart className="text-2xl" />
            </button> */}

            <button
              onClick={() => AddcartPopUp(id)}
              className="flex items-center gap-x-2 font-montserrat text-sm text-white group-hover:text-prh2 bg-btn group-hover:bg-white  py-2 px-4 rounded-full"
            >
              <span>Add</span> <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
