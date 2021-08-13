
import Header from "../components/common/drawermenu";
import { CvDetails } from "../components/cvdetails";
import { MainHeader } from "../components/mainheader";
import Head from "next/head";
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
  const [isOpened, toggleDrawer] = useState(width > 767 ? true : false);
  const setDrawerStatus = (status) => {
    toggleDrawer(status);
  }
  useEffect(() => {
    toggleDrawer(width > 767 ? true : false)
  }, [width])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header isOpened={isOpened} setDrawerStatus={setDrawerStatus} />
      <MainHeader isOpened={isOpened} setDrawerStatus={setDrawerStatus} />
      <CvDetails />
    </>
  )
}
