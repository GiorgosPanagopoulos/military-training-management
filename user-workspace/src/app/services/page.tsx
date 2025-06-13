"use client";

import React, { useEffect, useState } from "react";

interface Service {
  _id: string;
  name: string;
  description?: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Services List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : services.length === 0 ? (
        <p>No services found.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{s.name}</td>
                <td className="border border-gray-300 px-4 py-2">{s.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
