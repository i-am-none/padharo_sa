import { Navigation } from "@/features/marketing/navbar";

export default function CommerceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
