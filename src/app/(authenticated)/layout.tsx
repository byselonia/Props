import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Navigation from "@/components/Navigation";

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
      {/* Credits Display */}
      <div className="fixed top-4 right-4 bg-gray-800 px-4 py-2 rounded-lg">
        <p className="text-white font-medium">Credits: 1000</p>
      </div>

      <main className="pb-16">
        {children}
      </main>
      <Navigation />
    </div>
  );
} 