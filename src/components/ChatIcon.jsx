import React from 'react';
import { FaCommentDots } from 'react-icons/fa'; // You can use any icon library like FontAwesome

const ChatIcon = () => {
  const handleClick = () => {
    // Handle chat icon click event (e.g., open chat window)
    alert('Chat icon clicked!');
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#FFFFFF',
        color: '#1D1F24',
        borderRadius: '50%',
        padding: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        zIndex: 1000,
      }}
    >
      <FaCommentDots size={24} />
    </div>
  );
};

export default ChatIcon;
