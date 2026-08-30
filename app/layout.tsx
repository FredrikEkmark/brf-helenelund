import './globals.css';
import Navbar from '@/components/navbar/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <div className="layout-container">
          <Navbar />
          <div className="content-wrapper">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}