import { Inter } from "@next/font/google";
import { AppConstant } from "../constant/AppConstant";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import TestDrive from "../components/TestDrive/TestDrive";
import Clients from "../components/Clients/Clients";
import Stats from "../components/Stats/Stats";
import Blog from "../components/Blog/Blog";
import WhyUs from "../components/WhyUs/WhyUs";
import Feed from "../components/Feed/Feed";
import VisitUs from "../components/VisitUs/VisitUs";
import Back2Top from "../components/Back2Top/Back2Top";
import Footer from "../components/Footer/Footer";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Head from "next/head";
import HeaderTop from "../components/HeaderTop/HeaderTop";
import CookiePopUp from "../components/CookiePopup/CookiePopUp";
import BottomBar from "../components/BottomBar/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      <CookiePopUp />
      <HeaderTop />
      <Header />
      <HeroBanner />
      <Services />
      <TestDrive />
      <Clients />
      <Stats />
      <Blog />
      <WhyUs />
      <Feed />
      <VisitUs />
      <Back2Top />
      <Footer />
      <BottomBar />
    </>
  );
}
