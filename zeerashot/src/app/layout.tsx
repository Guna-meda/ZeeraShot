import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zeerashot',
  description: 'Zero booze. 100% vibe.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}