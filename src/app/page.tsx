// src/app/page.tsx

import Advertisement from '@/components/Advertisement';
import TrendingProducts from '@/components/TrendingProducts';
import RecommendedProducts from '@/components/RecommendedProducts';

export default function HomePage() {
  return (
    <>
      <Advertisement />
      <TrendingProducts />
      <Advertisement />
      <RecommendedProducts />
      <Advertisement />
    </>
  );
}
