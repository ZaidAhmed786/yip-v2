import Link from "next/link";
import React, { useState } from "react";
// import { motion } from "framer-motion";
import { useRouter } from "next/router";

//data
import states from "../../../data/state.json";

import useDimensions from "../../../hooks/use-dimensions";
import NavLinkDropdown from "./NavLinkDropdown";
import Img from "../../utils/image/Img";
// style
import styles from "./header.module.css";
import OfferBanner from "../../offer-banner/OfferBanner";

const wrapperVariants = {
  default: {
    opacity: 0,
    height: 0,
    transition: {
      delay: 0.3,
      ease: "easeInOut",
    },
  },
  move: {
    opacity: 1,
    height: "50.625vh",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const mobileVariants = {
  default: {
    height: 0,
    opacity: 0,
    zIndex: "-999",
    transition: {
      delay: 0.2,
      ease: "easeInOut",
    },
  },
  move: {
    opacity: 1,
    zIndex: "1",
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const listVarient = {
  default: {
    width: "22px",
    transition: {
      delay: 0.2,
      ease: "easeInOut",
    },
  },
  move: {
    width: 0,
    transition: {
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};
const breakpoint = {
  mobile: 600,
};
const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const [isWrapperOpen, setIsWrapperOpen] = useState(false);
  const router = useRouter();
  const allowRoutes = [
    "/blog",
    "/blog/[slug]",
    "/bandwidth-calculator-tool",
    "/speed-testing-tool",
    "/privacy-policy",
    "/internet-providers-in-your-area",
    "/cable-tv-providers-in-your-area",
    "/phone-services-providers",
    "/state/[name]",
  ];
  const path = router.pathname;
  const isAllow = allowRoutes.includes(path) || path === "/" || path === "/affordable-connectivity-program" ? true : false;

  const bgColor = { background: path == "/blog/[slug]" ? "#fff" : "#cdcecf" };
  const dropdownColor = { background: path == "/blog/[slug]" ? "#fff" : "#d9d9d9" };
  // mobile menu
  const { width } = useDimensions();
  const [isHide, setIsHide] = useState(false);

  const navLinks = [
    {
      text: "Spectrum",
      url: "/spectrum",
    },
    {
      text: "Xfinity",
      url: "/xfinity",
    },
    {
      text: "Frontier",
      url: "/frontier",
    },
    {
      text: "Cox",
      url: "/cox",
    },
    {
      text: "AT&T",
      url: "/att",
    },
    {
      text: "Century Link",
      url: "/centuryLink",
    },
    {
      text: "Optimum",
      url: "/optimum",
    },

    {
      text: "Verizon",
      url: "/verizon",
    },
    {
      text: "Mediacom",
      url: "/",
    },
  ];
  const tools = [
    { text: "Bandwidth Calculator", url: "/bandwidth-calculator-tool" },
    { text: "Speed Testing", url: "/speed-testing-tool" },
  ];

  const services = [
    { text: "Internet", url: "/internet-providers-in-your-area" },
    { text: "Cable", url: "/cable-tv-providers-in-your-area" },
    { text: "Phone", url: "/phone-services-providers" },
  ];

  const state = [
    { text: "California", url: "california" },
    { text: "", url: "" },
  ];

  // Handlers
  const navToggle = () => {
    setIsHide(!isHide);
  };
  if (isAllow) {
    return (
      <> 

        <div></div>
      </>
    );
  }
  return <></>;
};

export default Header;
