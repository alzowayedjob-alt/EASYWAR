"use client";
import { useEffect, useRef, useState } from "react";
import ChevronDown from "@/components/icons/ChevronDown";

export default function ChatMessagesPatched({ messages = [] }){
  const ref = useRef(null);
  const [showJump, setShowJump] = useState(false);

  const scrollToBottom = ()=> ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });

  useEffect(()=>{ scrollToBottom(); }, [messages]);

  useEffect(()=>{
    const el = ref.current;
    if(!el) return;
    const onScroll = ()=>{
      const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
      setShowJump(!atBottom);
    };
    el.addEventListener("scroll", onScroll);
    onScroll();
    return ()=> el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="chat-scroll" ref={ref}>
      <div className="messages">
        {messages.map((m, i)=>(
          <div key={i} className={`row-msg ${m.role}`}>
            <div className="bubble">
              {m.content}
            </div>
          </div>
        ))}
        {messages.length === 0 && (
          <div className="empty-state">ابدأ المحادثة الآن ✨</div>
        )}
      </div>
      {showJump && (
        <button className="jump-down" onClick={scrollToBottom} aria-label="الذهاب لأسفل">
          <ChevronDown />
        </button>
      )}
    </div>
  );
}
