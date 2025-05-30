"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, ChartBarIcon, PlusCircleIcon, UserGroupIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Navigation() {
  const pathname = usePathname();

  const tabs = [
    { name: "Home", href: "/home", icon: HomeIcon },
    { name: "Market", href: "/market", icon: ChartBarIcon },
    { name: "Create", href: "/create", icon: PlusCircleIcon },
    { name: "Social", href: "/social", icon: UserGroupIcon },
    { name: "Profile", href: "/profile", icon: UserIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`flex flex-col items-center justify-center flex-1 h-full ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <tab.icon className="h-6 w-6" />
                <span className="text-xs mt-1">{tab.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 