import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Navigation from "@/components/Navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Search and Balance */}
      <div className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 px-4 py-2 flex items-center justify-between gap-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-sm"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
        <div className="bg-gray-800 px-3 py-1.5 rounded-lg">
          <p className="text-white font-medium text-sm">$1000</p>
        </div>
      </div>

      <main className="pt-16 pb-16">
        {children}
      </main>
      <Navigation />
    </div>
  );
} 