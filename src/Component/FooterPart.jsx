import React from "react";
import Container from "./Container";
import MasCard from "../assets/Mastercard.png";
import Visa from "../assets/Visa.png";
import F_last from "../assets/footer_last.png";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import FooterList from "./FooterList";

const FooterPart = () => {
  return (
    <section className="bg-[#191919] pb-10">
      <Container className={``}>
        <div className="ml-10 py-20">
          <IoRemoveOutline className="text-white mx-auto text-[30px] font-bold" />
        </div>
        <div className="flex justify-between">
          <div className="">
            <FooterList text={`Our Products`} className={`text-[24px] text-white hover:text-btn`} />
            <FooterList
              text={`Our menus`}
              className={`font-light text-lg text-white hover:text-btn`}
            />
            <FooterList
              text={`Our burgers`}
              className={`font-light text-lg text-white hover:text-btn`}
            />
            <FooterList
              text={`Our times sides`}
              className={`font-light text-lg text-white hover:text-btn`}
            />
            <FooterList
              text={`Our naandwiches`}
              className={`font-light text-lg text-white hover:text-btn`}
            />
          </div>
          {/* 2nd part */}
          <div className="">
            <FooterList
              text={`legal information`}
              className={`text-[24px] text-white hover:text-btn`}
            />
            <FooterList
              text={`Legal Notice`}
              className={`font-light text-lg text-white hover:text-btn`}
            />
          </div>
          {/* 3rd part */}
          <div className="">
            <FooterList text={`Contact us`} className={`text-[24px] text-white hover:text-btn`} />
            <FooterList
              text={`Contacts`}
              className={`font-light text-lg text-white hover:text-btn`}
            />
            <FooterList
              text={`Our addresses`}
              className={`font-light text-lg text-white hover:text-btn`}
            />
            <FooterList
              text={`Become a Times Square franchisee`}
              className={`font-light text-lg text-white hover:text-btn`}
            />
          </div>
          {/* 4th part */}
          <div className="">
            <FooterList text={`We accept`} className={`text-[24px] text-white hover:text-btn`} />
            <div className="flex mt-3">
              <img src={MasCard} alt="Mastercard.png" />
              <img src={Visa} alt="Visa.png" />
            </div>
            <img src={F_last} alt="footer_last.png" className="mt-5" />
          </div>
        </div>
      </Container>

      <Container>
        <div className="border-t border-[#4F4F4F] flex justify-between mt-16">
          <div className="flex gap-2 mt-6">
            <div className=" hover:shadow-sm hover:shadow-gray-500 h-6 w-6 rounded-full flex items-center justify-center">
              <a href="#"><TiSocialFacebook className="text-white text-[22px]" /></a>
            </div>
            <div className=" h-7 w-7 hover:shadow-sm hover:shadow-gray-500 rounded-full flex items-center justify-center">
              <a href="#"><FaTwitter className="text-white " /></a>
            </div>
            <div className=" h-7 w-7 hover:shadow-sm hover:shadow-gray-500 rounded-full flex items-center justify-center">
              <a href="#"><FaInstagram className="text-white" /></a>
            </div>
            <div className=" hover:shadow-sm hover:shadow-gray-500 h-6 w-6 rounded-md  flex items-center justify-center">
              <a href="#"><FaLinkedinIn className="text-white" /></a>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-base text-white font-montserrat font-light leading-5">
              © 2024 Tawfiqur Arham All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FooterPart;
