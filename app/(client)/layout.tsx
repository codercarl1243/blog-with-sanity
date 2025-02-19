
export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   {/* Navbar */}
   {children}
   {/* Footer */}
   </>
  );
}
