import HeroSection from '@/components/HeroSection';
import BannerSection from '@/components/BannerSection';
import ProductSection from '@/components/ProductSection';
import WhyGhalwaSection from '@/components/WhyGhalwaSection';
import { Metadata } from 'next';
import FeaturedProduct from '@/components/FeaturedProduct';

export const metadata: Metadata = {
  title: "Ghalwa | Home",
  description: "Ghalwa chai seller",
};

export default function Home() {
  return (
    <main>
      <HeroSection />

      <BannerSection />

      <WhyGhalwaSection />

      <FeaturedProduct />

      {/* <FeaturesSection /> */}

      {/* <VideoSection /> */}

      <ProductSection />
    </main>
  );
}
