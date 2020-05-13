import React, { useState, useEffect } from "react";
import { themeBreakpoints } from "../Theme/theme";
import { useMediaQuery } from "react-responsive";
import { MenuMobile } from "./MenuMobile.component";
import { MenuDesktop } from "./MenuDesktop.component";

const { sm, md, lg } = themeBreakpoints;

export const Menu = () => {
  const [isMounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery({ query: `(min-device-width: ${md})` });
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return isMounted && (isDesktop ? <MenuDesktop /> : <MenuMobile />);
};
