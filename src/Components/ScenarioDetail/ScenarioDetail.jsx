import React from 'react';

const ScenarioDetail = ({ title, videoUrl, description }) => {
  return (
    <div className="mb-8 border rounded-lg shadow-md overflow-hidden">
      <h2 className="text-xl font-semibold p-4 bg-blue-500 text-white">{title}</h2>
      <iframe 
        width="100%" 
        height="315" 
        src={videoUrl} 
        title={title} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen 
        className="w-full"
      ></iframe>
      <p className="p-4 text-gray-700">{description}</p>
    </div>
  );
};

export default ScenarioDetail;