import React, { useState } from "react";

const BestPracticeSection = ({ section }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="mb-6 border-b pb-4">
        <h2 
          onClick={() => setIsOpen(!isOpen)} 
          className="cursor-pointer text-xl font-semibold mb-2 flex justify-between items-center"
        >
          {section.title} 
          <span>{isOpen ? "▼" : "▶"}</span>
        </h2>
  
        {isOpen && (
          <ul className="pl-4">
            {section.practices.map((practice, index) => (
              <li key={index} className="mb-4">
                <h3 className="font-bold">{practice.name}</h3>
                <p className="text-gray-700">{practice.description}</p>
                <p><strong>Example:</strong> {practice.example}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default BestPracticeSection