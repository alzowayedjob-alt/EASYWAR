export const metadata = { title: "EASYWAR" };

import "../styles/chat-patch.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ background: "#0b1633", margin: 0 }}>{children}</body>
    </html>
  );
}
