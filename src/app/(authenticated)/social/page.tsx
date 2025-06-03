"use client";

import { useState } from "react";
import { PlusIcon, UserPlusIcon, ChatBubbleLeftRightIcon, UserGroupIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function SocialPage() {
  const [activeTab, setActiveTab] = useState<'friends' | 'chats'>('friends');
  const [selectedFriend, setSelectedFriend] = useState<{ id: number; name: string } | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<{ id: number; name: string; members: number } | null>(null);

  // Mock data - will be replaced with real data later
  const friends = [
    { id: 1, name: "John Doe", status: "online", lastSeen: "2m ago" },
    { id: 2, name: "Jane Smith", status: "offline", lastSeen: "1h ago" },
    { id: 3, name: "Mike Johnson", status: "online", lastSeen: "5m ago" },
  ];

  const groupChats = [
    { id: 1, name: "Gaming Squad", members: 5, lastMessage: "Mike: Anyone up for a game?", time: "1h ago" },
    { id: 2, name: "Fantasy League", members: 8, lastMessage: "John: Who's winning this week?", time: "2h ago" },
    { id: 3, name: "Betting Group", members: 4, lastMessage: "Jane: New bet posted!", time: "30m ago" },
  ];

  const handleFriendSelect = (friend: { id: number; name: string }) => {
    setSelectedFriend(friend);
    setSelectedGroup(null);
  };

  const handleGroupSelect = (group: { id: number; name: string; members: number }) => {
    setSelectedGroup(group);
    setSelectedFriend(null);
  };

  const handleBack = () => {
    setSelectedFriend(null);
    setSelectedGroup(null);
  };

  if (selectedFriend) {
    return (
      <div className="h-screen flex flex-col bg-gray-900">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-800 flex items-center">
          <button
            onClick={handleBack}
            className="mr-4 p-2 hover:bg-gray-800 rounded-full"
          >
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
          <h2 className="text-xl font-semibold text-white flex-1 text-center">
            {selectedFriend.name}
          </h2>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {/* Placeholder for messages */}
            <p className="text-gray-400 text-center">No messages yet</p>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (selectedGroup) {
    return (
      <div className="h-screen flex flex-col bg-gray-900">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-800 flex items-center">
          <button
            onClick={handleBack}
            className="mr-4 p-2 hover:bg-gray-800 rounded-full"
          >
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
          <div className="flex-1 text-center">
            <h2 className="text-xl font-semibold text-white">{selectedGroup.name}</h2>
            <p className="text-sm text-gray-400">{selectedGroup.members} members</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {/* Placeholder for messages */}
            <p className="text-gray-400 text-center">No messages yet</p>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      {/* Tabs */}
      <div className="flex border-b border-gray-800">
        <button
          onClick={() => setActiveTab('friends')}
          className={`flex-1 py-4 px-4 text-center ${
            activeTab === 'friends' ? 'text-white border-b-2 border-white' : 'text-gray-400'
          }`}
        >
          Friends
        </button>
        <button
          onClick={() => setActiveTab('chats')}
          className={`flex-1 py-4 px-4 text-center ${
            activeTab === 'chats' ? 'text-white border-b-2 border-white' : 'text-gray-400'
          }`}
        >
          Group Chats
        </button>
      </div>

      {/* Content based on active tab */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'friends' ? (
          <div className="p-4">
            {/* Add Friend Button */}
            <button className="w-full mb-4 flex items-center justify-center gap-2 bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200">
              <UserPlusIcon className="w-5 h-5" />
              Add Friend
            </button>

            {/* Invite Friends Button */}
            <button className="w-full mb-4 flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
              <PlusIcon className="w-5 h-5" />
              Invite Friends
            </button>

            {/* Friends List */}
            <div className="space-y-2">
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  onClick={() => handleFriendSelect(friend)}
                  className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${friend.status === 'online' ? 'bg-green-500' : 'bg-gray-500'}`} />
                    <span className="text-white">{friend.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{friend.lastSeen}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-4">
            {/* New Group Chat Button */}
            <button className="w-full mb-4 flex items-center justify-center gap-2 bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200">
              <UserGroupIcon className="w-5 h-5" />
              Create Group Chat
            </button>

            {/* Group Chats List */}
            <div className="space-y-2">
              {groupChats.map((group) => (
                <div
                  key={group.id}
                  onClick={() => handleGroupSelect(group)}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-white font-medium">{group.name}</span>
                      <p className="text-gray-400 text-sm">{group.members} members</p>
                    </div>
                    <span className="text-gray-400 text-sm">{group.time}</span>
                  </div>
                  <p className="text-gray-400 text-sm truncate mt-1">{group.lastMessage}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 