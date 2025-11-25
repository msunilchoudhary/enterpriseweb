import React from "react";
import HeroSlider from "../../components/home/HeroSlider.jsx";
import ShopByCategory from "../../components/home/ShopByCategory.jsx";
import AdBanners from "../../components/home/AdBanners.jsx";
import HomeProducts from "../../components/home/HomeProducts.jsx";
import BestSells from "../../components/home/BestSells.jsx";
import TopProducts from "../../components/topProducts/TopProducts.jsx";
import HomeNewsLetter from "../../components/newsLetter/NewsLetter.jsx";

function Home() {
  return (
    <div id="home">
      <HeroSlider />
      <ShopByCategory />
      <AdBanners />
      <HomeProducts />
      <BestSells />
      <TopProducts />
      <HomeNewsLetter />
    </div>
  );
}

export default Home;
