import React from 'react';
import ScenarioDetail from '../../Components/ScenarioDetail/ScenarioDetail';

const SimulationPage = () => {
  const simulations = [
    {
      title: 'Phishing Attack Simulation',
      videoUrl: 'https://www.youtube.com/embed/E1lgWGJgSFY?si=LORRQIR57mYWl2ld',
      description:
        'Learn how phishing attacks are executed and how to identify and avoid them.',
    },
    {
      title: 'Ransomware Attack Simulation',
      videoUrl: 'https://www.youtube.com/embed/tfOM3Fg3Bz4?si=Qjbt04eBV9I-gKVJ',
      description:
        'Explore how ransomware attacks lock data and demand payment for decryption.',
    },
    {
      title: 'Password Cracking Simulation',
      videoUrl: 'https://www.youtube.com/embed/JRpg84eJHIM?si=PZpZDxPh07tb2Dw4',
      description:
        'See how weak passwords are cracked and learn strategies for strong password creation.',
    },
    {
      title: 'Network Intrusion Simulation',
      videoUrl: 'https://www.youtube.com/embed/GJLmRizywsc?si=TAh5D6lZXgeQFj4o',
      description:
        'Understand how attackers infiltrate networks and how to defend against them.',
    },
    {
      title: 'Social Engineering Simulation',
      videoUrl: 'https://www.youtube.com/embed/XEtvwzN_xJk?si=_iKGrOfDmB33YWYY',
      description:
        'Learn how attackers manipulate people into giving up confidential information.',
    },
  ];

  return (
    <div className='mx-[3rem]'>
      <h1 className='max-w-7xl mx-auto px-4 py-8'>Cybersecurity Attack Simulations</h1>
      <p className="text-3xl font-bold mb-4">
        Explore real-world cybersecurity scenarios through our interactive simulations.
      </p>

      {/* Render each Simulation */}
      {simulations.map((sim, index) => (
        <ScenarioDetail
          key={index}
          title={sim.title}
          videoUrl={sim.videoUrl}
          description={sim.description}
        />
      ))}
    </div>
  );
};

export default SimulationPage;
