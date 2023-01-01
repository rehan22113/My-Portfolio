import "../App.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../libraries/use-follow-pointer";

export default function App() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="box bg-yellow-300 bg-opacity-20 -z-50 absolute"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001
      }}
    />
  );
}