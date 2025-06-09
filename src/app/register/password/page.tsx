import { Suspense } from "react";
import PasswordForm from "./PasswordForm";

export const dynamic = 'force-dynamic';

// Removed generateStaticParams as it conflicts with "use client"
// export async function generateStaticParams() {
//   return [];
// }

// Loading component
function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-white text-xl">Loading...</div>
    </div>
  );
}

// Main page component (Server Component)
export default function CreateUsernameAndPasswordPage() {
  return (
    <Suspense fallback={<Loading />}>
      <PasswordForm />
    </Suspense>
  );
} 