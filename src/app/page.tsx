import Advertisement from '@/components/Advertisement';
import TrendingProducts from '@/components/TrendingProducts';
import RecommendedProducts from '@/components/RecommendedProducts';

export default function HomePage() {
  return (
    <main className="flex flex-col gap-16 px-4 md:px-8 max-w-7xl mx-auto py-12">
      {/* Top Advertisement */}
      <Advertisement />

      {/* Trending Products Section */}
      <section className="flex flex-col gap-6 bg-white rounded-lg shadow p-6">
        <h2 className="text-3xl font-bold border-b pb-2">🔥 Trending Products</h2>
        <TrendingProducts />
      </section>

      {/* Middle Advertisement */}
      <Advertisement />

      {/* Recommended Section */}
      <section className="flex flex-col gap-6 bg-white rounded-lg shadow p-6">
        <h2 className="text-3xl font-bold border-b pb-2">🎯 Recommended For You</h2>
        <RecommendedProducts />
      </section>

      {/* Bottom Advertisement */}
      <Advertisement />
    </main>
  );
}
