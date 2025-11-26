import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Carlonow",
  description: "Car Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="w-[95%] mx-auto">
          {children}</main>
      </body>
    </html>
  );
}
