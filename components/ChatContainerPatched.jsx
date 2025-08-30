"use client";
import ChatHeaderPatched from "@/components/ChatHeaderPatched";
import ChatMessagesPatched from "@/components/ChatMessagesPatched";
import ChatComposerPatched from "@/components/ChatComposerPatched";
import { useState } from "react";

export default function ChatContainerPatched({ initialMessages = [] }){
  const [messages, setMessages] = useState(initialMessages);
  const [sending, setSending] = useState(false);

  const onSend = async (val)=>{
    setMessages((m)=>[...m, { role: "user", content: val }]);
    setSending(true);
    try {
      // TODO: Replace with your API call
      const reply = "تم استقبال الرسالة (واجهة فقط).";
      setMessages((m)=>[...m, { role: "assistant", content: reply }]);
    } catch (e){
      setMessages((m)=>[...m, { role: "assistant", content: "حدث خطأ. حاول مرة أخرى." }]);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="px-3 py-4">
      <section className="chat-shell">
        <ChatHeaderPatched />
        <ChatMessagesPatched messages={messages} />
        <ChatComposerPatched onSend={onSend} sending={sending} />
      </section>
    </main>
  );
}
