import React from 'react';
import img from "../../assets/image-1.png";
import banner_lift from "../../assets/banner-l.png";
import banner_right from "../../assets/banner-r.png";
import item from "../../assets/item.png";
import { BsSearch } from "react-icons/bs";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Banner = () => {
    return (
      <div className="xl:w-[1440px] w-full mx-auto body_color">
        <div className="">
          <div className="md:flex block justify-between items-center xl:w-[1440px] w-full xl:px-[100px] md:px-3 absolute mt-[100px] body_color pb-24">
            <div className="text-center md:text-start">
              <h2
                className="xl:text-[65px] lg:text-[35px] md:text-[28px] text-[28px] xl:leading-[85px] md:leading-[60px] font-bold text-[#396C03] meriendaBold "
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                Order food online <br /> from your favourite <br /> local
                restaurants.
              </h2>
              <p className="xl:text-[24px] lg:text-[18px] text-[16px] font-semibold leading-8 my-7 text-[#676767]">
                Freshly made food delivered to your door.
              </p>
              {/*   */}

              <div>
                <div className="flex flex-row border-[2px] border-[#396C03] rounded-[120px] xl:w-[714px] lg:w-[450px] md:w-[400px] w-[316px] lg:h-[69px] md:h-[50px] h-[30px] bg-white">
                  <input
                    className=" text-gray-600 rounded-[40px] md:w-[340px] focus:outline-none p-2 relative md:pl-[70px] pl-[30px]"
                    placeholder="Enter your location"
                  />

                  <button
                    className="flex justify-center items-center p-2 w-1/3 rounded-[120px] text-white bg-[#396C03] hover:bg-purple-600 duration-300 xl:ml-[135px] lg:ml-[62px] lg:h-[67px] md:h-[48px] md:text-[22px] text-[14px]"
                    type="button"
                  >
                    <span className="p-3">
                      <BsSearch />
                    </span>
                    <p>Search</p>
                  </button>
                </div>
                <div className="lg:w-[49px] md:w-[30px] w-[20px] lg:h-[49px] md:h-[30px] h-[20px] rounded-full bg-[#FF8B00] absolute lg:mt-[-60px] md:mt-[-40px] mt-[-25px] ml-[10px]"></div>
              </div>

              {/*   */}
            </div>
            <div>
              <div
                className="xl:h-[528px] lg:h-[350px] md:w-[250px] w-[250px] xl:w-[533px] lg:w-[353px] md:h-[250px] h-[250px] relative md:mt-0 mt-[100px] md:ml-0 ml-[15%]"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                <img className="w-full h-full absolute z-10" src={img} alt="" />
              </div>
              <img
                className="xl:w-[201px] lg:w-[160px] md:w-[120px] w-[80px] xl:h-[200px] lg:h-[160px] md:h-[120px] absolute top-0 lg:ml-[-100px] md:ml-[-75px] ml-[14px] h-[80px] lg:mt-[-35px] md:mt-[2px] mt-[330px]"
                src={item}
                alt=""
                data-aos="fade-down-right"
                data-aos-duration="2000"
              />
              <div
                className="xl:w-[245px] lg:w-[150px] w-[130px] xl:h-[118px] lg:h-[80px] h-[55px] banner_top absolute top-0 xl:ml-[170px] lg:ml-[120px] md:ml-[70px] ml-[120px] xl:mt-[-70px] lg:mt-[-55px] md:mt-[2px] mt-[310px] z-10 rounded-[8px] text-center"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h2 className="text-[#FF8B00] xl:text-[48px] lg:text-[30px] md:text-[22px] font-bold flex justify-center items-center">
                  <span className="mr-2">
                    <BsFillPatchCheckFill />
                  </span>{" "}
                  <p>200k+</p>
                </h2>
                <p className="xl:text-[21px] lg:text-[18px] text-[16px] font-semibold">
                  People Delivered
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <img
              className="xl:w-[288px] lg:w-[180px] w-[100px] xl:h-[288px] lg:-[200px] h-[100px] relative top-0 xl:mt-[-40px] mt-[20px]"
              src={banner_lift}
              alt=""
            />
            <img
              className="xl:w-[288px] lg:w-[180px] w-[100px] xl:h-[288px] lg:-[200px] h-[100px] relative top-0 xl:right-[42px] lg:right-[0px] md:right-[10px] right-[20px] xl:mt-[10px] lg:mt-[80px] md:mt-[110px] mt-[420px]"
              src={banner_right}
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;