import './globals.css';
import SiteChrome from '../components/SiteChrome';

export const metadata = {
  title: 'PREMIUM Auto Parts — USA-sourced spare parts, Nigeria',
  description: 'Genuine, OEM and reputable aftermarket automobile spare parts imported from the USA into Nigeria.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body><SiteChrome>{children}</SiteChrome></body>
    </html>
  );
}
