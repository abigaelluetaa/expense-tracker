"use client";

import Link from "next/link";
import { useState } from 'react';

export default function Nav() {
    // Temporary session state
    const [session, setSession] = useState(true); //set true/false to test
    return (
      <nav className="navbar">
        <div className="container">
          <Link href="/">
            <span className="logo">Expense Tracker</span>
          </Link>
          <div className="nav-links">
            <Link href="/dashboard"><span>Dashboard</span></Link>
            <Link href="/reports"><span>Reports</span></Link>
            {session ? (
            <span className="cursor-pointer" onClick={() => setSession(false)}>Logout</span>
            ) : (
              <Link href="/login"><span>Login</span></Link>
            )}
          </div>
        </div>
      </nav>
    );
  }

