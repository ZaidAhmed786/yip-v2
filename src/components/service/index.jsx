import React from "react";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer";

const Sevice = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Cable TV" page_title="Cabletv" />
        <div style={{ width: "80%", margin: "20vh auto", textAlign: "left" }}>
          <h1>Cable TV</h1>
          <h1> Your Gateway to Ultimate Entertainment</h1>

          <p
            style={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: 2,
              color: "#838383",
              marginBottom: "28px",
            }}
          >
            Step into a universe of unparalleled viewing pleasure withYourinternetprovider Cable TV Packages. Our meticulously crafted offerings
            redefine television, blending superior quality, bespoke
            customization, and a rich tapestry of over 290+ channels. Here’s why
            our Cable TV experience stands out:
          </p>

          <h1>Tailored Viewing Odyssey:</h1>
          <p
            style={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: 2,
              color: "#838383",
              marginBottom: "28px",
            }}
          >
            We believe every viewer is unique. Our diverse channel lineup caters
            to varied tastes—whether you crave live sports, cinematic
            masterpieces, enlightening documentaries, or delightful children’s
            content.
          </p>

          <h1>Dual Delivery, Uninterrupted Pleasure:</h1>
          <p
            style={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: 2,
              color: "#838383",
              marginBottom: "28px",
            }}
          >
            Yourinternetprovider seamlessly combines satellite and internet
            streaming technologies. Expect crystal-clear imagery and sound,
            ensuring every moment on screen is captivating.
          </p>

          <h1>Empowered Control:</h1>
          <p
            style={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: 2,
              color: "#838383",
              marginBottom: "28px",
            }}
          >
            Personalize your content, schedule recordings, and explore on-demand
            entertainment. Your remote becomes a key to an empowered viewing
            universe.
          </p>

          <h1>Customer-Centric Support:</h1>
          <p
            style={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: 2,
              color: "#838383",
              marginBottom: "28px",
            }}
          >
            Our dedicated team ensures your voice guides our journey. Your
            satisfaction is our destination.
          </p>
        </div>
      </main>
      <FooterThree />
    </>
  );
};

export default Sevice;
