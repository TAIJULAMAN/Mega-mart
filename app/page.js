"use client"
import Banner from "@/components/Banner/Banner";
import BestDeals from "@/components/BestDeals/BestDeals";
import Categories from "@/components/Categories/Categories";
import DailyEssentials from "@/components/DailyEssentials/DailyEssentials";
import ElectronicBrands from "@/components/ElectronicBrands/ElectronicBrands";
import TopCategories from "@/components/TopCategories/TopCategories";

export default function Home() {
  return (
    <>
      <Categories />
      <Banner />
      <BestDeals />
      <TopCategories />
      <ElectronicBrands />
      <DailyEssentials />
    </>
  );
}
