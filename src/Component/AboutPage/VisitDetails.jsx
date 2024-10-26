import React from "react";
import Container from "../Container";
import TitleDes from "../../Common/TitleDes";
import img from "../../assets/Image.png";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const VisitDetails = () => {
  return (
    <div className="py-[100px]">
      <Container>
        <div className="flex justify-between items-center pt-20">
          <div className="relative">
            <img src={img} alt="" className="w-[550px]" />
            <div className="bg-[#474747] max-w-[411px] absolute bottom-[-47px] right-[-67px] p-[50px] rounded-xl text-white font-montserrat">
              <h5 className="font-bold text-2xl pb-7">Come and visit us</h5>
              <div className="flex items-center gap-x-3 pb-4">
                <MdCall className="text-white text-xl" />
                <a
                  href="tel:+4148570107"
                  className="font-normal hover:text-red-400 text-base text-[#F9F9F7]"
                >
                  (414) 857 - 0107
                </a>
              </div>
              <div className="flex items-center gap-x-3 pb-4">
                <MdEmail className="text-white text-xl" />
                <a
                  href="mailto:happytummy@restaurant.com"
                  className="font-normal text-base hover:text-red-400 text-[#F9F9F7]"
                >
                  happytummy@restaurant.com
                </a>
              </div>
              <div className="flex items-center gap-x-3">
                <FaLocationDot className="text-white text-xl" />
                <p className="font-normal text-base text-[#F9F9F7]">
                  837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                </p>
              </div>
            </div>
          </div>
          <div>
            <TitleDes p1={true} p2={true} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VisitDetails;
