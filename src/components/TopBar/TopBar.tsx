import Logo from './Logo';
import SearchBar from './SearchBar';
import FilterCategories from './FilterCategories';
import LoginButton from './LoginButton';

export default function TopBar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Search Bar */}
        <div className="w-full md:flex-1 md:mx-4">
          <SearchBar />
        </div>

        {/* Filters & Login */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <FilterCategories />
          <LoginButton />
        </div>
      </div>
    </header>
  );
}
