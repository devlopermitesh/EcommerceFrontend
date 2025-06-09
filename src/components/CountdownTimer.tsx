"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, AlarmClock } from "lucide-react";

interface CountdownTimerProps {
  endTime: Date;
}

const timeVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const end = new Date(endTime).getTime();
    const difference = end - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <motion.div
      className="flex gap-3 bg-white text-black px-4 py-2 rounded-lg items-center justify-start w-full max-w-xl"
      initial="initial"
      animate="animate"
    >
      <motion.div className="flex flex-col items-center" variants={timeVariants}>
        <span className="text-2xl font-bold">{timeLeft.days}</span>
        <span className="text-xs text-gray-500">Days</span>
      </motion.div>

      <motion.div className="text-xl">:</motion.div>

      <motion.div className="flex flex-col items-center" variants={timeVariants}>
        <span className="text-2xl font-bold">{timeLeft.hours}</span>
        <span className="text-xs text-gray-500">Hours</span>
      </motion.div>

      <motion.div className="text-xl">:</motion.div>

      <motion.div className="flex flex-col items-center" variants={timeVariants}>
        <span className="text-2xl font-bold">{timeLeft.minutes}</span>
        <span className="text-xs text-gray-500">Mins</span>
      </motion.div>

      <motion.div className="text-xl">:</motion.div>

      <motion.div className="flex flex-col items-center" variants={timeVariants}>
        <span className="text-2xl font-bold">{timeLeft.seconds}</span>
        <span className="text-xs text-gray-500">Secs</span>
      </motion.div>

      <span className="ml-4 text-xl hidden sm:flex animate-alarm animate-pulse">
        <AlarmClock className="text-black " />
      </span>
    </motion.div>
  );
};
