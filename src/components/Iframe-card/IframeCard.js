import React from "react";

const IframeCard = ({ src, title }) => (
  <div className="iframe-card">
    <iframe title={title} src={src} frameBorder="0" allowFullScreen />
  </div>
);

export default IframeCard;
