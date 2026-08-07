import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1500),
      setTimeout(() => setStep(3), 2200),
      setTimeout(() => setStep(4), 2800),
      setTimeout(() => {
        setStep(5);
        setTimeout(onComplete, 500);
      }, 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: step === 5 ? 0 : 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary-bg font-mono text-sm sm:text-base text-accent-blue"
    >
      <div className="flex flex-col items-start w-64">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white font-bold mb-4 tracking-widest text-xl"
        >
          SAKSHI
        </motion.div>
        
        <div className="h-6 mb-2">
          {step >= 1 && <span>Initializing Portfolio...</span>}
        </div>
        
        <div className="h-6 mb-2 w-full">
          {step >= 2 && (
            <div className="flex items-center gap-2">
              <span className="text-accent-purple">██████████</span>
              <span className="text-white">100%</span>
            </div>
          )}
        </div>
        
        <div className="h-6 mb-2">
          {step >= 3 && <span className="text-secondary-text">Loading AI Models...</span>}
        </div>
        
        <div className="h-6 mb-2">
          {step >= 4 && <span className="text-secondary-text">Connecting Projects...</span>}
        </div>
        
        <div className="h-6 mt-4">
          {step >= 5 && <span className="text-green-400">Ready.</span>}
        </div>
      </div>
    </motion.div>
  );
};
