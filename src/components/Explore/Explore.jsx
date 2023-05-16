
import food from "../../assets/dey.png";
import img from "../../assets/ban.png";
import { BsArrowRight } from "react-icons/bs";



const Explore = () => {

    return (
      <div className="xl:w-[1440px] w-full mx-auto md:mt-[350px] mt-[250px] py-24">
        <div className="md:flex block justify-between items-center xl:pl-[100px] md:pl-3 pr-3">
          <div className="md:text-start text-center">
            <h2
              className="xl:text-[50px] lg:text-[45px] md:text-[30px] text-[28px] font-bold meriendaBold text-[#396C03] leading-[130%]"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              Explore your <br /> favourite city’s food.
            </h2>
            <p className="lg:text-[18px] text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Ornare massa nunc <br />{" "}
              nibh tristique. Non ligula tristique ut ut libero sit convallis{" "}
              <br />
              maecenas. At egestas auctor porta mattis.
            </p>
            <a className="mt-[14px] btn rounded-full w-[231px] h-[67px] px-[60px] py-[15px] text-[20px] font-500 bg-[#396C03] capitalize text-white border-none mr-[23px]">
              Explore <BsArrowRight className="ml-[15px] text-white font-700" />{" "}
            </a>
          </div>
          <div>
            <div>
              <img
                className=" xl:w-[751] lg:w-[610px] md:w-[400px] lg:h-[500px] md:h-[460px] h-[250px] absolute"
                src={img}
                alt=""
              />
            </div>
            <img
              className="lg:w-[751px] lg:h-[437px] md:w-[501px] md:h-[400px] h-[218px] relative"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-easing="ease-in-sine"
              src={food}
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Explore;