
import { motion } from "framer-motion";

export default function LoadingIndicator() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 relative">
          <motion.div
            className="absolute w-full h-full rounded-full border-4 border-minecraft-secondary border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <p className="mt-4 text-white font-bold text-lg neon-text">Loading...</p>
      </motion.div>
    </div>
  );
}
