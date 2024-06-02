import { Inter, Poppins, } from "next/font/google";
import "./globals.css";
import NavBar from '../components/NavBar/NavBar';


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ['400', '400'] });

export const metadata = {
  title: 'Expense Tracker',
  description: 'Track your expenses easily',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <NavBar /> */}
          {children}
        
      </body>
    </html>
  );
}
