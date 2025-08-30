import Image from "next/image";

export default function SidebarPatched({ children, userCard }){
  return (
    <aside className="relative h-screen w-[300px] border-l border-[#243b6b] bg-[#0b1633]">
      <div className="sidebar-header">
        <Image src="/brand/logo.png" alt="EASY WAR" width={28} height={28} />
      </div>
      <div className="h-[calc(100%-120px)] overflow-auto">
        {children}
      </div>
      <div className="sidebar-user-stick">
        {userCard}
      </div>
    </aside>
  );
}
