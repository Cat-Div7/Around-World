import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <form className="relative min-w-auto md:min-w-md">
      <div className="absolute top-3 left-8 text-[#848484] md:top-4">
        <Search />
      </div>
      <input
        type="text"
        name="search"
        className="h-12 w-full rounded-full bg-white pl-20 shadow transition-all focus:outline-1 focus:outline-blue-600 md:h-14 dark:bg-gray-800"
        placeholder="Search..."
      />
    </form>
  );
};
