// src/components/TopBar/TopBar.tsx

import Logo from './Logo';
import SearchBar from './SearchBar';
import FilterCategories from './FilterCategories';
import LoginButton from './LoginButton';

export default function TopBar() {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <Logo />
      <SearchBar />
      <FilterCategories />
      <LoginButton />
    </div>
  );
}
