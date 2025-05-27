import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">Props</h1>
        <p className="text-xl text-gray-600">Wanna Bet?</p>
      </div>
      
      <div className="flex space-x-4 mb-8">
        <Link 
          href="/login" 
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Log In
        </Link>
        <Link 
          href="/register" 
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </main>
  );
} 