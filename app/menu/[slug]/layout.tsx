export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-white">
      {children}
    </div>
  );
}
