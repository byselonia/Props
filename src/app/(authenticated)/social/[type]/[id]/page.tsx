'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

type Message = {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
};

type ChatProps = {
  params: {
    type: 'friend' | 'group';
    id: string;
  };
};

export default function ChatPage({ params }: ChatProps) {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatInfo, setChatInfo] = useState<{ name: string; members?: number } | null>(null);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    if (params.type === 'friend') {
      setChatInfo({ name: 'Mike Johnson' }); // This would be fetched based on ID
      setMessages([
        { id: 1, sender: 'Mike Johnson', content: 'Hey, how are you?', timestamp: '10:30 AM', isOwn: false },
        { id: 2, sender: 'You', content: 'I\'m good, thanks! How about you?', timestamp: '10:31 AM', isOwn: true },
        { id: 3, sender: 'Mike Johnson', content: 'Doing great! Want to join our game tonight?', timestamp: '10:32 AM', isOwn: false },
      ]);
    } else {
      setChatInfo({ name: 'Gaming Squad', members: 5 }); // This would be fetched based on ID
      setMessages([
        { id: 1, sender: 'Mike Johnson', content: 'Anyone up for a game?', timestamp: '10:30 AM', isOwn: false },
        { id: 2, sender: 'Sarah Smith', content: 'I\'m in!', timestamp: '10:31 AM', isOwn: false },
        { id: 3, sender: 'You', content: 'Count me in too!', timestamp: '10:32 AM', isOwn: true },
      ]);
    }
  }, [params.type, params.id]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: 'You',
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true,
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 p-4 border-b border-gray-800 flex items-center gap-4 bg-gray-900 z-10">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-800 rounded-lg"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-xl font-semibold">{chatInfo?.name}</h1>
          {params.type === 'group' && (
            <p className="text-sm text-gray-400">{chatInfo?.members} members</p>
          )}
        </div>
      </div>

      {/* Messages - With padding for fixed header and input */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-[72px] mb-[72px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                msg.isOwn
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-white'
              }`}
            >
              {!msg.isOwn && (
                <div className="text-sm font-medium mb-1">{msg.sender}</div>
              )}
              <div className="text-sm">{msg.content}</div>
              <div className="text-xs text-gray-500 mt-1">{msg.timestamp}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-gray-900 z-10">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={handleSendMessage}
            className="bg-white text-black p-2 rounded-lg hover:bg-gray-200"
          >
            <PaperAirplaneIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
} 