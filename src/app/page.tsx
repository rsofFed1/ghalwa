import WhatsAppButton from '@/components/WhatsAppButton';
import HomeBlogFeature from './blogs/HomeBlogFeature';
import ProductsSection from '@/components/ProductsSection';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import ProductBannerSlider from '@/components/ProductBannerSlider';
import TestimonialsSection from '@/components/TestimonialsSection';
import TikTokSection from '@/components/TikTokSection';
import InteractiveMap from '@/components/InteractiveMap';

export default function Home() {
  return (
    <main>
      <ProductBannerSlider />

      <ProductsSection limit={10} showViewAll={false} />

      <HomeBlogFeature />

      <InteractiveMap />

      {/* <TikTokSection /> */}

      <TestimonialsSection />

      <NewsletterSubscription />

      <WhatsAppButton />

    </main>
  );
}
