"use client";
import { usePathname } from 'next/navigation';
import { Inter, Poppins, } from "next/font/google";
import "./globals.css";
import Nav from '../components/NavBar/NavBar';



const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ['400', '400'] });

// export const metadata = {
//   title: 'Expense Tracker',
//   description: 'Track your expenses easily',
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideNav = pathname === '/login' || pathname === '/';

  return (
    <html lang="en">
      <head>
        {/* Custom head elements can go here */}
      </head>
      <body className={`${inter.className} font-sans`}>
        {!hideNav && <Nav />}
        <main>{children}</main>
      </body>
    </html>
  );
}
