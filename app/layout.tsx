import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const metadata = {
  title: "Carlonow",
  description: "Car Marketplace",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {/* Full-width wrapper */}
        <div className="full-width-wrapper">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}

