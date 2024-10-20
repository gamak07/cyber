import React, { useState } from 'react';

const questions = [
  {
    question: "What is the most common way cybercriminals deliver malware?",
    options: ["Through software updates", "Phishing emails", "Social media messages", "Bluetooth connections"],
    answer: 1
  },
  {
    question: "Which of the following is a strong password?",
    options: ["password123", "MyPetName", "W!nT3r_2024$", "123456"],
    answer: 2
  },
  {
    question: "What does the ‘S’ in HTTPS stand for?",
    options: ["Secure", "Safe", "Simple", "Server"],
    answer: 0
  },
  {
    question: "What is phishing?",
    options: ["A technique used to encrypt data", "Sending fake emails to steal personal information", "A type of firewall", "A social media scam"],
    answer: 1
  },
  {
    question: "What is the purpose of Two-Factor Authentication (2FA)?",
    options: ["To encrypt data", "To provide two ways to log in", "To add an extra layer of security", "To prevent malware infections"],
    answer: 2
  },
  {
    question: "Which of the following is NOT a form of malware?",
    options: ["Ransomware", "Spyware", "Firewall", "Trojan horse"],
    answer: 2
  },
  {
    question: "What is a VPN used for?",
    options: ["To block viruses", "To encrypt internet traffic", "To monitor employee activity", "To backup files"],
    answer: 1
  },
  {
    question: "What does a firewall do?",
    options: ["Scans for viruses", "Filters network traffic to block unauthorized access", "Encrypts emails", "Prevents phishing attacks"],
    answer: 1
  },
  {
    question: "What type of attack involves overwhelming a website with traffic?",
    options: ["Phishing", "Ransomware", "Denial of Service (DoS)", "Man-in-the-Middle"],
    answer: 2
  },
  {
    question: "Which one of these is an example of social engineering?",
    options: ["Installing antivirus software", "Tricking a person into revealing their password", "Encrypting files for security", "Sending a software update"],
    answer: 1
  },
  {
    question: "What should you do if you receive an email from an unknown sender with a suspicious attachment?",
    options: ["Open the attachment", "Delete the email immediately", "Forward the email to your contacts", "Reply to the sender asking for clarification"],
    answer: 1
  },
  {
    question: "What is ransomware?",
    options: ["A type of antivirus software", "A malware that encrypts files and demands payment for decryption", "A type of phishing attack", "A tool used by security professionals"],
    answer: 1
  },
  {
    question: "Which cybersecurity practice involves limiting user access to only what is necessary?",
    options: ["Least Privilege Access", "Open Access Policy", "Network Segmentation", "Full Access Control"],
    answer: 0
  },
  {
    question: "What is encryption?",
    options: ["Scanning for viruses", "Converting data into a secure code to prevent unauthorized access", "Blocking phishing emails", "Monitoring internet usage"],
    answer: 1
  },
  {
    question: "What is the purpose of a security audit?",
    options: ["To reduce internet speed", "To identify vulnerabilities and improve security", "To remove malware from the system", "To allow unrestricted access to the network"],
    answer: 1
  }
];

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = value;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getScore = () => {
    return userAnswers.filter((answer, index) => answer === questions[index].answer).length;
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Cybersecurity Quiz</h1>

      {submitted ? (
        <div className="text-lg text-center">
          <h2 className="mb-4">Your Score: {getScore()} out of {questions.length}</h2>
          <button onClick={() => setSubmitted(false)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Try Again
          </button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          {questions.map((q, index) => (
            <div key={index} className="mb-6 bg-white p-4 rounded shadow-md">
              <h2 className="font-semibold">{index + 1}. {q.question}</h2>
              {q.options.map((option, i) => (
                <label key={i} className="block mt-2">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={i}
                    checked={userAnswers[index] === i}
                    onChange={() => handleAnswerChange(index, i)}
                    required
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
            Submit
          </button>
        </form>
      )}
      
    </div>
  );
};

export default Quiz;