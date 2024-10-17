'use client'
import React from "react"; // Import useState
import TopNav from "./components/TopNav";

import HeroSection from "./components/HeroSection";

import localFont from "next/font/local";
import Introduction from "./components/Introduction";
import Featured from "./components/Featured";
import Services from "./components/Services";
import Story from "./components/Story";
import Review from "./components/Review";
import SkincareSection from "./components/SkincareSection";
import ProductShowcase from "./components/ProductShowcase";
import AvailableProducts from "./components/AvailableProducts";
import BlogSection from "./components/BlogSection";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";


const PrimaryFont = localFont({
  src: "../app/fonts/Cormorant-VariableFont_wght.woff",
});
const SecondaryFont = localFont({
  src: "../app/fonts/Montserrat-VariableFont_wght.woff",
});


const Page = () => {

  return (
    <div className="flex flex-col">
      <TopNav currentPage="Home" />
      <HeroSection PrimaryFont={PrimaryFont} SecondaryFont={SecondaryFont}/>
      <Introduction/>
      <Featured/>
      <Services/>
      <Story/>
      <Review/>
      <SkincareSection/>
      <ProductShowcase/>
      <AvailableProducts/>
      <BlogSection/>
      <SubscribeSection/>
      <Footer/>

      
    </div>
  );
};

export default Page;
