import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
          <Footer />  
      </body>
    </html>
  );
}
