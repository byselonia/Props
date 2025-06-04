"use client";

import Navigation from "@/components/Navigation";
import Header from "@/components/Header";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pb-16">
        {children}
      </main>
      <Navigation />
    </div>
  );
} 