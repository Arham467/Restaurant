import React, { useContext, useState } from "react";
import Button from "./Button";
import Container from "./Container";
import SpecialCard from "./SpecialCard";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import Context from "../Context/Context";
import AddToCartPopUp from "./AddToCartPopUp";
import SearchBar from "./SearchBar";

const Menu = () => {
  const menuList = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];
  const collaborate = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const [active, setactive] = useState(menuList[0]);

  const { FoodBank, activeCategory, popUp, popUpCart, cart } =
    useContext(Context);

  const targetCategory = (el) => {
    setactive(el);
    activeCategory(el);
  };

  return (
    <div className="bg-group bg-center bg-no-repeat bg-contain">
      <Container>
        <h1 className="pt-24 text-center font-serif font-medium text-[100px] text-prh2">
          Our Menu
        </h1>
        <p className="text-[18px] text-center w-[557px] mx-auto font-sans">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>

        <div className="flex items-center justify-center mt-10">
          <SearchBar />
        </div>

        <div className="flex justify-center gap-4  py-[50px]">
          {menuList.map((el, idx) => (
            <Button
              key={idx}
              text={el}
              onClick={() => targetCategory(el)}
              className={` w-[150px] !px-0 !py-[10px] text-center font-semibold ${active == el ? "bg-btn text-white border-btn" : false
                }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-4 gap-7">
          {FoodBank.map((el) => (
            <SpecialCard key={el.id} item={el} />
          ))}
        </div>
      </Container>

      <div className="mt-[130px] py-[120px] flex items-center justify-between bg-[#F9F9F7]">
        <Container className={`flex justify-between items-center`}>
          <div className="font-serif w-[346px] text-prh2">
            <h1 className="text-[55px] font-serif font-medium leading-[60px]">
              You can order through apps
            </h1>
            <p className="text-[18px] font-sans leading-[24px] mt-[20px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim
              bibendum sed et aliquet aliquet risus tempor semper.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 w-[828px]">
            {collaborate.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                className="h-[90px] w-[260px] object-cover"
              />
            ))}
          </div>
        </Container>
      </div>

      <AddToCartPopUp
        className={`fixed z-50 top-0 left-0 ${!popUp ? "hidden" : "block"}`}
      />
    </div>
  );
};

export default Menu;
