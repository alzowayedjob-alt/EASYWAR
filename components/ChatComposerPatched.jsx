"use client";
import { useRef } from "react";
import Plus from "@/components/icons/Plus";
import PaperPlane from "@/components/icons/PaperPlane";

export default function ChatComposerPatched({ onSend, sending=false }){
  const inputRef = useRef(null);
  const autoGrow = (e)=>{
    const t = e.currentTarget;
    t.style.height = "auto";
    const maxH = Math.min(t.scrollHeight, window.innerHeight*0.5);
    t.style.height = maxH + "px";
  };
  const doSend = ()=>{
    const val = inputRef.current?.value?.trim();
    if(!val) return;
    onSend?.(val);
    inputRef.current.value = "";
    inputRef.current.style.height = "auto";
  };

  return (
    <footer className="composer">
      <button className="btn-soft inline-flex items-center gap-2" aria-label="إضافة">
        <Plus /> جديد
      </button>
      <textarea
        ref={inputRef}
        className="chat-input flex-1 message-text"
        rows={1}
        placeholder="اكتب رسالتك…"
        onInput={autoGrow}
        onKeyDown={(e)=>{ if(e.key === "Enter" && !e.shiftKey){ e.preventDefault(); doSend(); } }}
      />
      <button className="btn-soft inline-flex items-center gap-2" onClick={doSend} disabled={sending} aria-label="إرسال">
        <PaperPlane /> إرسال
      </button>
    </footer>
  );
}
