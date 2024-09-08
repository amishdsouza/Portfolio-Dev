"use client";
import { useState } from "react";
import { CertificationList } from "@/data/constants";

// Define the type for certification items
type CertificationItem = {
  title: string;
  technology: string;
  institution?: string;
  instructor?: string;
  platform: string;
  imageUrl: string;
};

export const Certification = () => {
  // Use the title to identify selectedItem, but display technology in the sidebar
  const [selectedItem, setSelectedItem] = useState(CertificationList[0].title);

  // Retrieve content data by selected title
  const content = CertificationList.find(
    (item) => item.title === selectedItem
  )!;

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-xl rounded-lg">
        <nav className="space-y-3">
          {CertificationList.map(({ title, technology }) => (
            <button
              key={title}
              onClick={() => setSelectedItem(title)}
              className={`w-full text-left flex items-center space-x-3 p-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                selectedItem === title
                  ? "bg-indigo-600 text-white border-l-4 border-indigo-500 shadow-lg"
                  : "hover:bg-gray-200 bg-white text-gray-800"
              }`}
            >
              <span className="font-semibold text-lg">{technology}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
          {content.title}
        </h2>
        <div className="w-full max-w-3xl">
          <img
            src={content.imageUrl}
            alt={content.title}
            className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
          />
        </div>
        {/* Display the instructor, institution, and platform */}
        <div className="mt-4 text-center">
          {content.institution && (
            <p className="text-lg font-medium text-gray-700">
              Institution: {content.institution}
            </p>
          )}
          {content.instructor && (
            <p className="text-lg font-medium text-gray-700">
              Instructor: {content.instructor}
            </p>
          )}
          <p className="text-lg font-medium text-gray-700">
            Platform: {content.platform}
          </p>
        </div>
      </main>
    </div>
  );
};
