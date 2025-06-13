"use client";

import React, { useEffect, useState } from "react";

interface Personnel {
  _id: string;
  name: string;
  rank: string;
  serviceId: string;
}

export default function HomePage() {
  const [personnel, setPersonnel] = useState<Personnel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/personnel")
      .then((res) => res.json())
      .then((data) => {
        setPersonnel(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Personnel List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : personnel.length === 0 ? (
        <p>No personnel found.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Rank</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Service ID</th>
            </tr>
          </thead>
          <tbody>
            {personnel.map((p) => (
              <tr key={p._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{p.name}</td>
                <td className="border border-gray-300 px-4 py-2">{p.rank}</td>
                <td className="border border-gray-300 px-4 py-2">{p.serviceId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
