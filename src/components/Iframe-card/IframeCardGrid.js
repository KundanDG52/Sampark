import React from "react";
import IframeCard from "./IframeCard"; // Import the IframeCard component
// import "./IframeStyles";

const IframeCardGrid = () => {
  // Sample iframe URLs, you can replace them with your actual URLs
  const iframeUrls = [
    "https://www.example.com/iframe1",
    "https://www.example.com/iframe2",
    "https://www.example.com/iframe3",
    "https://www.example.com/iframe4",
    "https://www.example.com/iframe5",
    "https://www.example.com/iframe6",
    "https://www.example.com/iframe7",
    "https://www.example.com/iframe8",
  ];

  return (
    <div className="iframe-card-grid">
      {iframeUrls.map((url, index) => (
        <IframeCard key={index} src={url} title={`Iframe ${index + 1}`} />
      ))}
    </div>
  );
};

export default IframeCardGrid;
