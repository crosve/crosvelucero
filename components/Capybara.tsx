"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

function Capybara(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help you learn about Crosve. What would you like to know?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const userMessage: Message = {
        id: Date.now(),
        text: inputValue,
        isBot: false,
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue("");
      const base_url = process.env.NEXT_PUBLIC_BASE_URL!;
      console.log("base url: ", base_url);
      const ENDPOINT = `${base_url}/crosve`;
      console.log("endpoint, ", ENDPOINT);

      try {
        const response = await fetch(ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: inputValue }),
        });

        const data = await response.json();
        console.log(data);
        const llmResponse: Message = {
          id: Date.now() + 1,
          text: data.text,
          isBot: true,
        };
        setMessages((prev) => [...prev, llmResponse]);
      } catch (error) {
        console.log(error);
      }

      //   Simulate bot response
      // setTimeout(() => {
      //   const botResponse: Message = {
      //     id: Date.now() + 1,
      //     text: "Thanks for your question about Crosve! I'd be happy to help you with more information.",
      //     isBot: true,
      //   };
      //   setMessages((prev) => [...prev, botResponse]);
      // }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed right-3 md:right-6 bottom-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-300 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                🦫
              </div>
              <div>
                <h3 className="font-semibold text-sm">Crosve Assistant</h3>
                <p className="text-xs opacity-90">Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 ">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                    message.isBot
                      ? "bg-gray-100 text-gray-800 rounded-bl-md"
                      : "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(e.target.value)
                }
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Capybara with Thought Bubble */}
      <div className="flex items-start gap-2 flex-col animate-bounceOnce">
        {!isOpen && (
          <div
            className="relative bg-white text-black px-4 py-2 md:w-full w-24 text-wrap rounded-xl shadow-md text-sm border border-gray-300
                        before:absolute before:content-[''] before:-bottom-2 before:left-4 before:w-3 before:h-3 
                        before:bg-white before:rounded-full animate-pulse"
          >
            Ask me anything about Crosve!
          </div>
        )}

        {/* Capybara Image */}
        <div className="relative">
          <Image
            className="cursor-pointer hover:scale-110 transition-transform duration-200 left-10"
            src="/capybara.png"
            alt="capybara"
            layout="responsive"
            quality={100}
            width={100}
            height={100}
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Capybara;
