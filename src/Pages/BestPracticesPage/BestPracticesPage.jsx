import React from "react";
import BestPracticeSection from '../../Components/BestPracticesSection/BestPracticesSection';

const BestPracticesPage = () => {
  const sections = [
    {
      title: "Fundamental Best Practices",
      practices: [
        {
          name: "Use Strong, Unique Passwords",
          description: "Combine letters, numbers, and special characters for robust passwords.",
          example: "Example: A strong password would be 'M@rble!2023$'.",
        },
        {
          name: "Enable Two-Factor Authentication (2FA)",
          description: "Add an extra layer of security by requiring a second verification step.",
          example: "Example: Receiving a code via SMS in addition to your password.",
        },
        {
          name: "Keep Software Up-to-Date",
          description: "Regularly update operating systems, browsers, and applications to protect against vulnerabilities.",
          example: "Example: Enabling automatic updates for your operating system.",
        },
        {
          name: "Use Antivirus Software",
          description: "Install and regularly update antivirus software to protect against malware.",
          example: "Example: Using Norton or McAfee to scan for threats.",
        },
        {
          name: "Be Cautious with Emails",
          description: "Avoid suspicious links and attachments to prevent phishing attacks.",
          example: "Example: Verifying the sender before clicking on any links.",
        },
        {
          name: "Use Secure Networks",
          description: "Prefer HTTPS over HTTP to ensure secure communications.",
          example: "Example: Accessing your bank’s website using 'https://'.",
        },
        {
          name: "Back Up Data",
          description: "Regularly back up important data to prevent loss.",
          example: "Example: Using cloud services like Google Drive or physical backups.",
        },
        {
          name: "Use Firewalls",
          description: "Enable firewalls for network and system protection.",
          example: "Example: Using the built-in firewall on Windows or macOS.",
        },
        {
          name: "Use Encryption",
          description: "Protect sensitive data with encryption to prevent unauthorized access.",
          example: "Example: Using tools like BitLocker or VeraCrypt.",
        },
        {
          name: "Monitor Accounts",
          description: "Regularly check account activity for any unauthorized access.",
          example: "Example: Reviewing bank statements or login alerts.",
        },
      ],
    },
    {
      title: "Advanced Best Practices",
      practices: [
        {
          name: "Implement Least Privilege Access",
          description: "Limit user privileges to only what is necessary.",
          example: "Example: A guest user having access only to public folders.",
        },
        {
          name: "Use Virtual Private Networks (VPNs)",
          description: "Secure remote connections and protect your online activities.",
          example: "Example: Using ExpressVPN when accessing sensitive information.",
        },
        {
          name: "Conduct Regular Security Audits",
          description: "Identify vulnerabilities in your security posture.",
          example: "Example: Scheduling quarterly security assessments.",
        },
        {
          name: "Implement Intrusion Detection/Prevention Systems (IDPS)",
          description: "Detect and prevent threats to your network.",
          example: "Example: Using Snort or Suricata for intrusion detection.",
        },
        {
          name: "Use Secure Communication Protocols",
          description: "Utilize secure protocols like SFTP and SSH for data transfer.",
          example: "Example: Using SFTP to upload files to a server securely.",
        },
        {
          name: "Enable Log Monitoring",
          description: "Monitor system logs for unusual activities.",
          example: "Example: Using tools like Splunk for log analysis.",
        },
        {
          name: "Implement Incident Response Plans",
          description: "Prepare for security incidents with a structured response plan.",
          example: "Example: Creating a plan that outlines steps to take in case of a breach.",
        },
        {
          name: "Use Secure Cloud Storage",
          description: "Choose reputable cloud storage providers to protect your data.",
          example: "Example: Using Dropbox with encryption for sensitive files.",
        },
        {
          name: "Use Secure Browser Extensions",
          description: "Enhance browser security with ad-blockers and password managers.",
          example: "Example: Using LastPass to manage passwords securely.",
        },
        {
          name: "Stay Informed",
          description: "Keep updated on the latest threats and technologies.",
          example: "Example: Following cybersecurity blogs or subscribing to newsletters.",
        },
      ],
    },
    {
      title: "Network Security Best Practices",
      practices: [
        {
          name: "Segment Networks",
          description: "Isolate sensitive data from the rest of the network.",
          example: "Example: Keeping IoT devices on a separate network segment.",
        },
        {
          name: "Use Network Access Control (NAC)",
          description: "Control network access for authorized devices and users.",
          example: "Example: Implementing NAC policies to block unauthorized devices.",
        },
        {
          name: "Implement DNS Security",
          description: "Secure DNS queries to prevent attacks.",
          example: "Example: Using DNSSEC to authenticate DNS responses.",
        },
        {
          name: "Use Secure Routing Protocols",
          description: "Utilize secure protocols for routing to enhance network security.",
          example: "Example: Using BGP with security enhancements.",
        },
        {
          name: "Monitor Network Traffic",
          description: "Analyze network traffic for anomalies.",
          example: "Example: Using Wireshark to inspect network packets.",
        },
      ],
    },
    {
      title: "Cloud Security Best Practices",
      practices: [
        {
          name: "Choose Reputable Providers",
          description: "Research cloud providers for security features and compliance.",
          example: "Example: Choosing AWS or Azure for their robust security measures.",
        },
        {
          name: "Use Cloud Security Gateways",
          description: "Secure cloud data by monitoring and filtering access.",
          example: "Example: Using McAfee Cloud Security to protect cloud applications.",
        },
        {
          name: "Implement Cloud Access Security Broker (CASB)",
          description: "Monitor and enforce security policies across cloud services.",
          example: "Example: Using Netskope to monitor cloud usage.",
        },
        {
          name: "Use Cloud Encryption",
          description: "Encrypt data stored in the cloud to safeguard it.",
          example: "Example: Encrypting files before uploading them to Google Drive.",
        },
        {
          name: "Monitor Cloud Logs",
          description: "Analyze cloud logs for security incidents and compliance.",
          example: "Example: Using AWS CloudTrail for log monitoring.",
        },
      ],
    },
    {
      title: "Endpoint Security Best Practices",
      practices: [
        {
          name: "Use Endpoint Detection and Response (EDR)",
          description: "Detect and respond to threats on endpoints.",
          example: "Example: Implementing CrowdStrike for endpoint security.",
        },
        {
          name: "Implement Endpoint Encryption",
          description: "Encrypt endpoint data to protect against theft.",
          example: "Example: Using BitLocker to encrypt Windows devices.",
        },
        {
          name: "Use Secure Endpoint Configuration",
          description: "Secure endpoint settings to minimize vulnerabilities.",
          example: "Example: Disabling unused services and features.",
        },
        {
          name: "Monitor Endpoint Activity",
          description: "Analyze endpoint activity for suspicious behavior.",
          example: "Example: Using Sysinternals tools for monitoring.",
        },
        {
          name: "Use Secure Endpoint Software",
          description: "Ensure that all endpoint software is secure and updated.",
          example: "Example: Using trusted antivirus solutions on all devices.",
        },
      ],
    },
    {
      title: "Identity and Access Management (IAM) Best Practices",
      practices: [
        {
          name: "Implement IAM Solutions",
          description: "Manage user identities and control access.",
          example: "Example: Using Okta for centralized identity management.",
        },
        {
          name: "Use Multi-Factor Authentication (MFA)",
          description: "Add extra security layers by requiring multiple forms of verification.",
          example: "Example: Using a mobile app to generate authentication codes.",
        },
        {
          name: "Use Role-Based Access Control (RBAC)",
          description: "Limit user access based on roles to enhance security.",
          example: "Example: Granting read-only access to certain users based on their roles.",
        },
        {
          name: "Monitor Identity Activity",
          description: "Analyze identity-related activity to detect unauthorized access.",
          example: "Example: Reviewing access logs regularly for anomalies.",
        },
        {
          name: "Use Secure Password Policies",
          description: "Enforce strong password policies to enhance security.",
          example: "Example: Requiring passwords to be at least 12 characters long with a mix of character types.",
        },
      ],
    },
    {
      title: "Incident Response Best Practices",
      practices: [
        {
          name: "Develop Incident Response Plans",
          description: "Prepare for incidents with a structured response plan.",
          example: "Example: Creating a detailed response guide for data breaches.",
        },
        {
          name: "Establish Incident Response Teams",
          description: "Assemble dedicated teams to handle security incidents.",
          example: "Example: Forming a cross-departmental team to respond to incidents.",
        },
        {
          name: "Conduct Regular Incident Response Training",
          description: "Train teams to improve their incident response skills.",
          example: "Example: Running simulation exercises to practice response plans.",
        },
        {
          name: "Monitor Incident Response",
          description: "Analyze incident response effectiveness and make improvements.",
          example: "Example: Reviewing response actions taken after a security incident.",
        },
        {
          name: "Review and Update Incident Response Plans",
          description: "Regularly improve incident response plans based on lessons learned.",
          example: "Example: Adjusting response plans after a post-incident review.",
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
