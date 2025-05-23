import HomeBlogFeature from './blogs/HomeBlogFeature';
import ProductsSection from '@/components/ProductsSection';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import ProductBannerSlider from '@/components/ProductBannerSlider';
import TestimonialsSection from '@/components/TestimonialsSection';
import InteractiveMap from '@/components/InteractiveMap';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function Home() {
  return (
    <main>
      <ProductBannerSlider />

      <ProductsSection limit={10} showViewAll={false} />

      <YouTubeEmbed />

      <HomeBlogFeature />

      <InteractiveMap />

      <TestimonialsSection />

      <NewsletterSubscription />

    </main>
  );
}
