"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleSignup = (event) => {
    event.preventDefault();
    // TODO: signup logic
    router.push('/dashboard');
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // TODO: login logic
    router.push('/dashboard');
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to Expense Tracker</h1>
      </div>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Registration</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email address</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500">Signup</button>
        </form>
        <div className="mt-6 text-center">
          <Link href="/login" className="text-blue-500 hover:text-white">Login</Link>
        </div>
      </div>
    </main>
  );
}