import React from "react";
import Link from "next/link";
import Image from "next/image";

import headphone from "@assets/img/footer/headphone.png";
import footer_logo from "@assets/img/logo/footer-logo.png";
import payment_img from "@assets/img/others/payment-icon.png";
import user from "@assets/img/footer/user.png";
import EmailAeroplan from "@/src/svg/email-aeroplan";
import SocialLinks, { CopyRight } from "@/src/common/social-links";


const footer_content = {
  contact_us: (
    <>
      {" "}
      Write us at : <span>Yourinternetprovider@gmail.com</span>
    </>

  ),
  mail: "Yourinternetprovider@gmail.com",
  contact_text: "Call for Consultation!",
  phone: "+1(888) 903-5346",
  info: <>Yourinternetprovider</>,
  map: "",
  address: (
    <>
      312 W 2ND ST, CASPER WY 82601, USA 
      <br />
    </>
  ),
  mail_2: "Yourinternetprovider@gmail.com",
  mail_phone: (
    <>
      {" "}
      Write us at : Yourinternetprovider@gmail.com
      <br />
      Call us at : +1(888) 903-5346
    </>
  ),

  service_links: [
    "Parking permission",
    "Fire Service Noc",
    "Report a Parking Violation",
    "Residential Parking",
    "Vendor Registration",
    "City Board Applications",
  ],
};
const {
  contact_us,
  mail,
  contact_text,
  phone,
  info,
  map,
  address,
  mail_2,
  mail_phone,
  service_links,
} = footer_content;

const Footer = () => {
  return (
    <>
      <footer className="tp-footer-area p-relative">
        <div
          className="tp-footer-bg"
          style={{ backgroundImage: `url(/assets/img/footer/footer-bg.jpg)` }}
        ></div>
        <div
          className="tp-footer-top-shape"
          style={{
            backgroundImage: `url(/assets/img/footer/footer-top-bg.png)`,
          }}
        ></div>

        <div className="container container-large">
          <div className="row" style={{ textAlign: 'center', padding: "20px 0" }}>
            <h2 style={{ color: 'white' }}>Disclaimer</h2>
            <p style={{ color: 'white' }}>This is not the official website of Spectrum, Xfinity, Verizon, AT&T, CenturyLink, Frontier or any other telecommunications service provider, but the official site of Yourinternetprovider, a marketing partner. We may send updates to the mobile number or email address you registered with us. The content on this site is for informational purposes only and does not constitute an offer to purchase any services. Prices and availability are subject to change without notice. Images are for illustrative purposes only. All logos and images on this website are the property of their respective owners and are protected by copyright laws. We do not claim ownership of these materials, and they are used solely for informational purposes.
            </p>
          </div>

          <div className="tp-footer-main-area">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-1">
                  <div className="tp-footer-logo">
                    <a href="/">
                      {" "}
                      <Image
                        src={footer_logo}
                        alt="theme-pure"
                        width={150}
                        height={120}
                      />
                    </a>
                  </div>
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-info">
                      <p>{info}</p>
                      <div className="tp-footer-main-location">
                        <a target="_blank" href={map}>
                          {" "}
                          <i className="fa-sharp fa-light fa-location-dot"></i>
                          {address}
                        </a>
                      </div>
                      <div className="tp-footer-main-mail">
                        <a href={`mailto:${mail_2}`}>
                          <i className="fa-light fa-message-dots"></i>
                          {mail_phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6"></div>
              <div className="col-xl-3 col-lg-5 col-md-6">
                <div className="tp-footer-widget tp-footer-col-4">
                  <h3 className="tp-footer-widget-title">Newsletter</h3>
                  <div className="tp-footer-from">
                    <div className="tp-footer-text-email p-relative">
                      <input type="text" placeholder="Enter Email Address" />
                      <span>
                        <EmailAeroplan />
                      </span>
                    </div>
                    <div className="tp-footer-form-check">
                      <input
                        className="form-check-input"
                        id="flexCheckChecked"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        I agree to all your terms and policies
                      </label>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "fit-content", margin: "auto" }}>
            <Image src={payment_img} alt="theme-pure" width={400} height={80} />
          </div>

          <div className="tp-footer-copyright-area p-relative">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="tp-footer-copyright-inner">
                  <p>
                    <CopyRight />{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="tp-footer-copyright-inner text-lg-end">
                  <Link className="ml-50 mr-50 " href="/refundPolicy">
                    {" "}
                    Refund Policy
                  </Link>
                  <Link href="/termsCondition">Terms and Conditions</Link>
                  <Link className="ml-50" href="/privacypolicy">
                    {" "}
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
