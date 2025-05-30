"use client";

import Navigation from "@/components/Navigation";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pb-16">
        {children}
      </main>
      <Navigation />
    </div>
  );
} 