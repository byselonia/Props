"use client";

import { useState } from "react";
import { PlusIcon, UserPlusIcon, ChatBubbleLeftRightIcon, UserGroupIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function SocialPage() {
  const [activeTab, setActiveTab] = useState<'friends' | 'groups' | 'chats'>('friends');
  const [selectedFriend, setSelectedFriend] = useState<{ id: number; name: string } | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<{ id: number; name: string; members: number } | null>(null);

  // Mock data - will be replaced with real data later
  const friends = [
    { id: 1, name: "John Doe", status: "online", lastSeen: "2m ago" },
    { id: 2, name: "Jane Smith", status: "offline", lastSeen: "1h ago" },
    { id: 3, name: "Mike Johnson", status: "online", lastSeen: "5m ago" },
  ];

  const groups = [
    { id: 1, name: "Gaming Squad", members: 5, lastMessage: "Mike: Anyone up for a game?", time: "1h ago" },
    { id: 2, name: "Fantasy League", members: 8, lastMessage: "John: Who's winning this week?", time: "2h ago" },
    { id: 3, name: "Betting Group", members: 4, lastMessage: "Jane: New bet posted!", time: "30m ago" },
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
          onClick={() => setActiveTab('groups')}
          className={`flex-1 py-4 px-4 text-center ${
            activeTab === 'groups' ? 'text-white border-b-2 border-white' : 'text-gray-400'
          }`}
        >
          Groups
        </button>
        <button
          onClick={() => setActiveTab('chats')}
          className={`flex-1 py-4 px-4 text-center ${
            activeTab === 'chats' ? 'text-white border-b-2 border-white' : 'text-gray-400'
          }`}
        >
          Chats
        </button>
      </div>

      {/* Content based on active tab */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'friends' && (
          <div className="p-4 space-y-4">
            {/* Action Buttons */}
            <div className="flex gap-2 mb-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200">
                <UserPlusIcon className="w-5 h-5" />
                Add Friend
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
                <PlusIcon className="w-5 h-5" />
                Invite Friends
              </button>
            </div>

            {/* Action Button */}
            <div className="mb-4">
              <button className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200">
                <UserGroupIcon className="w-5 h-5" />
                Create Group
              </button>
            </div>

            {friends.map((friend) => (
              <button
                key={friend.id}
                onClick={() => handleFriendSelect(friend)}
                className="w-full flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                  <div>
                    <p className="text-white font-medium">{friend.name}</p>
                    <p className="text-sm text-gray-400">{friend.status}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">{friend.lastSeen}</p>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'groups' && (
          <div className="p-4 space-y-4">
            {/* Action Button */}
            <div className="mb-4">
              <button className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200">
                <UserGroupIcon className="w-5 h-5" />
                Create Group
              </button>
            </div>

            {groups.map((group) => (
              <button
                key={group.id}
                onClick={() => handleGroupSelect(group)}
                className="w-full flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                  <div>
                    <p className="text-white font-medium">{group.name}</p>
                    <p className="text-sm text-gray-400">{group.members} members</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">{group.lastMessage}</p>
                  <p className="text-xs text-gray-500">{group.time}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'chats' && (
          <div className="p-4 space-y-4">
            {groupChats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => handleGroupSelect(chat)}
                className="w-full flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                  <div>
                    <p className="text-white font-medium">{chat.name}</p>
                    <p className="text-sm text-gray-400">{chat.members} members</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">{chat.lastMessage}</p>
                  <p className="text-xs text-gray-500">{chat.time}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 