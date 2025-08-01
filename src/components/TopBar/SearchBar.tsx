export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
  );
}
