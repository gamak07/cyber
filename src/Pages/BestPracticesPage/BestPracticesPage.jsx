import React, { useState } from "react";
import BestPracticeSection from "../../Components/BestPracticesSection/BestPracticesSection";

const BestPracticesPage = () => {
  const sections = [
    {
      title: "Fundamental Best Practices",
      practices: [
        {
          name: "Use Strong, Unique Passwords",
          description:
            "Create passwords that combine uppercase, lowercase letters, numbers, and symbols. Avoid using the same password for multiple accounts.",
          example: "Example: A strong password would be 'R@inB0w$123!'.",
        },
        {
          name: "Enable Two-Factor Authentication (2FA)",
          description:
            "2FA adds an additional layer of protection by requiring a second factor (like a code sent to your phone).",
          example: "Common 2FA methods: OTP, authentication apps, or biometric verification.",
        },
        {
          name: "Keep Software Up-to-Date",
          description:
            "Regular updates patch security vulnerabilities in operating systems, browsers, and apps.",
          example: "Enable automatic updates where possible.",
        },
      ],
    },
    {
      title: "Advanced Best Practices",
      practices: [
        {
          name: "Implement Least Privilege Access",
          description:
            "Only grant users the minimum access they need to perform their tasks, reducing the chance of accidental or malicious changes.",
          example: "Example: A marketing team member doesn’t need access to financial data.",
        },
        {
          name: "Use Virtual Private Networks (VPNs)",
          description:
            "VPNs encrypt your internet connection, making it difficult for attackers to intercept sensitive data.",
          example: "Use VPNs when accessing public Wi-Fi networks.",
        },
      ],
    },
    {
      title: "Network Security Best Practices",
      practices: [
        {
          name: "Segment Networks",
          description:
            "Divide your network into segments to isolate sensitive data from the rest of the network.",
          example: "Keep IoT devices on a separate network segment.",
        },
        {
          name: "Use Network Access Control (NAC)",
          description:
            "NAC ensures that only authorized devices and users can access your network.",
          example: "Implement NAC policies to block unauthorized devices.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Cybersecurity Best Practices</h1>
      <p className="text-lg text-gray-700 mb-8">
        Stay informed and protected by following these essential cybersecurity best practices. 
        Each section provides recommendations and actionable tips.
      </p>

      {sections.map((section, index) => (
        <BestPracticeSection key={index} section={section} />
      ))}

    </div>
  );
};

// Section Component to render each category of practices


export default BestPracticesPage;