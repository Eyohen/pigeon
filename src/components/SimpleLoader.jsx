import React from 'react';

const SimpleLoader = ({ size = 60, color = '#F08E1F' }) => {
  return (
    <div className="loader-wrapper">
      <div className="loader"></div>

      <style>{`
        .loader-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .loader {
          width: ${size}px;
          height: ${size}px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid ${color};
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SimpleLoader;