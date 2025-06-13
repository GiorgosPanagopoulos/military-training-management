"use client";

import React, { useEffect, useState } from "react";

interface PersonnelTraining {
  _id: string;
  personnelId: { name: string };
  trainingId: { name: string };
  score: number;
  successPercentage: number;
}

export default function PersonnelTrainingsPage() {
  const [records, setRecords] = useState<PersonnelTraining[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/personnelTrainings")
      .then((res) => res.json())
      .then((data) => {
        setRecords(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Personnel Training Records</h2>
      {loading ? (
        <p>Loading...</p>
      ) : records.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Personnel</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Training</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Score</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Success %</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <tr key={r._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{r.personnelId.name}</td>
                <td className="border border-gray-300 px-4 py-2">{r.trainingId.name}</td>
                <td className="border border-gray-300 px-4 py-2">{r.score}</td>
                <td className="border border-gray-300 px-4 py-2">{r.successPercentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
