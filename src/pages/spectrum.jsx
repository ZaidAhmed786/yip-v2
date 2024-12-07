import Head from "next/head";
import style from "../components/spectrum/main.module.css";

import Header from "../components/spectrum/Header/Header";
import Section from "../components/spectrum/section1/Section";
import Section2 from "../components/spectrum/Section2/Section2";
import Area from "../components/spectrum/Area/Area";
import Section4 from "../components/spectrum/Section4/Section4";
import Footer from "../components/spectrum/Footer/Footer";
import Popup from "../components/global/popup/Popup";
import Discliamer from "../components/disclaimer/disclaimer";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import FooterThree from "../layout/footers/footer-3";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import HeaderOne from "../layout/headers/header";

export default function Home() {
  return (
    <>
     <Wrapper>
            <SEO pageTitle={"Spectrum"}/>
            <HeaderOne />
            {/* <Breadcrumb top_title="Spectrum" page_title="Spectrum" /> */}
           
      <main className={style.spectrum_wrapper}>
        <Header number="+1(888) 458-6956"/>
        <Section number="+1(888) 458-6956"/>
        <Section2 number="+1(888) 458-6956"/>
        <Area/>
        <Section4/>
        <Discliamer provider="spectrum"/>
        <Footer />
        <Popup
          color="#003057"
          url="/assets/img/spectrum/logo2.png"
          number="1(888) 458-6956"
          logoWidth="200px"
        />
      </main>
      <FooterThree />
        </Wrapper>
      
    </>
  );
}
