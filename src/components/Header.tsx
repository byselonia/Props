"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isProfilePage = pathname === "/profile";

  if (isProfilePage) {
    return null;
  }

  const getSearchPlaceholder = () => {
    // Remove any trailing slashes for consistent matching
    const cleanPath = pathname.replace(/\/$/, '');
    
    if (cleanPath === "/home") return "Search Props";
    if (cleanPath === "/market") return "Search Market";
    if (cleanPath.startsWith("/create")) return "Search Teams, Games, Players";
    if (cleanPath === "/social") return "Search Social";
    return "Search...";
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 px-4 py-2 flex items-center justify-between gap-4">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder={getSearchPlaceholder()}
            className="w-full px-4 py-2 pl-10 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-sm"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>
      <div className="bg-gray-800 px-3 py-1.5 rounded-lg">
        <p className="text-white font-medium text-sm">$1000</p>
      </div>
    </div>
  );
} 