import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/ui/header/navbar";
import Footer from "@/components/ui/footer/footer";
import { SearchBar } from "@/components/ui/header/searchbar";
import HeroSection from "@/components/ui/heroSection";
import {
  PopularCategories,
  PopularSection,
} from "@/components/ui/popularSection";
import FeaturedJob from "@/components/ui/featuredJob";
import Divider from "@/components/ui/divider";

export default function Home() {
  return (
    <div className=" container ">
      <HeroSection />
      <Divider />
      <PopularSection />
      <PopularCategories />
      <Divider />

      <FeaturedJob />

      {/* <Button variant="outline">Button</Button> */}
    </div>
  );
}
