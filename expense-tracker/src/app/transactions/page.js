"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [dateFilter, setDateFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Fetch transactions from backend
    fetch('/api/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data.transactions);
        setFilteredTransactions(data.transactions);
      });
  }, []);

  useEffect(() => {
    handleFilter();
  }, [dateFilter, categoryFilter]);

  const handleFilter = () => {
    let filtered = transactions;
    if (dateFilter) {
      filtered = filtered.filter(transaction => transaction.date === dateFilter);
    }
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(transaction => transaction.category === categoryFilter);
    }
    setFilteredTransactions(filtered);
  };

  const handleAddTransaction = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className="flex flex-col items-center justify-center p-4 bg-black text-white min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Transactions</h1>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-medium">Filter by Date</label>
              <input 
                type="date" 
                className="mt-1 p-2 bg-gray-700 rounded-lg"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Filter by Category</label>
              <select 
                className="mt-1 p-2 bg-gray-700 rounded-lg"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="Food">Food</option>
                <option value="Salary">Salary</option>
                <option value="Utilities">Utilities</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <button 
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500"
            onClick={handleAddTransaction}
          >
            Add New Transaction
          </button>
        </div>
        <table className="min-w-full bg-gray-800">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <tr key={index} className="text-left">
                <td className="p-2 border-t border-gray-700">{transaction.date}</td>
                <td className="p-2 border-t border-gray-700">{transaction.name}</td>
                <td className={`p-2 border-t border-gray-700 ${transaction.type === 'credit' ? 'bg-blue-200' : 'bg-red-200'}`}>
                  {transaction.amount}
                </td>
                <td className="p-2 border-t border-gray-700">{transaction.category}</td>
                <td className="p-2 border-t border-gray-700">
                  <button className="text-yellow-500 hover:text-yellow-700">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Add New Transaction</h2>
            <form>
              {/* Add form fields here */}
              <div className="flex justify-end mt-4">
                <button 
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 mr-2"
                  type="submit"
                >
                  Save
                </button>
                <button 
                  className="bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-500"
                  type="button"
                  onClick={handleClosePopup}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
