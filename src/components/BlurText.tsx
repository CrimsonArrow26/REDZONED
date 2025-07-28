import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  onAnimationComplete?: () => void;
}

export default function BlurText({
  text,
  delay = 150,
  animateBy = "words",
  direction = "top",
  onAnimationComplete
}: BlurTextProps) {
  const items = animateBy === "words" ? text.split(" ") : text.split("");

  const directions = {
    top: { y: -10, opacity: 0, filter: "blur(10px)" },
    bottom: { y: 10, opacity: 0, filter: "blur(10px)" },
    left: { x: -10, opacity: 0, filter: "blur(10px)" },
    right: { x: 10, opacity: 0, filter: "blur(10px)" }
  };

  return (
    <span className="inline-block overflow-hidden">
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={directions[direction]}
          animate={{ x: 0, y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: i * (delay / 1000) }}
          onAnimationComplete={i === items.length - 1 ? onAnimationComplete : undefined}
          className="inline-block mr-1"
        >
          {item}
        </motion.span>
      ))}
    </span>
  );
}
