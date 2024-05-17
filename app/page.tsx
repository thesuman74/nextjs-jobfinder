import HeroSection from "@/components/ui/heroSection";
import {
  PopularCategories,
  PopularSection,
} from "@/components/ui/popularSection";
import FeaturedJob from "@/components/Home/Featured/featuredJob";
import Divider from "@/components/ui/divider";
import TopCompanies from "@/components/Home/TopCompanies/topCompanies";

export default function Home() {
  return (
    <div className=" container ">
      <HeroSection />
      <Divider />
      <PopularSection />
      <PopularCategories />
      <Divider />

      <FeaturedJob />
      <Divider />

      <TopCompanies />
      <Divider />

      {/* <Button variant="outline">Button</Button> */}
    </div>
  );
}
