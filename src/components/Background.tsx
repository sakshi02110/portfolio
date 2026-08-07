import { motion } from "framer-motion";

export const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-primary-bg" />
      
      {/* Animated gradient mesh */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_50%)]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 -right-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)]"
      />

      {/* Floating blurred circles */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik02MCAwaC0xdjYwaDFWMHptLTYwIDYwaDYwdi0xSDB2MXoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L2c+PC9zdmc+')] opacity-50" />
    </div>
  );
};
