import Link from "next/link";
import Image from "next/image";
import { Navigation } from "swiper";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AngleArrow from "@/src/svg/angle-arrow";

import about_img_1 from "@assets/img/about/icon-1.png";
import about_img_2 from "@assets/img/about/icon-2.png";
import about_img_3 from "@assets/img/about/icon-3.png";
import LineArrowTwo from "@/src/svg/line-arrow-2";
import shape_1 from "@assets/img/about/shape-1.png";
import about from "@assets/img/about/about-1.png";

const about_data = [
  {
    id: 1,
    img: about_img_1,
    title: "Internet",
    description: (
      <>
        Reliable connectivity for all <br /> your online needs.
        <br /> {" "}
      </>
    ),
    price: '$65.00',
  },
  {
    id: 2,
    img: about_img_2,
    title: "Cable",
    description: (
      <>
        {" "}
        best Cable infrastructure.
        <br />{" "}
      </>
    ),
    price: '$80.00',
  },
  {
    id: 2,
    img: about_img_3,
    title: "Landline",
    description: (
      <>
        Affordable landline plans from <br />
        crystal-clear sound, top <br />{" "}
      </>
    ),
    price: '$20.00',
  },
  {
    id: 1,
    img: about_img_1,
    title: "Ultra-Fast Fiber Internet",
    description: (
      <>
        Lightning-fast speeds with <br /> fiber-optic technology. <br />{" "}
      </>
    ),
    price: '$100.00',
  },
  {
    id: 2,
    img: about_img_2,
    title: "Wireless 5G Internet",
    description: (
      <>
        Next-gen wireless connectivity <br /> for seamless browsing. <br />{" "}
      </>
    ),
    price: '$80.00',
  },
];

const setting = {
  slidesPerView: 3,
  spaceBetween: 82,
  navigation: {
    nextEl: ".about-button-next-1",
    prevEl: ".about-button-prev-1",
  },
  breakpoints: {
    1860: {},
    1800: {
      spaceBetween: 40,
    },
    1701: {},
    1600: {},
    1560: {},
    1400: {
      spaceBetween: 60,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 60,
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const AboutArea = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <section className="tp-about-area pb-45 box-plr p-relative">
        <div className="tp-about-shape d-none d-xl-block">
          <Image className="shape-1" src={shape_1} alt="theme-pure" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="tp-about-wrapper-thumb text-center text-xl-start fadeLeft">
                <Image src={about} alt="theme-pure" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-10">
              <div className="tp-about-wrapper pl-50">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tp-about-title-wrapper p-relative">
                      <h3 className="tp-section-title">
                        Services We’re Offering
                        <span className="title-left-shape">
                          <LineArrowTwo />
                        </span>
                      </h3>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="tp-about-nav d-none d-md-block p-relative">
                      <button type="button" className="about-button-prev-1">
                        <i className="fa-regular fa-arrow-left"></i>
                      </button>
                      <button type="button" className="about-button-next-1">
                        <i className="fa-regular fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="tp-about-item-wrapper">
                  <Swiper
                    {...setting}
                    modules={[Navigation]}
                    loop={isLoop}
                    className="about-active swiper-container"
                  >
                    {about_data.map((item, i) => (
                      <SwiperSlide key={i} className="tp-about-item mb-30">
                        <div className="tp-about-item-thumb">
                          <Image src={item.img} alt="theme-pure" />
                        </div>
                        <div className="tp-about-item-content">
                          <h4 className="about-title">{item.title}</h4>
                          <p>{item.description}</p>
                          <p style={{ color: "#020626" }}> <b>{item.price}</b> </p>
                          <div className="tp-about-item-btn">
                            <Link href="/aboutus">
                              <i className="fa-regular fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                   
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
