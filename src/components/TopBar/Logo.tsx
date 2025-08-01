// src/components/TopBar/Logo.tsx

import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image src="/logo.svg" alt="MobiXpress Logo" width={120} height={40} />
    </div>
  );
}
