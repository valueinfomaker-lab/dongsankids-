export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-[#F8FAFC] min-h-screen">
        {children}
      </body>
    </html>
  );
}
