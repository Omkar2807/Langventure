
import ChatbotIframe from "@/components/ChatbotIframe";

const ChatPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Chat with LangBot</h1>
      <ChatbotIframe />
    </div>
  );
};

export default ChatPage;