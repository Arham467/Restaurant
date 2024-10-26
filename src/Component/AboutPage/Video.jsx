import { useRef, useState } from "react";
import TitleDes from "../../Common/TitleDes";
import img1 from "../../assets/restaurant-menu 1.png";
import img2 from "../../assets/order.png";
import img3 from "../../assets/clock.png";
import { IoIosPlay } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../Container";
import { ImCross } from "react-icons/im";
import AboutVideo from '../../video/AboutVideo.mp4'

const Video = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [play, setplay] = useState(false);
  const videoref = useRef();
  {
    play
      ? gsap.to("#video", {
        opacity: 0,
        zIndex: -999,
      }) &&
      gsap.to("#video2", {
        opacity: 1,
        zIndex: "999",
        duration: 0.5,
      }) &&
      gsap.to("#overlay", {
        opacity: 1,
        zIndex: 999,
      }) &&
      gsap.to("#crose", {
        display: "block",
        zIndex: 999,
      })
      : gsap.to("#video", {
        opacity: 1,
        zIndex: 999,
      }) &&
      gsap.to("#video2", {
        opacity: 0,
        zIndex: "-999",
        duration: 0.6,
        height: "60%",
      }) &&
      gsap.to("#overlay", {
        opacity: 0,
        zIndex: -999,
      }) &&
      gsap.to("#crose", {
        display: "hidden",
      });
  }

  if (videoref.current) {
    play == true && videoref.current.play();
  }
  if (videoref.current) {
    play == false && videoref.current.load();
  }

  const playVideo = () => {
    setplay(true);
  };

  return (
    <div>
      <div className="relative">
        <div
          id="overlay"
          className="bg-[#ffffff1c] backdrop-blur-sm opacity-0 z-[-999] h-[100vh] w-full fixed top-0 left-0"
        ></div>

        <div
          id="crose"
          onClick={() => setplay(false)}
          className="fixed z-[-999] top-10 right-10 hidden"
        >
          {
            play ? <span className="text-red-600 text-2xl cursor-pointer">
              <ImCross />
            </span> :
              false
          }
        </div>
      </div>

      <div
        id="video2"
        className="z-[-999] fixed rounded-lg overflow-hidden w-[80%] !h-[80vh] opacity-0 top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
      >
        <video ref={videoref} className="h-full w-full object-cover">
          <source src={AboutVideo} />
        </video>
      </div>
      
      <div
        id="video"
        className={`relative bg-videoBg bg-no-repeat bg-cover w-full h-[690px] object-cover bg-center 
           
        `}
      >
        <a onClick={playVideo} id="play-video" className="video-play-button">
          <span className="text-red-700 relative z-50 text-4xl">
            <IoIosPlay />
          </span>
        </a>

        <div className="flex items-center justify-center w-full absolute top-[65%] left-[50%] -translate-x-[50%] -translate-y-[60%]">
          <TitleDes
            mainTitle={"Feel the authentic & original taste from us"}
            p1={false}
            p2={false}
            TitleWhite={true}
            textCenter={true}
          />
        </div>
      </div>

      <div className="bg-white py-[80px]">
        <Container>
          <div className="flex items-center justify-between">
            {/* menu1 */}
            <div className="flex gap-x-4 max-w-[336px]">
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <h5 className="font-bold text-xl text-prh2 font-montserrat capitalize">
                  Multi Cuisine
                </h5>
                <p className="font-montserrat font-normal text-base text-prh leading-6 pt-3">
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>
            {/* menu2 */}
            <div className="flex gap-x-4 max-w-[336px]">
              <div>
                <img src={img2} alt="" />
              </div>
              <div>
                <h5 className="font-bold text-xl text-prh2 font-montserrat capitalize">
                  Easy To Order
                </h5>
                <p className="font-montserrat font-normal text-base text-prh leading-6 pt-3">
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>
            {/* menu3 */}
            <div className="flex gap-x-4 max-w-[336px]">
              <div>
                <img src={img3} alt="" />
              </div>
              <div>
                <h5 className="font-bold text-xl text-prh2 font-montserrat capitalize">
                  Fast Delivery
                </h5>
                <p className="font-montserrat font-normal text-base text-prh leading-6 pt-3">
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Video;