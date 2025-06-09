"use client";

import { useState, useEffect } from "react";
import { CameraIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [showBalanceOptions, setShowBalanceOptions] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setUsername(session.user.username || "");
      setFirstName(session.user.firstName || "");
    }
  }, [session]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement profile update logic
    console.log({ username, firstName, profileImage });
  };

  const handleAddMoney = (amount: number) => {
    // TODO: Implement add money logic
    console.log(`Adding $${amount}`);
    setShowBalanceOptions(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Photo Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gray-800 overflow-hidden">
                {profileImage ? (
                  <Image
                    src={profileImage}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <CameraIcon className="w-12 h-12 text-gray-600" />
                  </div>
                )}
              </div>
              <label
                htmlFor="photo-upload"
                className="absolute bottom-0 right-0 bg-white text-black p-2 rounded-full cursor-pointer hover:bg-gray-200"
              >
                <CameraIcon className="w-5 h-5" />
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <p className="text-sm text-gray-400">Click the camera icon to upload a photo</p>
          </div>

          {/* First Name Field */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your first name"
            />
          </div>

          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your username"
            />
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