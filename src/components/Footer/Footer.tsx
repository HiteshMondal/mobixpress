// src/components/Footer/Footer.tsx

import FooterLogo from './FooterLogo';
import AboutText from './AboutText';
import FooterLinks from './FooterLinks';
import LocateUs from './LocateUs';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="flex flex-col md:flex-row justify-between">
        <FooterLogo />
        <AboutText />
        <FooterLinks />
        <LocateUs />
      </div>
    </footer>
  );
}
