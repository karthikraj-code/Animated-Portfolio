import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center"
          style={{ backgroundColor: "#0a0a0f" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <motion.span
              className="font-mono text-7xl font-bold tracking-tighter"
              style={{
                color: "#58a6ff",
                fontFamily: "'Fira Code', monospace",
                textShadow: "0 0 30px rgba(88,166,255,0.5)",
              }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(88,166,255,0.4)",
                  "0 0 60px rgba(88,166,255,0.9)",
                  "0 0 20px rgba(88,166,255,0.4)",
                ],
              }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              KR.
            </motion.span>
            <motion.div
              className="mt-6 flex justify-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#58a6ff" }}
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
