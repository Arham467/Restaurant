import React from "react";
import img from "../../assets/img.png";
import TitleDes from "../../Common/TitleDes";
import icon1 from "../../assets/Icon1.png";
import icon2 from "../../assets/Icon2.png";
import icon3 from "../../assets/Icon3.png";
import vector from "../../assets/vector.png";
import vector2 from "../../assets/vector2.png";
import Container from "../Container";

const Delivery = () => {
  return (
    <div className="py-[100px] relative z-10">
      <div className="absolute top-4 left-[45%] -z-10">
        <img src={vector2} alt="" className="opacity-55" />
      </div>
      <div className="absolute right-0 bottom-0 -z-10">
        <img src={vector} alt="" className="w-[328px] opacity-55" />
      </div>
      <Container>
        <div className="flex items-center justify-between ">
          {/* left */}
          <div>
            <img src={img} alt="" className="w-[650px]" />
          </div>
          {/* right */}
          <div>
            <TitleDes
              className={"!max-w-[460px]"}
              p2={true}
              mainTitle={"Fastest Food Delivery in City"}
              des2={
                "Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. "
              }
            />
            {/* Service */}
            <div className="pt-12 flex flex-col items-start gap-y-5 ml-10">
              <div className="flex items-center gap-x-4">
                <img src={icon1} alt="" />
                <h5 className="font-montserrat font-bold text-base text-prh2">
                  Delivery within 30 minutes
                </h5>
              </div>
              <div className="flex items-center gap-x-4">
                <img src={icon2} alt="" />
                <h5 className="font-montserrat font-bold text-base text-prh2">
                  Online Services Available
                </h5>
              </div>
              <div className="flex items-center gap-x-4">
                <img src={icon3} alt="" />
                <h5 className="font-montserrat font-bold text-base text-prh2">
                  Best Offer & Prices
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Delivery;
