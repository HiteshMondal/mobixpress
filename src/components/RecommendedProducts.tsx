// src/components/RecommendedProducts.tsx

export default function RecommendedProducts() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Recommended For You</h2>
      {/* Map over your product data here */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border p-4">Product A</div>
        <div className="border p-4">Product B</div>
      </div>
    </section>
  );
}
