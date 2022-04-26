import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({ toggle }) => {
  return <motion.ul className="" variants={variants}>
    {itemIds.map((item, index) => (
      <MenuItem i={index} key={index} item={item} toggle={toggle} />
    ))}

  </motion.ul>
};

const itemIds = [
  {
    path: "/",
    name: "home"
  },
  {
    path: "/works",
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
    path: "/Logo.jpg",
    name: "nam bv"
  }
];
