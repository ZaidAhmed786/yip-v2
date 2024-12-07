import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import PostboxArea from "./postbox-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer";

const Blog = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="About Us" page_title="aboutus" />

        <div style={{ width: "50%", margin: "20vh auto", textAlign: "left" }}>
          <h1> Lightning-Fast Internet:</h1>

          <p
            style={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: 2,
              color: "#838383",
              marginBottom: "28px",
            }}
          >
            Stay ahead of the curve with our high-speed Internet, backed by
            robust network infrastructure for seamless browsing, streaming, and
            downloading.
          </p>

          <h1>High-Quality Cable Services: </h1>
          <p
            style={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: 2,
              color: "#838383",
              marginBottom: "28px",
            }}
          >
            Enjoy uninterrupted entertainment with our extensive range of
            channels and crystal-clear picture quality, thanks to our expert
            cable installation team.
          </p>

          <h1>Tailored Phone Plans: </h1>
          <p
            style={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: 2,
              color: "#838383",
              marginBottom: "28px",
            }}
          >
            Customize your communication experience with flexible phone plans
            tailored to your specific needs, offering unlimited calls,
            international coverage, and advanced features.
          </p>

          <h1>Dedicated Support: </h1>
          <p
            style={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: 2,
              color: "#838383",
              marginBottom: "28px",
            }}
          >
            Count on our dedicated customer support team to assist you every
            step of the way, ensuring prompt resolution of inquiries and issues.
          </p>

          <h1>Nationwide Coverage:</h1>
          <p
            style={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: 2,
              color: "#838383",
              marginBottom: "28px",
            }}
          >
            Wherever you are in the United States, we've got you covered with
            high-quality connectivity in urban centers and rural areas alike.
          </p>
        </div>
      </main>
      <FooterThree />
    </>
  );
};

export default Blog;
