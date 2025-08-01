import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex gap-8 py-4">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/store"
              className="hover:text-yellow-400 transition-colors"
            >
              MobiXpress Store
            </Link>
          </li>
          <li>
            <Link
              href="/my-orders"
              className="hover:text-yellow-400 transition-colors"
            >
              My Orders
            </Link>
          </li>
          <li>
            <Link
              href="/exchange"
              className="hover:text-yellow-400 transition-colors"
            >
              Exchange
            </Link>
          </li>
          <li>
            <Link
              href="/accessories"
              className="hover:text-yellow-400 transition-colors"
            >
              Accessories
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
