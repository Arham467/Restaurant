import React from "react";

const TitleDes = ({
  p2 = false,
  p1 = false,
  className,
  mainTitle,
  des1,
  des2,
  TitleWhite = false,
  textCenter = false,
}) => {
  return (
    <div className={`${className} max-w-[555px]  flex flex-col`}>
      <h3
        className={`${TitleWhite ? "text-white" : "text-prh2"} ${textCenter && "text-center"
          } font-serif text-[55px] pb-6 font-medium leading-[60px]`}
      >
        {mainTitle ? mainTitle : "We provide healthy food for your family."}
      </h3>
      {p1 && (
        <p className="text-prh2 font-semibold text-lg font-montserrat leading-7 pb-6">
          {des1
            ? des1
            : "Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance.Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate."}
        </p>
      )}
      {p2 && (
        <p className="leading-[24px] font-montserrat font-normal text-prh text-base">
          {des2
            ? des2
            : "At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event."}
        </p>
      )}
    </div>
  );
};

export default TitleDes;
