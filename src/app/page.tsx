import HeroSection from '@/components/HeroSection';
import BannerSection from '@/components/BannerSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductSection from '@/components/ProductSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ghalwa | Home",
  description: "Ghalwa chai seller",
};

export default function Home() {
  return (
    <main>

      <HeroSection />

      <BannerSection />

      <FeaturesSection />
      
      {/* <VideoSection /> */}

      <ProductSection />

    </main>
  );
}
