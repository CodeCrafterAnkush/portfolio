import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import {motion} from "motion/react"

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20 mb-10">
      <div className="text-center">
        <h1 className="text-2xl  md:text-4xl ">AKDev</h1>
        {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-36 mx-auto mb-2 " /> */}
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6 " />
          ankushstapute2005@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-around border-t border-b border-gray-400 mx-[10%] mt-12 py-6 ">
        {/* to write copyright symbol simpaly press 'alt + 0169' then release alt key   */}
        <p> © 2025 AKDev. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 ">
          <motion.li
           whileHover={{scale:1.1}}
        transition={{duration:0.3}} 
          className="border-2 border-gray-400 p-4 rounded-full">
            <a target="_blank" href="https://github.com/CodeCrafterAnkush">
              <BsGithub />
            </a>
            {/* target='_blank' use to open link in new tab */}
          </motion.li>
          <motion.li 
          whileHover={{scale:1.1}}
        transition={{duration:0.3}} 
          className="border-2 border-gray-400 p-4 rounded-full">
            <a target="_blank" href="https://www.linkedin.com/feed/">
            <FaLinkedin />
            </a>
            {/* target='_blank' use to open link in new tab */}
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
