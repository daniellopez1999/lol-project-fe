import React from 'react';

interface Base64ImageProps {
  base64String: string;
}

const Base64Image: React.FC<Base64ImageProps> = ({ base64String }) => {
  return (
    <div>
      <img src={`data:image/png;base64,${base64String}`} alt="Base64" />
    </div>
  );
};

export default Base64Image;
