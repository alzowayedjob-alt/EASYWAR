import Plus from "@/components/icons/Plus";

export default function ChatHeaderPatched(){
  return (
    <header className="flex items-center justify-between gap-2 p-3">
      <div className="flex items-center gap-2">
        <button className="btn-soft inline-flex items-center gap-2" aria-label="قائمة الأدوات">
          <Plus /> أدوات
        </button>
      </div>
      <div className="text-sm opacity-70">Chat — EASYWAR</div>
    </header>
  );
}
