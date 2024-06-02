"use client";

import Link from "next/link";
import { useState } from 'react';

export default function Nav() {
  // Temporary session state
  const [session, setSession] = useState(true); // set true/false to test
  
  const handleLogout = () => {
    setSession(false);
    // TODO: Handle logout
    window.location.href = '/';
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-white text-lg font-semibold">
          Expense Tracker
        </p>
        <div className="flex space-x-4">
          <Link href="/dashboard" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
          <Link href="/transactions" className="text-gray-300 hover:text-white">
            Transactions
          </Link>
          <Link href="/reports" className="text-gray-300 hover:text-white">
            Reports
          </Link>
          {session ? (
            <span
              className="text-gray-300 hover:text-white cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </span>
          ) : (
            <Link href="/login" className="text-gray-300 hover:text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
