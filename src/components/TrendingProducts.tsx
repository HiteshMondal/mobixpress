// src/components/TrendingProducts.tsx

export default function TrendingProducts() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Trending Products</h2>
      {/* Map over your product data here */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Example product */}
        <div className="border p-4">Product 1</div>
        <div className="border p-4">Product 2</div>
      </div>
    </section>
  );
}
