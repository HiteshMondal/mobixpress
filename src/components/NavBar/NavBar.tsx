// src/components/NavBar/NavBar.tsx

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/store">MobiXpress Store</Link></li>
        <li><Link href="/my-orders">My Orders</Link></li>
        <li><Link href="/exchange">Exchange</Link></li>
        <li><Link href="/accessories">Accessories</Link></li>
      </ul>
    </nav>
  );
}
