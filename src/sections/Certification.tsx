"use client";
import { useState } from "react";
import { CertificationList } from "@/data/constants";

// Define the type for certification items
type CertificationItem = {
  title: string;
  institution?: string;
  instructor?: string;
  platform: string;
  imageUrl: string;
};

// Create a type for the certification keys
type ContentKeys = CertificationItem["title"];

// Create a record for content data based on CertificationList
const contentData: Record<ContentKeys, { title: string; imageUrl: string }> =
  CertificationList.reduce(
    (acc, { title, imageUrl }) => ({
      ...acc,
      [title]: { title, imageUrl },
    }),
    {} as Record<ContentKeys, { title: string; imageUrl: string }>
  );

export const Certification = () => {
  // Restrict selectedItem to only be one of the keys in contentData
  const [selectedItem, setSelectedItem] = useState<ContentKeys>(
    CertificationList[0].title
  );

  const handleItemClick = (title: ContentKeys) => {
    setSelectedItem(title);
  };

  const content = contentData[selectedItem];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 h-screen p-4">
        <div className="space-y-2">
          {CertificationList.map(({ title }) => (
            <div
              key={title}
              onClick={() => handleItemClick(title as ContentKeys)}
              className={`flex items-center space-x-2 p-3 cursor-pointer rounded-lg ${
                selectedItem === title
                  ? "bg-indigo-300 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <span className="text-xl">
                {title === "Front End Web UI Frameworks and Tools"
                  ? "📜"
                  : "📄"}
              </span>
              <span className="font-medium">{title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-50 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold mb-4">{content.title}</h2>
        <img
          src={content.imageUrl}
          alt={content.title}
          className="w-full md:w-80 lg:w-96 h-auto object-cover rounded-lg shadow-md"
        />
      </main>
    </div>
  );
};
