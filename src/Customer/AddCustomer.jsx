import React, { useState } from 'react';

const AddCustomer = () => {
  const [step, setStep] = useState(0); // Track which step is active

  const handleClick = (stepIndex) => {
    if (stepIndex === step + 1) {
      setStep(stepIndex); // Move to next step if it's sequential
    }
  };

  const getButtonStyle = (index) => {
    if (index < step) {
      return 'bg-green-500'; // Green for completed steps
    }
    if (index === step) {
      return 'bg-blue-500'; // Blue for current step
    }
    return 'bg-red-500'; // Red for pending steps
  };

  return (
    <div className="bg-red-300 h-screen flex items-center justify-between">
    <div className="p-3 bg-green-400 h-full">
        
    </div>
</div>

  );
};

export default AddCustomer;
