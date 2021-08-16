
import Header from "../components/common/DrawerMenu";
import { About } from "../components/About";
import { MainHeader } from "../components/MainHeader";
import { Resume } from "../components/Resume";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import Head from "next/head";
import sassStyles from '../styles/Home.module.scss';
import "antd/dist/antd.css";
import { useState, useLayoutEffect, useEffect } from "react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


export default function Home() {
  const [width, height] = useWindowSize();
  const [menuColor, setMenuColor] = useState("#fff");
  const [isOpened, toggleDrawer] = useState(width > 767 ? true : false);
  const setDrawerStatus = (status) => {
    toggleDrawer(status);
  }
  useEffect(() => {
    toggleDrawer(width > 930 ? true : false)
  }, [width])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header isOpened={isOpened} setDrawerStatus={setDrawerStatus} />
      <MainHeader isOpened={isOpened} setDrawerStatus={setDrawerStatus} menuColor={menuColor} />
      <div className={isOpened ? sassStyles.indexMargin : ""}>
        <About setMenuColor={setMenuColor} menuColor={menuColor} />
        <Resume />
        <Services />
        <Contact />
      </div>
    </>
  )
}
