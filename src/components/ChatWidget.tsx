import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi there! I'm SoftSell's virtual assistant. How can I help you today?", isUser: false },
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sample FAQ responses
  const faqResponses: Record<string, string> = {
    'how do i sell my license': 
      "To sell your license, simply fill out our contact form with details about your software. We'll provide a valuation within 24 hours, and if you accept, you'll receive payment within 2 business days.",
    'what types of software do you buy': 
      "We purchase licenses for most major software providers including Microsoft, Adobe, Autodesk, Oracle, Salesforce, Atlassian, and many others. If you're unsure, please submit your license information and we'll let you know.",
    'how much is my license worth': 
      "License values vary based on software type, version, remaining subscription time, and current market demand. On average, we offer 40-75% of the original purchase value for valid licenses. Submit details for a free valuation.",
    'is this legal': 
      "Yes, reselling unused software licenses is completely legal as long as the license agreement allows for transfer. Many major software providers allow license transfers under specific conditions, which our legal team carefully reviews.",
    'how long does it take to get paid': 
      "After accepting our offer, you'll typically receive payment within 2 business days. We offer multiple payment methods including bank transfer, PayPal, and crypto.",
    'is my data secure': 
      "Absolutely. We use enterprise-grade encryption and security protocols to protect all customer data. We never access your systems directly - you only provide the license keys and purchase information."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    const userMessage = { text: inputText, isUser: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    
    // Process response
    setTimeout(() => {
      let botResponse = "I don't have information about that yet. Please contact our support team for more details.";
      
      // Check for FAQ matches (case-insensitive partial match)
      const userTextLower = inputText.toLowerCase();
      for (const [question, answer] of Object.entries(faqResponses)) {
        if (userTextLower.includes(question)) {
          botResponse = answer;
          break;
        }
      }
      
      setMessages((prevMessages) => [
        ...prevMessages, 
        { text: botResponse, isUser: false }
      ]);
    }, 500);
    
    setInputText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Suggested questions
  const suggestedQuestions = [
    "How do I sell my license?",
    "What types of software do you buy?",
    "How much is my license worth?",
    "How long does it take to get paid?"
  ];

  const handleSuggestedQuestion = (question: string) => {
    setInputText(question);
    setMessages((prevMessages) => [...prevMessages, { text: question, isUser: true }]);
    
    // Process response
    setTimeout(() => {
      const questionLower = question.toLowerCase();
      let botResponse = "I don't have information about that yet. Please contact our support team for more details.";
      
      // Find matching FAQ
      for (const [key, answer] of Object.entries(faqResponses)) {
        if (questionLower.includes(key)) {
          botResponse = answer;
          break;
        }
      }
      
      setMessages((prevMessages) => [
        ...prevMessages, 
        { text: botResponse, isUser: false }
      ]);
    }, 500);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat window */}
      <div
        className={`fixed inset-0 z-50 md:inset-auto md:bottom-6 md:right-6 md:w-96 md:h-[600px] bg-white dark:bg-gray-900 md:rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform ${
          isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
              <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">SoftSell Assistant</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Typically replies instantly</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.isUser ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  message.isUser
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                } max-w-[80%]`}
              >
                <p>{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested questions */}
        {messages.length === 1 && (
          <div className="px-4 pb-2">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Frequently asked questions:
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t dark:border-gray-700">
          <div className="flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 dark:border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className={`p-2 rounded-r-md ${
                inputText.trim()
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              }`}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default ChatWidget;