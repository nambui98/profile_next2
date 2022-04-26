import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { T } from "react-polyglot-hooks";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, item, toggle }) => {
  const style = { border: `2px solid ${colors[i]}` };
  console.log(toggle);
  return (
    <motion.li
      className="link"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}

    >
      {
        item.path === "/https://web3-blog.netlify.app/" ?
          <a
            className="text-placeholder dark:text-white"
            style={style}
            href="https://web3-blog.netlify.app/"
            target="_blank" rel="noreferrer">
            <T phrase={item.name} />
          </a> : item.name === "nam bv" ? <div className="wrap-avatar dark:wrap-avatar-dark">
            <div className="avatar">
              <img src={item.path} alt="" />
            </div>
          </div> :

            <Link to={item.path} onClick={toggle}><div className="text-placeholder dark:text-white" style={style}><T phrase={item.name} /></div></Link>

      }
    </motion.li>
  );
};
