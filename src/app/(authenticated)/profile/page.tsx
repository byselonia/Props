"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [showBalanceOptions, setShowBalanceOptions] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      setUsername(session.user.username || "");
      setFirstName(session.user.firstName || "");
    }
  }, [session]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement profile update logic
    console.log({ username, firstName });
  };

  const handleAddMoney = (amount: number) => {
    // TODO: Implement add money logic
    console.log(`Adding $${amount}`);
    setShowBalanceOptions(false);
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Username Display */}
          <div className="text-center space-y-1">
            <h2 className="text-3xl font-bold">{firstName}</h2>
            <p className="text-gray-400">@{username}</p>
          </div>

          {/* Balance Section */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Balance</h2>
              <button
                onClick={() => setShowBalanceOptions(!showBalanceOptions)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Add Money
              </button>
            </div>
            <p className="text-2xl font-bold">$0.00</p>
            {showBalanceOptions && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleAddMoney(10)}
                  className="bg-white text-black py-2 rounded hover:bg-gray-200"
                >
                  Add $10
                </button>
                <button
                  onClick={() => handleAddMoney(20)}
                  className="bg-white text-black py-2 rounded hover:bg-gray-200"
                >
                  Add $20
                </button>
                <button
                  onClick={() => handleAddMoney(50)}
                  className="bg-white text-black py-2 rounded hover:bg-gray-200"
                >
                  Add $50
                </button>
                <button
                  onClick={() => handleAddMoney(100)}
                  className="bg-white text-black py-2 rounded hover:bg-gray-200"
                >
                  Add $100
                </button>
              </div>
            )}
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
} 