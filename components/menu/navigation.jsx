import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";
import { I18n } from "react-polyglot-hooks";
import en from "../../settings/language/en";
import vn from "../../settings/language/vn";
import { useLanguge } from "../../containers/LanguageContext";
import { Avatar } from "../../assets";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
const phrases = {
  en: en,
  vn: vn,
};
export const Navigation = ({ toggle }) => {
  const { languge } = useLanguge();
  return <I18n locale={languge} phrases={phrases[languge]}>

    <motion.ul className="" variants={variants}>
      {itemIds.map((item, index) => (
        <MenuItem i={index} key={index} item={item} toggle={toggle} />
      ))}

    </motion.ul>
  </I18n>
};

const itemIds = [
  {
    path: "/",
    name: "home"
  },
  {
    path: "/work",
    name: "work"
  },
  {
    path: "/skills",
    name: "skill"
  },
  {
    path: "/https://web3-blog.netlify.app/",
    name: "blog"
  },
  {
    path: "/contact",
    name: "contact"
  },
  {
    path: Avatar,
    name: "nam bv"
  }
];
