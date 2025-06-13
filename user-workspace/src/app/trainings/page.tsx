"use client";

import React, { useEffect, useState } from "react";

interface Training {
  _id: string;
  name: string;
  description?: string;
}

export default function TrainingsPage() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/trainings")
      .then((res) => res.json())
      .then((data) => {
        setTrainings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Trainings List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : trainings.length === 0 ? (
        <p>No trainings found.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((t) => (
              <tr key={t._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{t.name}</td>
                <td className="border border-gray-300 px-4 py-2">{t.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
