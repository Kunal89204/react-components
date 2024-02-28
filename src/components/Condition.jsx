import React, { useState } from 'react';

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = () => {
    closeDialog();
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openDialog}>Open Dialog</button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50" onClick={handleBackdropClick}>
          <div className="bg-white p-6 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
            <p className="text-gray-800">This is a dialog box.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={closeDialog}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dialog;
