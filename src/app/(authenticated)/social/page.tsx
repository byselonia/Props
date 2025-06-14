'use client';

import { useState } from 'react';
import { UserPlusIcon, PlusIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

type Friend = {
  id: number;
  name: string;
  lastActive: string;
  hasUnread: boolean;
};

type Group = {
  id: number;
  name: string;
  members: number;
  hasUnread: boolean;
};

export default function SocialPage() {
  const [activeTab, setActiveTab] = useState<'friends' | 'groups'>('friends');
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const friends: Friend[] = [
    { id: 1, name: "Mike Johnson", lastActive: "2m ago", hasUnread: true },
    { id: 2, name: "Sarah Smith", lastActive: "1h ago", hasUnread: false },
    { id: 3, name: "John Davis", lastActive: "5m ago", hasUnread: true },
  ];

  const groups: Group[] = [
    { id: 1, name: "Gaming Squad", members: 5, hasUnread: true },
    { id: 2, name: "Fantasy League", members: 8, hasUnread: false },
    { id: 3, name: "Betting Group", members: 4, hasUnread: true },
  ];

  const handleSendMessage = () => {
    if (message.trim() && (selectedFriend || selectedGroup)) {
      // Handle sending message
      setMessage('');
    }
  };

  const handleSelectFriend = (friend: Friend) => {
    friend.hasUnread = false;
    router.push(`/social/friend/${friend.id}`);
  };

  const handleSelectGroup = (group: Group) => {
    group.hasUnread = false;
    router.push(`/social/group/${group.id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Main Navigation Tabs */}
      <div className="flex border-b border-gray-800">
        <button
          onClick={() => {
            setActiveTab('friends');
            setSelectedFriend(null);
            setSelectedGroup(null);
          }}
          className={`flex-1 py-4 px-4 text-center ${
            activeTab === 'friends' ? 'text-white border-b-2 border-white' : 'text-gray-400'
          }`}
        >
          Friends
        </button>
        <button
          onClick={() => {
            setActiveTab('groups');
            setSelectedFriend(null);
            setSelectedGroup(null);
          }}
          className={`flex-1 py-4 px-4 text-center ${
            activeTab === 'groups' ? 'text-white border-b-2 border-white' : 'text-gray-400'
          }`}
        >
          Groups
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'friends' && (
          <div className="min-h-full">
            {/* Action Buttons - Centered and Full Width */}
            <div className="p-4 border-b border-gray-800">
              <div className="max-w-2xl mx-auto space-y-2">
                <button className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 px-4 rounded-lg hover:bg-gray-200">
                  <UserPlusIcon className="w-5 h-5" />
                  Add Friend
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-700">
                  <PlusIcon className="w-5 h-5" />
                  Invite Friends
                </button>
              </div>
            </div>

            {/* Friends List - Full Width */}
            <div className="p-4">
              <div className="max-w-2xl mx-auto space-y-2">
                {friends.map((friend) => (
                  <button
                    key={friend.id}
                    onClick={() => handleSelectFriend(friend)}
                    className={`w-full p-4 rounded-lg flex items-center gap-3 ${
                      selectedFriend?.id === friend.id ? 'bg-gray-800' : 'hover:bg-gray-800'
                    }`}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-lg">
                        {friend.name.charAt(0)}
                      </div>
                      {friend.hasUnread && (
                        <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-orange-500 border-2 border-gray-900" />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-lg">{friend.name}</div>
                      <div className="text-sm text-gray-400">{friend.lastActive}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'groups' && (
          <div className="min-h-full">
            {/* Action Button - Centered and Full Width */}
            <div className="p-4 border-b border-gray-800">
              <div className="max-w-2xl mx-auto">
                <button className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 px-4 rounded-lg hover:bg-gray-200">
                  <UserGroupIcon className="w-5 h-5" />
                  Create Group
                </button>
              </div>
            </div>

            {/* Groups List - Full Width */}
            <div className="p-4">
              <div className="max-w-2xl mx-auto space-y-2">
                {groups.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => handleSelectGroup(group)}
                    className={`w-full p-4 rounded-lg flex items-center gap-3 ${
                      selectedGroup?.id === group.id ? 'bg-gray-800' : 'hover:bg-gray-800'
                    }`}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-lg">
                        {group.name.charAt(0)}
                      </div>
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-900 ${
                        group.hasUnread ? 'bg-orange-500' : 'bg-gray-500'
                      }`} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-lg">{group.name}</div>
                      <div className="text-sm text-gray-400">{group.members} members</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
