import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    home_icon: <HomeIcon />,
    title: "Home",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    home_icon: <HomeIcon />,
    title: "Our services",
    link: "/",
    active: "",
    sub_menus: [ 
      { link: "/cabletv", title: "Cable TV" },
      { link: "/internet", title: "Internet" }, 
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "About Us",
    link: "/aboutus",
    active: "",
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact Us",
    link: "/contact",
    active: "",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    home_icon: <HomeIcon />,
    title: "Providers",
    link: "/",
    active: "",
    sub_menus: [ 
      { link: "/spectrum", title: "Spectrum" },
      { link: "/verizon", title: "Verizon" }, 
      // { link: "/xfinity", title: "Xfinity" }, 
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: true,
    home_icon: <HomeIcon />,
    title: "Policies",
    link: "/",
    active: "",
    sub_menus: [ 
      { link: "/disclaimer", title: "Disclaimer" },
      { link: "/privacypolicy", title: "Privacy Policy" }, 
      { link: "/termsCondition", title: "Terms Of Services" },
      { link: "/refundPolicy", title: "Refund Policy" }, 
    ],
  },
];
export default menu_data;
