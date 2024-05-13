import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/ui/header/navbar";
import Footer from "@/components/ui/footer/footer";
import { SearchBar } from "@/components/ui/header/searchbar";
import HeroSection from "@/components/ui/heroSection";

export default function Home() {
  return (
    <div className=" container flex justify-center">
      <HeroSection />
      {/* <Button variant="outline">Button</Button> */}
    </div>
  );
}
