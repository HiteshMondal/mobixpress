// src/components/Footer/FooterLinks.tsx

import Link from 'next/link';

export default function FooterLinks() {
  return (
    <ul className="space-y-2 mt-4 md:mt-0">
      <li><Link href="/about-us">About Us</Link></li>
      <li><Link href="/contact">Contact Us</Link></li>
      <li><Link href="/careers">Careers</Link></li>
      <li><Link href="/terms">Terms & Conditions</Link></li>
    </ul>
  );
}
