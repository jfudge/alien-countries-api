import React from "react";
import { useTheme } from "next-themes"

import { FC } from "react"
import { GiUfo } from "react-icons/gi";
import { GiAlienBug } from "react-icons/gi";
import { PiAlienDuotone } from "react-icons/pi";
import { RiAliensFill } from "react-icons/ri";
import { GiAlienStare } from "react-icons/gi";
import { PiLightningFill } from "react-icons/pi";

const Hero: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="text1">
        <p className="text-1 text-purple">TAKE US TO  </p>
      </div>
      <div className="text2">
        <p className="text-2 text-purple"> THE HUMANS</p>
      </div>
      <p className="text-3 text-purple">We come in peace. Let us search for the humans.</p>

      <div className="background">
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
        <span><GiAlienStare className="text-alien dark:text-yellow icons" /></span>
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
        <span><GiAlienBug className="text-alien dark:text-yellow icons" /></span>
        <span><GiAlienBug className="text-alien dark:text-yellow icons" /></span>
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>

        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
        <span><GiUfo className="text-alien dark:text-yellow icons" /></span>
      </div>

    </div>

  );
};

export default Hero;