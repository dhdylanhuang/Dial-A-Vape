'use client'
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import NewsLetter from "@/components/NewsLetter";
import HomeShopping from "@/components/HomeShopping";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProducts />
        <HomeShopping />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
