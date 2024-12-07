import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import FooterThree from "../layout/footers/footer";
import ServiceArea from "../components/homes/home/service-area";
import LineArrowTwo from "../svg/line-arrow-2";
import AngleArrow from "../svg/angle-arrow";
import GreenRightArrow from "../svg/green-right-arrow";
import Link from "next/link";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"privacypolicy"} />
      <HeaderOne />
      <Breadcrumb top_title="Privacy Policy" page_title="privacypolicy" />
      <div
        style={{
          width: "100vw",
          height: "100%",
          backgroundColor: "#020626",
          padding: "10vh 0",
          margin: "10vw 0",
        }}
      >
        <div
          className="tp-fun-fact-title-wrapper"
          style={{ width: "80%", margin: " auto" }}
        >
          <span className="tp-section-title__pre">
            privacy <span className="title-pre-color">policy</span>
            <AngleArrow />
          </span>
          <p className="tp-section-title">
            Yourinternetprovider, we take your privacy seriously. This Privacy
            Policy outlines how we collect, use, disclose, and protect your
            personal information when you visit our website or use our Internet,
            cable, and phone services. By accessing or using our services, you
            consent to the practices described in this policy.
            <span className="title-left-shape">
              <LineArrowTwo />
            </span>
          </p>
          <p>
            We may collect various types of information from you, including:
          </p>
          <ul>
            <li>
              <span>
                {" "}
                <GreenRightArrow />
              </span>
              Personal Information: This may include your name, contact
              information (such as email address and phone number), and billing
              details.
            </li>
            <li>
              <span>
                <GreenRightArrow />{" "}
              </span>
              Usage Information: We collect information about how you use our
              website and services, including IP addresses, browser type, and
              device info
            </li>
            <li>
              <span>
                <GreenRightArrow />{" "}
              </span>
              Cookies and Tracking Technologies: We use cookies and similar
              technologies to enhance your browsing experience
            </li>
          </ul>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>
              <span>
                {" "}
                <GreenRightArrow />
              </span>
              Providing Services: To deliver Internet, cable, and phone
              services, including billing and customer support.
            </li>
            <li>
              <span>
                <GreenRightArrow />{" "}
              </span>
              Improving Services: To enhance and customize your experience,
              develop new services, and conduct research and analysis.
            </li>
            <li>
              <span>
                <GreenRightArrow />{" "}
              </span>
              Marketing: To send you promotional materials, offers, and updates
              about our services, with the option to opt out at any time.
            </li>
            <li>
              <span>
                <GreenRightArrow />{" "}
              </span>
              Legal Compliance: To comply with legal obligations and resolve
              disputes.
            </li>
          </ul>
          <p>
            We do not sell your personal information to third parties. However,
            we may share your information with:
          </p>
          <ul>
            <li>
              <span>
                {" "}
                <GreenRightArrow />
              </span>
              Service Providers: Third-party vendors and partners who assist us
              in delivering our services.
            </li>
            <li>
              <span>
                <GreenRightArrow />{" "}
              </span>
              Legal Requirements: When required by law, court order, or
              government authority.
            </li>
            <li>
              <span>
                <GreenRightArrow />{" "}
              </span>
              Cookies and Tracking Technologies: We use cookies and similar
              technologies to enhance your browsing experience
            </li>
          </ul>
          <p>Data Security</p>
          <ul>
            <li>
              <span>
                {" "}
                <GreenRightArrow />
              </span>
              We implement reasonable security measures to protect your personal
              information. However, please be aware that no method of
              transmission over the internet is entirely secure, and we cannot
              guarantee the absolute security of your data.
            </li>
          </ul>
          <p>You have the right to:</p>
          <ul>
            <li>
              <span>
                {" "}
                <GreenRightArrow />
              </span>
              Access, correct, or delete your personal information.
            </li>
            <li>
              <span>
                <GreenRightArrow />{" "}
              </span>
              Opt out of marketing communications.
            </li>
            <li>
              <span>
                <GreenRightArrow />{" "}
              </span>
              Disable cookies in your browser settings.
            </li>
          </ul>
          <div className="tp-fun-fact-btn">
            <Link className="tp-btn" href="mailto:@beamennell@gmail.com">
              Tell us How Can We Help
            </Link>
          </div>
        </div>
      </div>
      <FooterThree />
    </Wrapper>
  );
};

export default index;
